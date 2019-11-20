#!/bin/bash

odasa runQuery --verbose --query ../../../AsyncAnalysis/refactoring.ql --snapshot ~/Documents/odasa/projects/Tests/rev* --select $1
