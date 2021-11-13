const {readContent} = require("../io/content");

function showCatalog() {
    let content = readContent();
    content.forEach((product) => console.log(product));
}

module.exports = showCatalog;