import data from '../data.js';
import count from './functions/count.js';
import parseInput from './functions/parseInput.js';
import filter from './functions/filter.js';
import convertData from './functions/convert.js';

let convertedData = convertData(data);
const args = process.argv.slice(2)[0];
if (args.includes("--filter")) {
    let input = parseInput(args);
    console.log(JSON.stringify(filter(input, convertedData), null, 2));
} else if (args === "--count") {
    console.log(JSON.stringify(count(convertedData), null, 2));
}