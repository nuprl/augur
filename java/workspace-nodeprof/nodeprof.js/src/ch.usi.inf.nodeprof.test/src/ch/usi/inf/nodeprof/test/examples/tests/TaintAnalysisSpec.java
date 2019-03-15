package ch.usi.inf.nodeprof.test.examples.tests;

import java.nio.file.Path;

public class TaintAnalysisSpec {
    // The path to the JS file to analyze
    public String main;

    // The path to the spec file itself
    public Path specPath;

    // A list of variable names that should be consisdered tainted.
    public String[] sources;

    // A list of variable names that should be sinks for taints.
    public String[] sinks;

    // A list of variable names that are expected to be tainted after execution.
    public String[] expectedTaints;
}
