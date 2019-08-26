const http = require('http');

const port = 3000;
const ip = '127.0.0.1';

const server = http.createServer()

console.log('listening 3000...')
server.listen(port, ip);