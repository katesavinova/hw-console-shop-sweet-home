const rl = require("../io/readLine");
const {readContent} = require("../io/content");
const {getREsultSelect} = require("../io/getREsultSelect");

async function searchProduct() {
    let content = readContent();
    let answer = await getREsultSelect(rl, "Введите наименование интересующего Вас товара: ");
    let findIndex = content.findIndex((product) => product.name.toLowerCase() === answer.toLowerCase());
    if (findIndex === -1) {
        console.log("Такой товар не найден, попробуйте снова", "\n");
        return false;
    } else {
        console.log('Найденный товар: ', content[findIndex]);
        return findIndex;
    }
}
module.exports = searchProduct;