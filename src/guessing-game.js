class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.number = Math.ceil((this.min + this.max) / 2)
    }

    lower() {
        this.max = this.number;

    }

    greater() {
        this.min = this.number;
    }
}

module.exports = GuessingGame;