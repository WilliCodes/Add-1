var incr = 0;

window.onload = function () {
    var toGuess = [];

    var number = document.getElementById('number');

    var inputCounter = 0;


    setInterval(function() {
        if (toGuess.length < 4) {
            let newNum = Math.floor(Math.random() * 10);
            number.innerHTML = newNum.toString();
            toGuess.push(newNum);
        } else if (inputCounter === 0){
            inputCounter++;
            number.innerHTML = '#';
        } else if (inputCounter < 4) {
            // check each input
            inputCounter++;
            number.innerHTML = '-'.repeat(inputCounter-1);
        } else if (inputCounter === 4) {
            inputCounter++;
            number.innerHTML = '----';
        } else if (inputCounter < 7) {
            inputCounter++;
            var correct = '';
            for (var i = 0; i < toGuess.length; i++)
                correct += ((toGuess[i] + incr) % 10).toString();
            number.innerHTML = correct;
        } else {
        inputCounter = 0;
        toGuess = [];
        number.innerHTML = '!';
    }
    }, 1000);

};

var changeIncr = function (newIncr) {
    incr = newIncr;
};