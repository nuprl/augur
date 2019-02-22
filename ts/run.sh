export CUR=$(pwd)
cd $JALANGI_PATH
mx jalangi --analysis "$CUR/dist/index.js" "$CUR/$1"