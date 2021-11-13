const fs = require("fs");
const rl = require("../io/readLine");
const {readContent} = require("../io/content");
const {filePath} = require("../io/content");
const {dirPath} = require("../io/content");
const {getREsultSelect} = require("../io/getREsultSelect");

async function addData() {
    let content = readContent();
    let newProduct = {};
    console.log("Введите следующие данные о товаре:");
    let answer = await getREsultSelect(rl, "Введите наименование: ");
    newProduct.name = answer;
    answer = await getREsultSelect(rl, "Введите цену: ");
    newProduct.price = answer;
    answer = await getREsultSelect(rl, "Введите путь до изображения: ");
    newProduct.image = answer;
    if (newProduct.name.trim() && newProduct.price.trim() && newProduct.image.trim()) {
        console.log("Будет добавлен следующий товар: ", newProduct, "\n");
        content.push(newProduct);
    } else {
        console.log("Товар не может иметь пустых полей. Попробуйте еще раз", "\n");
        return;
    }
    let jsonContent = JSON.stringify(content, null, 2);

    fs.mkdirSync(dirPath, {recursive: true});
    fs.writeFileSync(filePath, jsonContent);
}

module.exports = addData;