package ch.usi.inf.nodeprof.test.examples;

import java.util.HashMap;
import java.util.List;
import java.util.Map.Entry;
import java.util.Stack;
import java.util.Arrays;
import java.util.stream.Collectors;

import ch.usi.inf.nodeprof.utils.Logger;

public class StackMachine {

	// The actual taint stack
	private Stack<Boolean> stack;

	// Updated in tandem, to map variables ids to their names / taint status
	private HashMap<Integer, Boolean> taintStatus;
	private HashMap<Integer, String> variableNames;

	private List<String> sources;
	private List<String> sinks;

	public StackMachine(List<String> sources, List<String> sinks) {
		this.sources = sources;
		this.sinks = sinks;
		this.stack = new Stack<Boolean>();
		this.taintStatus = new HashMap<Integer, Boolean>();
		this.variableNames = new HashMap<Integer, String>();
	}

	public void readVar(int iid, String name) {
		ensureVariableInitialized(iid, name);
		stack.push(taintStatus.get(iid));

		Logger.debug("READ_VAR: " + iid + "; " + name);
	}

	public void writeVar(int iid, String name) {
		ensureVariableInitialized(iid, name);
		taintStatus.put(iid, stack.pop());
		Logger.debug("WRITE_VAR: " + iid + "; " + name);
	}

	public void push(boolean value) {
		stack.push(value);
		Logger.debug("PUSH: " + value + ";");
	}

	public String generateReport() {
		return getTaintedVariables().stream()
				.reduce("", ((prev, name) -> prev += "Variable \"" + name + "\" has been tainted!\n"));
	}

	public List<String> getTaintedVariables() {
		Logger.debug("taintstatus keyset " + taintStatus.keySet().toString());
		Logger.debug("variablenames map " + variableNames.toString());

		return taintStatus.keySet().stream()
				.filter(iid -> taintStatus.get(iid)) // filter to only tainted variables
				.filter(iid -> sinks.contains(variableNames.get(iid))) // filter to only sinks
				.map(iid -> variableNames.get(iid)) // convert id's to their variable names
				.distinct() // each use of a variable in JS has its own id, so only report distinct
				.collect(Collectors.toList());
	}

	private void ensureVariableInitialized(int iid, String name) {
		if (taintStatus.get(iid) == null) {
			Logger.debug("creating new variable mapping: " + name + " -> " + iid);
			variableNames.put(iid, name);

			// Initialize taint value as true if the name is present in the
			// sources list.
			taintStatus.put(iid, sources.contains(name));
		}
	}

}
