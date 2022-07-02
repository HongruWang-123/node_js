let os = require('os');

//current user info
const user = os.userInfo();
console.log(user);

//system uptime in seconds
console.log(`os uptime is ${os.uptime()} seconds`);

//system info
const currentOS = {
    name: os.type(),
    release: os.release(),
    memory: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOS);