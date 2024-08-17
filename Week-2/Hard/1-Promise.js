const { resolve } = require("path");

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(resolve, n * 1000);
    })
}

function sleep(miliseconds) {
    return new Promise((resolve) => {
        const start = Date.now();
        while (Date.now() - start < miliseconds) {
            
        }
        resolve();
    })
}

module.exports = wait;
module.exports = sleep;