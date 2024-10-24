const http = require("http");
const express = require('express')
const app = express();
const host = 'localhost';
const port = 8000;
const cors = require('cors');
app.use(cors());


function genRandomNumbers(n, min, max) {
    let setOfNumbers = new Set();
    while (setOfNumbers.size < n) {
        let newNumber = Math.floor(Math.random() * (max - min + 1) + min);
        setOfNumbers.add(newNumber);
    }
    return [...setOfNumbers].sort((a, b) => a - b);
}

let numbers = genRandomNumbers(5, 10, 50);
let stars = genRandomNumbers(2, 1, 12);

app.get('/key', (req, res) => {
    numbers = genRandomNumbers(5, 13, 50);
    stars = genRandomNumbers(2, 1, 12);
    res.json({
        numbers: numbers ,
        stars : stars
    });
});


app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}/key`);
});
