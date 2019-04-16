export CUR=$(pwd)
cd $NODEPROF_PATH
mx jalangi --analysis "$CUR/dist/src/analysis/index.js" "$1"