const { readFileSync } = require('fs');

const { dataFilePath } = require('../config');


async function returnAllUsers() {
    const data = readFileSync(dataFilePath).toString();

    return JSON.parse(data)
};


module.exports = returnAllUsers