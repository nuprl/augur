import * as fs from 'fs';

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

export default class MyLogger {

  private fileName: fs.PathLike;

  constructor(fileName: fs.PathLike){
    this.fileName = fileName;
    fs.openSync(fileName, "w"); // create empty file
  }

  log(s){
    fs.appendFileSync(this.fileName, s + "\n");
  }

}