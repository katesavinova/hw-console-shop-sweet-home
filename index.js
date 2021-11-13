const showCatalog = require("./dataOperation/showCatalog");
const addData = require("./dataOperation/addData");
const changeData = require("./dataOperation/changeData");
const rl = require("./io/readLine");
const removeData = require("./dataOperation/removeData");
const startActive = require("./dataOperation/startWorking");


async function start() {
    let isActive = true;

    while (isActive) {
        let answer = await startActive();
        switch (+answer) {
            case 1:
                showCatalog();
                break;
            case 2:
                await addData();
                break;
            case 3:
                await changeData();
                break;
            case 4:
                await removeData();
                break;
            case 5:
                isActive = false;
                break;
            default:
                console.log("Попробуйте еще раз");
                break;
        }
    }
    rl.close();
}

start();