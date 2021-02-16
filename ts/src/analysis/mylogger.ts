import * as fs from 'fs';

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

export default class MyLogger {

  private readonly fileName: fs.PathLike;

  constructor(fileName: fs.PathLike){
    this.fileName = fileName;
    fs.openSync(this.fileName, "w"); // create empty file
  }

  log(s: string){
    fs.appendFileSync(this.fileName, s + "\n");
  }

}