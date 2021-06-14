const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./user1.json', {encoding:'utf8'}));

console.log(data[0]);