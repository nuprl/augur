export CUR=$(pwd)
export TEST_FILE="$(cd ..; pwd)/$1"
cd $JALANGI_PATH
mx jalangi --analysis "$CUR/dist/index.js" "$TEST_FILE"