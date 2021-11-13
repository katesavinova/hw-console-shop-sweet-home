const rl = require("../io/readLine");
const {getREsultSelect} = require("../io/getREsultSelect");

async function startActive() {
    const menu =
        "1. Вывод списка товаров" + '\n' +
        "2. Добавление нового товара" + '\n' +
        "3. Изменение существующего" + '\n' +
        "4. Удаление товара" + '\n' +
        "5. Выход" + '\n';

    console.log(menu);
    let answer = await getREsultSelect(rl, "Выберите действие из приведенного ниже списка: ");
    console.log('\n');

    return answer;
}

module.exports = startActive;