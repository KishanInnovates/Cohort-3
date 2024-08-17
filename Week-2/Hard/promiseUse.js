const wait = require("./1-Promise");
const sleep = require("./1-Promise");

wait(3).then(() => {
    console.log('3 Seconds have passed');
})

sleep(3000).then(() => {
    console.log("3 Seconds have passed");
})