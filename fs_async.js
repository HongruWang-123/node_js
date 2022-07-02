const {readFile, writeFile} = require('fs');
console.log('start');
readFile('C:/udemy workspace/first.txt','utf-8',(err,result) => {
    if(err){
        console.log(`error:${err}`);
        return;
    }
    const first = result;
    writeFile('C:/udemy workspace/result.txt',`result from the async function: ${first}`,(err,result) => {
        if(err){
            console.log(`error:${err}`);
            return;
        }
        console.log('done with the task');
    });
})
console.log('finish');
