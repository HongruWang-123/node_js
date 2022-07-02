const {readFileSync,writeFileSync} = require('fs');

const fs = require('fs');

//fs.readFileSync = readFileSync from the first line
console.log('start');
const read = fs.readFileSync('C:/udemy workspace/first.txt','utf-8');
const read2 = fs.readFileSync('C:/udemy workspace/result.txt','utf-8');

// console.log(read);
// console.log(read2);

fs.writeFileSync('C:/udemy workspace/result.txt',`here is the result: ${read}`,{flag:'a'});
console.log('done with the task');
console.log('finish');