// utils.js
const fs = require('fs');

module.exports = {
  loadSampleData(filename) {
    const rawData = fs.readFileSync(filename);
    return JSON.parse(rawData);
  },
};
