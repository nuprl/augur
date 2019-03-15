export CUR=$(pwd)
export SOURCES=$2
export SINKS=$3
cd $JALANGI_PATH
mx jalangi --analysis "$CUR/dist/index.js" "$CUR/$1"