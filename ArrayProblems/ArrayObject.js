class CustomArray {
    constructor () {
        if (arguments.length == 1) {
            this.length = arguments[0];
        } else {
            for (const index in arguments) {
                this[index] = arguments[index];
            }
            this.length = arguments.length;
        }
    }

    getLength () {
        return this.length;
    }

    push (value) {
        let currentLength = this.getLength();
        this[currentLength] = value;
        this.length ++;
    }

    indexOf (value) {
        let valueFound = -1;
        for (let index = 0; index < this.getLength(); index++) {
            if (this[index] === value) {
                return valueFound = index;
            }
        }
        return valueFound;
    }
}
let arr = new CustomArray(1,2,3,4,5,6,7);
console.log(arr.indexOf(2));