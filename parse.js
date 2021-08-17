// This can be a typescript file as well

// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, txt, json, excel, zip, and image files
// import { readJSON, writeJSON, removeFile } from 'https://deno.land/x/flat@0.0.11/mod.ts' 
const fs = require('fs');
// Step 1: Read the downloaded_filename JSON
// const filename = Deno.args[0] // Same name as downloaded_filename `const filename = 'btc-price.json';`
const filename = 'ja3er.json';
// const json = await readJSON(filename)


let token_data = fs.readFileSync('ja3tokens.json');
let filtered_token = JSON.parse(token_data);


let user_agent = fs.readFileSync('ja3er-price-postprocessed.json');

let filtered_user_agent = JSON.parse(user_agent);
// const json_obj = Object.values(json)

filtered_user_agent = filtered_user_agent.filter(d => d.Count > 10);
filtered_user_agent = filtered_user_agent.filter(d => d["User-Agent"] !== '');

// let combino = []
// for (let a of filtered_token) {
//     const md5 = a.md5
//     for (let b of filtered_user_agent) {
//         const md52 = b.md5
//         if (md5 === md52) {
//             combino.push({md5: md5, ja3: a.ja3, "User-Agent": b["User-Agent"]})
//             break;
//         }
        
//     }
// }


console.log(addedMessageGroupIds)
// // Step 2: Filter specific data we want to keep and write to a new JSON file
// const currencyRates = Object.values(json.bpi); // convert property values into an array
// const filteredCurrencyRates = currencyRates.map(rate => ({ 
//     currency: rate.description,
//     bitcoinRate: rate.rate
// }));

// Step 3. Write a new JSON file with our filtered data
// const newFilename = `ja3er-price-postprocessed.json` // name of a new file to be saved
// await writeJSON(newFilename, filtered_array) // create a new JSON file with just the Bitcoin price
// console.log("Wrote a post process file")

// // Optionally delete the original file
// await removeFile('./ja3er.json') // equivalent to removeFile('btc-price.json')
