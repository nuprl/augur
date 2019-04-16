export CUR=$(pwd)
export SOURCES=$2
export SINKS=$3
cd $NODEPROF_PATH
mx jalangi --analysis "$CUR/dist/src/emptyAnalysis.js" "$CUR/$1"