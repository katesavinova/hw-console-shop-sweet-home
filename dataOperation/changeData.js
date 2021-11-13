const rl = require("../io/readLine");
const fs = require("fs");
const searchProduct = require("./searchData");
const {readContent} = require("../io/content");
const {filePath} = require("../io/content");
const {dirPath} = require("../io/content");
const {getREsultSelect} = require("../io/getREsultSelect");

async function changeData() {
    let content = readContent();
    let findIndex = await searchProduct();
    if (findIndex === false) {
        return;
    }
    console.log("Введите следующие данные о товаре: ");
    let answer = await getREsultSelect(rl, "Введите наименование: ");
    content[findIndex].name = answer;
    answer = await getREsultSelect(rl, "Введите цену: ");
    content[findIndex].price = answer;
    answer = await getREsultSelect(rl, "Введите путь до изображения: ");
    content[findIndex].img = answer;
    console.log("Измененный товар: ", content[findIndex], "\n");
    let jsonContent = JSON.stringify(content, null, 2);

    fs.mkdirSync(dirPath, {recursive: true});
    fs.writeFileSync(filePath, jsonContent);
}

module.exports = changeData;