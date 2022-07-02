const http = require('http');
const server = http.createServer((req,res)=>{
  console.log(req.url)
  if(req.url === '/'){
     res.write('welcome to our home page');
  }

  if(req.url === '/about'){
    res.write('short history here')
  }

  res.write('<h1>Oops!</h1> <p>cant seem to find the page you are looking for</p>');

})

server.listen(5000);