import * as fs from 'fs';

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

export default class MyLogger {
  constructor(fileName){
    this.fileName = fileName;
    fs.openSync(fileName, "w"); // create empty file
  }

  log(s){
    fs.appendFileSync(this.fileName, s + "\n");
  }

}