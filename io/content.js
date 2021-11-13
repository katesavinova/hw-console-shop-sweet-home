const path = require('path');
const {readFile} = require("./readFile");

const dirPath = path.resolve(__dirname, '../for_data');
const filePath = path.resolve(dirPath, 'data.json');

function readContent() {
    let files = readFile(filePath);
    return files && JSON.parse(files) || [];
}

module.exports = {dirPath, filePath, readContent};