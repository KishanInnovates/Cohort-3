const wait = require("./1-Promise");

wait(3).then(() => {
    console.log('3 Seconds have passed');
})