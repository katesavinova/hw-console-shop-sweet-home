const rl = require("../io/readLine");
const fs = require("fs");
const searchProduct = require("./searchData");
const {readContent} = require("../io/content");
const {filePath} = require("../io/content");
const {dirPath} = require("../io/content");
const {getREsultSelect} = require("../io/getREsultSelect");

async function removeData() {
    let content = readContent();
    let findIndex = await searchProduct();
    if (findIndex === false) {
        return;
    }
    let answer = await getREsultSelect(rl, "Вы действительно хотите удалить данный товар? (1 - да, 0 - нет): ");
    if (+answer === 1) {
        content.splice(findIndex, 1);

        let jsonContent = JSON.stringify(content, null, 2);

        fs.mkdirSync(dirPath, {recursive: true});
        fs.writeFileSync(filePath, jsonContent);

        console.log("Данные о товаре удалены", "\n");
    } else {
        console.log("Данные о товаре не были удалены","\n");
        return;
    }
}

module.exports = removeData;