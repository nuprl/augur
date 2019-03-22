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
package ch.usi.inf.nodeprof.test.examples.tests;

import java.io.IOException;
import java.io.File;
import java.io.FileReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.FileVisitOption;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import com.google.gson.Gson;

import org.junit.Test;

import com.oracle.js.parser.Source;
import com.oracle.truffle.api.instrumentation.Instrumenter;

import ch.usi.inf.nodeprof.analysis.AnalysisFilterSourceList;
import ch.usi.inf.nodeprof.test.BasicAnalysisTest;
import ch.usi.inf.nodeprof.test.TestableNodeProfAnalysis;
import ch.usi.inf.nodeprof.test.examples.TaintAnalysis;
import ch.usi.inf.nodeprof.utils.Logger;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import static org.junit.Assert.*;

/**
 * Taint analysis tester. It is a "parameterized" JUnit test, which basically
 * just means it is written in the context of just one test spec, and a static
 * method is provided to accumulate the test specs to evaluate at run-time. In
 * other words, it provides tools to dynamically generate test at run-time,
 * which in this case relies on the set of files in the test suite directory.
 */
@RunWith(Parameterized.class)
public class TaintAnalysisTest extends BasicAnalysisTest {

	/**
	 * Used to help find test suite files.
	 */
	private static final String basePath = "./src/ch.usi.inf.nodeprof.test/";
	private static final String suitePath = "js/taintSuite/";

	/**
	 * The Path to the spec file we are currently testing.
	 */
	private Path specPath;

	public TaintAnalysisTest(Path specPath) {
        super();
        this.specPath = specPath;
	}

	/**
	 * NodeProf calls this method when it wants a new TaintAnalysis.
	 * @param _instrumenter some internal NodeProf object
	 * @return our taint analysis
	 */
	@Override
	public TestableNodeProfAnalysis getAnalysis(Instrumenter _instrumenter) {
		return new TaintAnalysis(_instrumenter, null);
	}

	private void assertTaints(String... expectedTaints) {
		List<String> actualTaintsList =
				((TaintAnalysis) this.analysis).stackMachine.getTaintedVariables();
		String[] actualTaints = new String[actualTaintsList.size()];
		actualTaints = actualTaintsList.toArray(actualTaints);
		assertArrayEquals(expectedTaints, actualTaints);
	}

	/**
	 * Evaluates the file at "src/ch.usi.inf.nodeprof.test/$path", where
	 * "$path" is the given path.
	 */
	private void evaluateFileAtPath(String filePath) {
		evaluateFile(new File(filePath));
	}

	private void evaluateFile(File program) {
		try {
			// Time and execute source
			long start = System.currentTimeMillis();
			context.eval("js", Source.readFully(new FileReader(program)));
			long end = System.currentTimeMillis();

			// Report statistics
			Logger.info("Execution of " + program.getName() + " took " + (end - start) + " ms!");
		} catch (IOException e) {
			Logger.error("Failed to open file \"" + program.getName() + "\"!");
			Logger.error("Full path of file: " + program.getPath());
		}
	}

	/**
	 * Perform a test according to the given spec, including execution, timing,
	 * and verification of results.
	 * @param spec the spec to use
	 */
	private void performTest(TaintAnalysisSpec spec) {
		Logger.info("Testing specPath: " + specPath.toString());
        // As we are subclassing BasicAnalysisTest, this cast is necessary at the moment
		TaintAnalysis analysis = (TaintAnalysis) this.analysis;

		// Initialize stack machine with specPath values
		analysis.initializeSpec(spec.sources, spec.sinks);

		// Actually run file
		evaluateFileAtPath(specPath.getParent().toString() + "/" + spec.main);

		// Assert the currently tainted variables are what's expected
		assertTaints(spec.expectedTaints);
	}

	/**
	 * The JUnit hook to execute a test for one file.
	 * @throws IOException if the file cannot be read
	 */
	@Test
	public void test() throws IOException {
		// For test spec deserialization
		Gson gson = new Gson();

		try {
			// Read spec file into string
			String specSource = new String(Files.readAllBytes(this.specPath));

			// Parse it into an object
			TaintAnalysisSpec spec = gson.fromJson(specSource, TaintAnalysisSpec.class);

			// Actually perform the test according to spec
			this.performTest(spec);
		} catch (IOException e) {
			throw new RuntimeException("failed to read file: " + e);
		}
	}

	/**
	 * Generate, at run-time, the list of spec files to test.
	 */
	@Parameterized.Parameters
	public static Collection<Object> data() {
		try {
		    return Files.walk(Paths.get(basePath + suitePath), FileVisitOption.FOLLOW_LINKS) // Get all files in test suite directory
					.filter(Files::isRegularFile) // Filter to just files (no directories)
					.filter(p -> p.toString().endsWith(".json")) // Filter to just test specPath files
					.collect(Collectors.toList());
		} catch (IOException e) {
			throw new RuntimeException("Failed to open file while collecting test suite specs: " + e);
		}
	}

	@Override
	public AnalysisFilterSourceList getFilter() {
		return AnalysisFilterSourceList.makeSingleIncludeFilter("Unnamed");
	}
}
