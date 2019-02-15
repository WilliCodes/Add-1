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
            number.innerHTML = '#';
        } else if (inputCounter < 4) {
            // check each input
            inputCounter++;
        } else {
            number.innerHTML = '-';
            // check if all correct
            var result = errorChecking(toGuess, input.value);
            result ? number.innerHTML = ':-)' : number.innerHTML = ':\\';
            inputCounter = 0;
            toGuess = [];
        }
    }, 1000);

    var errorChecking = function (rand, inp) {
        if (inp.length !== 4) {
            return false;
        }
        for (var i = 0; i < 4; i++) {
            if (((rand[i] + 1) % 10).toString() !== inp[i]) {
                return false;
            }
        }
        return true;
    };
};