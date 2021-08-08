// This can be a typescript file as well

// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, txt, json, excel, zip, and image files
import { readJSON, writeJSON, removeFile } from 'https://deno.land/x/flat@0.0.11/mod.ts' 
// const fs = require('fs');
// Step 1: Read the downloaded_filename JSON
const filename = Deno.args[0] // Same name as downloaded_filename `const filename = 'btc-price.json';`
const json = await readJSON(filename)


// let rawdata = fs.readFileSync('ja3er.json');
// let student = JSON.parse(rawdata);
const json_obj = Object.values(json)
const filtered_array = json_obj.filter(d => d.Count > 10);
// console.log(arr1)
// // Step 2: Filter specific data we want to keep and write to a new JSON file
// const currencyRates = Object.values(json.bpi); // convert property values into an array
// const filteredCurrencyRates = currencyRates.map(rate => ({ 
//     currency: rate.description,
//     bitcoinRate: rate.rate
// }));

// Step 3. Write a new JSON file with our filtered data
const newFilename = `ja3er-price-postprocessed.json` // name of a new file to be saved
await writeJSON(newFilename, filtered_array) // create a new JSON file with just the Bitcoin price
console.log("Wrote a post process file")

// Optionally delete the original file
await removeFile('./ja3er.json') // equivalent to removeFile('btc-price.json')
