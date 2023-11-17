const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
  res.write(`${http.request}`);
  res.end();
})

server.listen(5000);