/*******************************************************************************
 * Copyright 2018 Dynamic Analysis Group, Università della Svizzera Italiana (USI)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
package ch.usi.inf.nodeprof.test.examples;

import java.util.Arrays;

import com.oracle.truffle.api.frame.VirtualFrame;
import com.oracle.truffle.api.instrumentation.EventContext;
import com.oracle.truffle.api.instrumentation.Instrumenter;
import com.oracle.truffle.api.instrumentation.TruffleInstrument.Env;

import ch.usi.inf.nodeprof.ProfiledTagEnum;
import ch.usi.inf.nodeprof.analysis.AnalysisFactory;
import ch.usi.inf.nodeprof.handlers.BaseEventHandlerNode;
import ch.usi.inf.nodeprof.handlers.PropertyReadEventHandler;
import ch.usi.inf.nodeprof.handlers.PropertyWriteEventHandler;
import ch.usi.inf.nodeprof.handlers.VarReadEventHandler;
import ch.usi.inf.nodeprof.handlers.VarWriteEventHandler;
import ch.usi.inf.nodeprof.handlers.LiteralEventHandler;
import ch.usi.inf.nodeprof.test.TestableNodeProfAnalysis;
import ch.usi.inf.nodeprof.utils.Logger;

public class TaintAnalysis extends TestableNodeProfAnalysis {

    private String[] sources;
    private String[] sinks;

    // Default visibility to ensure visbility in anonymous subclasses
    public StackMachine stackMachine;

    /**
     * Creates a basic taint analysis. By default, no sources or sinks are
     * specified. Use TaintAnalysis#initializeSpec to customize the analysis.
     */
    public TaintAnalysis(Instrumenter instrumenter, Env env) {
        super("TaintAnalysis", instrumenter, env);
        this.resetSpec();
    }

    /**
     * Initializes the sources and sinks to be used in this taint analysis.
     */
    public void initializeSpec(String[] sources, String[] sinks) {
        this.sources = sources;
        this.sinks = sinks;
        this.initializeStackMachine();
    }

    /**
     * Called automatically in between tests.
     */
    @Override
    public void onClear() {
        Logger.debug("taint analysis reset.");
        this.resetSpec();
        this.initializeStackMachine();
    }

    /**
     * Called automatically when this test is done.
     */
    @Override
    public void printResult() {
        Logger.info("TaintAnalysis analysis finishes.");
        Logger.info(stackMachine.generateReport());
    }


    /**
     * Hook our callbacks into the AST, just like Jalangi.
     */
    @Override
    public void initCallbacks() {
        // This JavaScript implementation slightly transforms our input code
        // before running. This means even straightforward variable writes,
        // like:
        //     var a = 1;
        //     a = 5;
        // are actually treated as property reads, most likely because each
        // local variable is translated to something like a property of `this`.

        // This means, in order to hook into *all* variable reads and writes,
        // callbacks must also be initialized for property reads and writes.
        // This is how Jalangi analyses do them, and this simple taint analysis
        // takes the same approach.

        this.onCallback(ProfiledTagEnum.VAR_READ,
                new AnalysisFactory<BaseEventHandlerNode>() {
                    @Override
                    public BaseEventHandlerNode create(EventContext context) {
                        Logger.debug("creating var read event handler...");
                        return new VarReadEventHandler(context) {
                            @Override
                            public void executePost(VirtualFrame frame, Object result, Object[] inputs) {
                                Logger.debug("Instrumenting variable read");
                                Logger.debug("var_read name: "
                                        + this.getName());
                                Logger.debug("var_read iid: "
                                        + this.getSourceIID());
                                stackMachine.readVar(this.getSourceIID(), this.getName());
                            }
                        };
                    }
                });
        this.onCallback(ProfiledTagEnum.PROPERTY_READ,
                new AnalysisFactory<BaseEventHandlerNode>() {
                    @Override
                    public BaseEventHandlerNode create(EventContext context) {
                        Logger.debug("creating property read event handler...");
                        return new PropertyReadEventHandler(context) {
                            @Override
                            public void executePost(VirtualFrame frame, Object result, Object[] inputs) {
                                Logger.debug("Instrumenting property read");
                                Logger.debug("property_read name: "
                                        + this.getProperty());
                                Logger.debug("property_read iid: "
                                        + this.getSourceIID());
                                stackMachine.readVar(this.getSourceIID(), this.getProperty());
                            }
                        };
                    }
                });
        this.onCallback(ProfiledTagEnum.VAR_WRITE, new AnalysisFactory<BaseEventHandlerNode>() {
            @Override
            public BaseEventHandlerNode create(EventContext context) {
                Logger.debug("creating var write event handler...");
                return new VarWriteEventHandler(context) {
                    @Override
                    public void executePre(VirtualFrame frame, Object[] inputs) {
                        Logger.debug("Instrumenting variable write");
                        Logger.debug("var_write name: "
                                + this.getName());
                        Logger.debug("var_write iid: "
                                + this.getSourceIID());
                        stackMachine.writeVar(this.getSourceIID(), this.getName());
                    }
                };
            }
        });
        this.onCallback(ProfiledTagEnum.PROPERTY_WRITE, new AnalysisFactory<BaseEventHandlerNode>() {
            @Override
            public BaseEventHandlerNode create(EventContext context) {
                Logger.debug("creating property write event handler...");
                return new PropertyWriteEventHandler(context) {
                    @Override
                    public void executePre(VirtualFrame frame, Object[] inputs) {
                        Logger.debug("Instrumenting property write");
                        Logger.debug("property_write name: "
                                + this.getProperty());
                        Logger.debug("property_write iid: "
                                + this.getSourceIID());
                        stackMachine.writeVar(this.getSourceIID(), this.getProperty());
                    }
                };
            }
        });
        this.onCallback(ProfiledTagEnum.LITERAL, new AnalysisFactory<BaseEventHandlerNode>() {
            @Override
            public BaseEventHandlerNode create(EventContext context) {
                Logger.debug("creating literal event handler...");
                return new LiteralEventHandler(context) {
                    @Override
                    public void executePre(VirtualFrame frame, Object[] inputs) {
                        Logger.debug("Instrumenting literal");
                        Logger.debug("literal type: "
                                + this.getLiteralType());
                        stackMachine.push(false);
                    }
                };
            }
        });

        Logger.debug("Callbacks initialized");
    }

    /**
     * Resets the sources and sinks to be used in this taint analysis.
     */
    private void resetSpec() {
        this.sources = new String[0];
        this.sinks = new String[0];
        this.initializeStackMachine();
    }

    /**
     * Re-initialize the stack machine when a change to the spec is made.
     */
    private void initializeStackMachine() {
        this.stackMachine = new StackMachine(Arrays.asList(sources), Arrays.asList(sinks));
    }
}
