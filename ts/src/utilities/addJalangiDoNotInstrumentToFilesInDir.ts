// JALANGI DO NOT INSTRUMENT

import { stat, readdir } from "fs/promises";
import { join } from 'path';
import * as prependFile from 'prepend-file';

const cmdArgs = process.argv;
const pathToTransform = cmdArgs[2];

if (!pathToTransform) {
    console.error('Usage: ts-node addJalangiDoNotInstrumentToFilesInDir.ts <pathToDir>');
    process.exit(0);
}

async function fromDir(startPath : string, filter : RegExp) {
    if (! await stat(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    var files = await readdir(startPath);
    for(var i = 0; i < files.length; i++) {
        var filename = join(startPath,files[i]);
        var stats = await stat(filename);
        if (stats.isDirectory()) {
            fromDir(filename, filter);
        }
        else if (filter.test(filename)) {
            // Transform file.
            prependFile(filename, '\n// JALANGI DO NOT INSTRUMENT\n\n');
        };
    };
};

fromDir(pathToTransform, /\.js$/);