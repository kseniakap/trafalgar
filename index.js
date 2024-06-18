/* eslint-disable @typescript-eslint/no-var-requires */
const serveHandler = require('serve-handler');
const http = require('http'); // comes pre-installed with Node.js

const HOST = process.env.HOST || 'localhost';
const PORT = Number(process.env.PORT || 9000);

http
  .createServer((req, res) => {
    return serveHandler(req, res, {
      public: './dist',
      rewrites: [{ source: '/**', destination: '/index.html' }],
    });
  })
  .listen(PORT, HOST);

console.info(`Listening on http://${HOST}:${PORT}/`);
