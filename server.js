const app = require('./lib/app');
const http = require('http');
const port = process.env.PORT || 3000;

const store = require('storage-scout');
const path = require('path');
// const storeDir = path.join(__dirname, 'players');
// store.config(storeDir);

const server = http.createServer(app);

server.listen(port, () => {
  console.log('app running on port', server.address().port);
});