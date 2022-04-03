// copyIdl.js
const fs = require('fs');
const idl = require('./target/idl/solana-counter.json');

fs.writeFileSync('./app/src/idl.json', JSON.stringify(idl));