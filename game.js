window.onload = function () {
    var toGuess = [];

    var number = document.getElementById('number');
    var input = document.getElementById('input');

    var inputCounter = 0;


    setInterval(function() {
        if (toGuess.length < 4) {
            let newNum = Math.floor(Math.random() * 10);
            number.innerHTML = newNum.toString();
            toGuess.push(newNum);
        } else if (inputCounter === 0){
            inputCounter++;
        } else if (inputCounter < 4) {
            // check each input
            inputCounter++;
        } else {
            console.log(toGuess.toString());
            console.log(input.value);
            // check if all correct
            inputCounter = 0;
            toGuess = [];
        }
    }, 1000);

    var errorChecking = function (rand, inp) {

    };
};