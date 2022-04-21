// Usage: node benchmarkProject.js 
//             </path/to/program.js>
//             <project name>
//             <--control/--experiment>
// 
// Benchmarks the given program using `perf_hooks`.

console.error(`benchmarkProject.js ${process.argv[2]} ${process.argv[3]} ${process.argv[4]}`)

// `rewire` is a drop-in replacement for `require` that forces a fresh reload every time.
var rewire = require("rewire");

const fs = require('fs')
const { performance, PerformanceObserver } =  require('perf_hooks');


const testFile = fs.realpathSync(`./${process.argv[2]}`)
console.error(`Benchmarking: ${fs.realpathSync(testFile)}`)
const testName = process.argv[3]
const experiment = process.argv[4] === "--experiment"

const experimentName = `benchmark-${testName}-${experiment? "experiment" : "control"}`
const warmRuns = 1000
const testRuns = 1000

// Step 0: Set up Performance Observer
const experimentResults = [] // Array<PerformanceEntry>
const performanceObserver = new PerformanceObserver((items, observer) => {
  const entry = items.getEntries().pop();
  //console.log(`${entry.name}: ${entry.duration}`);
  // console.log(JSON.stringify(entry));
  experimentResults.push(entry)
  // observer.disconnect();
});
performanceObserver.observe({ entryTypes: ['measure'] });

// Step 1: Warm the VM.
for (let i = 0; i < warmRuns; i++) {
    benchmark(testFile, experiment, false, i)
}

// Step 2: Conduct the experiment.
for (let i = 0; i < testRuns; i++) {
    benchmark(testFile, experiment, true, i)
}

// Step 3: Write output to file.
fs.writeFile(`${experimentName}.csv`, processOutput(experimentResults), err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })

// Performs a single benchmark run. Log the results using `perf_hooks`.
function benchmark(testFile, experiment, isWarmed, runNum) {
    performance.mark('start')
    rewire(testFile)
    performance.mark('stop')
    performance.measure(`${experimentName}, ${isWarmed? "warm" : "cold"}, ${runNum}`, 'start', 'stop')
}

// Process the `Array<PerformanceEntry>` into CSV format for output.
function processOutput(experimentResults) {
    console.log("Processing output...")
    console.log(`experimentResults: ${JSON.stringify(experimentResults)}`)
    let csv = 'Benchmark Name, Warm/Cold, Run #, Start Time, Duration\n'

    for (let perfEntry of experimentResults) {
        csv += perfEntry.name
             + `, ${perfEntry.startTime}, ${perfEntry.duration}\n`
    }

    return csv
}
