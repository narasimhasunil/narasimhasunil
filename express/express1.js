const http = require('http');

const hostname = '127.0.0.1';
const port = 3007;

const server = http.createServer((req, res) => {
  console.log(req);
  res.statusCode = 300;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World nodjs!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
