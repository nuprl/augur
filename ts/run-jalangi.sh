export CUR=$(pwd)
export SOURCES=$2
export SINKS=$3
cd $JALANGI_PATH
node src/js/commands/jalangi.js --inlineIID --inlineSource --analysis  "$CUR/dist/emptyAnalysis.js" "$CUR/$1"