export CUR=$(pwd)
export CUR_SPEC_FOLDER=$1
export CUR_TEST=$2
cd $JALANGI_PATH
mx jalangi --analysis "$CUR/dist/index.js" "$2"