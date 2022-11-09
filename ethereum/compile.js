const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');
//fs-extra is very similar to fs module but has couple of extra functions 

const buildPath = path.resolve(__dirname, 'build');

fs.removeSync(buildPath);
//removeSync is extra function inm fs-extra module

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');

const source = fs.readFileSync(campaignPath, 'utf8');

const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output) {
    fs.outputJsonSync(
        //outputJson writes out a specific Json file in the path given 
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}  
