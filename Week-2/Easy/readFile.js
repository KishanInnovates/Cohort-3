const fs = require('fs');

fs.readFile('example.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File content :');
    console.log(data);
})

function expensiveOperation() {
    let sum = 0;
    for (let i = 0; i < 1e9; i++){
        sum += i;

    }
    console.log('Expensive Operation completec: ', sum);
}
expensiveOperation();