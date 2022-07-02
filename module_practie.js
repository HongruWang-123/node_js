//every file in node is module(by default)
// const john = 'john';
// const peter = 'peter';


// const sayHi = name => {
//    console.log(`hello, ${name}`);
// }

// sayHi("susan");
// sayHi(peter);
const name = require('./name_module');
const sayHi = require('./function_module');
const item = require('./alter-export');
require('./mind')
sayHi.sayHi(name.peter);

console.log(item);

console.log(`hello,test`);

// console.log(name);
