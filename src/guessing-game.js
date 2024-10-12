class GuessingGame {
    constructor() {
        this.arr = [];
    }

    setRange(min, max) {
        for (let i = 0; i <= max; i++) {
            this.arr[i] = i;
        }
    }

    guess() {
        let right = this.arr.length - 1;
        let middle = Math.ceil(right / 2);

        return this.arr[middle];
    }

    lower() {
        let guessNumber = this.guess();
        let indexOfGuessNum = this.arr.indexOf(guessNumber);

        this.arr = this.arr.slice(0, (indexOfGuessNum + 1));
    }

    greater() {
        let guessNumber = this.guess();
        let indexOfGuessNum = this.arr.indexOf(guessNumber);

        this.arr = this.arr.slice(indexOfGuessNum);
    }
}

module.exports = GuessingGame;
