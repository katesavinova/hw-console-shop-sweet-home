function getREsultSelect(rl, text = "№ ") {
    return new Promise(resolve => {
        rl.question(text, answer => resolve(answer));
    })
}

module.exports = {getREsultSelect};