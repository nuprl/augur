export CUR=$(pwd)
export SOURCES=$2
export SINKS=$3
cd $NODEPROF_PATH
mx jalangi --analysis "$CUR/dist/analysis/index.js" "$1"