const http = require('http');

const server = http.createServer((req,res)=>{
  res.write("My name is James Howlett");
  res.end()
})

server.listen(5000)