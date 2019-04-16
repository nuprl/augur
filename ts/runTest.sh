export CUR=$(pwd)
export SOURCES=$2
export SINKS=$3

./generate-instrs-test.sh $1 | npm run run:instrs