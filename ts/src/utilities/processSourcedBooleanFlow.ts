
import { RunSpecification, StaticDescription } from '../types';
import { promises as fs } from 'fs';
import * as yargs from 'yargs';

const argv = yargs(process.argv.slice(2)).argv;

if (!argv.flows || !argv.spec) {
    console.error('Error! Usage: ts-node processSourcedBooleanFlow.ts --flows /path/to/flows --spec /path/to/spec');
    process.exit(1);
}

const pathToFlows = argv.flows;
const pathToSpec = argv.spec;

(async () => {
    const [flowsContent, specContent] = await Promise.all([pathToFlows, pathToSpec].map((f : string) => fs.readFile(f, 'utf-8')));
    const specJSON = JSON.parse(specContent);
    
    flowsContent.split('\n').forEach(l => {
        if (l === '')
            return;
            
        const flowJSON = JSON.parse(l);
        console.log('flowJSON', flowJSON);
    })

    // Debug
    console.log('specJSON', specJSON);
})();
