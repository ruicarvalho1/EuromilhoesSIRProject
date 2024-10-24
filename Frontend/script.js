document.addEventListener('DOMContentLoaded', (e) => {
    button = document.getElementById("genBtn");

    button.addEventListener('click', (e) => {
        genNewBet();
        // genJSONBet();
    });



    /*
    button.addEventListener('click', function (e) {
        console.log("same event, another handle");
    });
     button.addEventListener('click', addtext);
    */
});



function genRandomNumbers(n, min, max) {
    // return an array with n unique integers between min and max
    let setOfNumbers = new Set();
    while (setOfNumbers.size < n) {
        newNumber = Math.floor(Math.random() * (max - min + 1) + min);
        setOfNumbers.add(newNumber);
    }
    return [...setOfNumbers].sort((a,b) => a-b);
}



function genJSONBet() {

    let numbers = genRandomNumbers(5, 1, 50);
    let stars = genRandomNumbers(2, 1, 12);

    let newBet = {
        timeStamp: new Date(),
        numbers: numbers,
        stars: stars,
    }

    console.log(newBet);

    JSONBet = JSON.stringify(newBet);

    console.log(JSONBet);

    return JSONBet;

}

function genNewBet() {

    //numbers = genRandomNumbers(5, 1, 50);
    //stars = genRandomNumbers(2, 1, 12);

    //console.log(numbers, stars);

    let JSONbet = genJSONBet();
    let bet = JSON.parse(JSONbet);

    console.log(bet);

    theOLNumbers = document.getElementById('olMain');
    theOLNumbers.innerHTML = "";

    bet.numbers.forEach(number => {
        newLi = document.createElement("li");
        newLi.innerHTML = number;
        theOLNumbers.appendChild(newLi);
    });



    theOLStars = document.getElementById('olStars');
    theOLStars.innerHTML = "";

    bet.stars.forEach(star => {
        newLi = document.createElement("li");
        newLi.innerHTML = star;
        theOLStars.appendChild(newLi);
    });

    // for each number
    // create a new li with the number
    // add it to the list of numbers

    // do the same for the stars


}


const url = 'http://localhost:8000/key';


async function fetchData() {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`${response.status}`);
        }


        const data = await response.json();



        const arrayNumbers = data.numbers || [];
        const arrayStars = data.stars || [];


        const mainList = document.getElementById('olMain');
        const starsList = document.getElementById('olStars');


        mainList.innerHTML = '';
        starsList.innerHTML = '';


        if (arrayNumbers.length > 0) {
            arrayNumbers.forEach((number) => {
                const listItem = document.createElement('li');
                listItem.textContent = number;
                mainList.appendChild(listItem);
            });
        } else {
            console.error('Erro');
        }


        if (arrayStars.length > 0) {
            arrayStars.forEach((star) => {
                const listItem = document.createElement('li');
                listItem.textContent = star;
                starsList.appendChild(listItem);
            });
        } else {
            console.error('Erro');
        }

    } catch (error) {
        console.error(error);
    }
}


document.getElementById('genBtn').addEventListener('click', fetchData);


fetchData();



function gerachaveJSON(){
    chaveJS = {
        numeros: an,
        estrelas: ae ,
        geradapor: 'ruicarvalho'

    }
    return JSON.stringify(chaveJS);
}

function consomeChaveJSON(chavejson){

    let chaveJS = JSON.parse(chavejson);
    return chaveJS;
}







/*
function addtext() {
    listofnumbers = document.getElementById("olMain");
    listofnumbers.innerHTML = "";

    newli = document.createElement("li");
    newli.innerText= "99";

    listofnumbers.appendChild(newli);
}
*/

// Math.random() 0..1;
// Math.floor() turn a real into an integer

// Arrays
// indexOf() to check if an object exists in the array