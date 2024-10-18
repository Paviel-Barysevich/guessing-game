class GuessingGame {
    constructor() {
        this.arr = [];
        this.left = 0;
        this.right;
        this.middle;
    }

    setRange(min, max) {
        for (let i = min; i <= max; i++) {
            this.arr[i] = i;
        }

        this.right = this.arr.length - 1;
    }

    guess() {
        this.countMiddle();
        return this.arr[this.middle];
    }

    lower() {
        this.right = this.middle;
        this.countMiddle();
    }

    greater() {
        this.left = this.middle;
        this.countMiddle();
    }

    countMiddle() {
        this.middle = this.left + Math.ceil((this.right - this.left)/ 2);
    }
}

module.exports = GuessingGame;
