class animal {
    constructor(weight, age, height) {
        this._weight = weight;
        this._age = age;
        this._height = height;
    }

    get weight() {
        return this._weight;
    }

    get age() {
        return this._age;
    }

    get height() {
        return this._height;
    }

    set height(newHeight) {
        this._height = newHeight;
    }

    // Sets the age of the animal, if it has a valid age input
    set age(newAge) {
        if (isValidInt(newAge)) {
            this._age = newAge
        } else console.log('Not a valid age!')
    }

    // Sets the weight of the animal, if it has a valid weight input
    set weight(newWeight) {
        if (isValidInt(newWeight)) {
            this.weight = newWeight
        } else console.log('Not a valid weight!')
    }


}

function isValidInt(input) {
    return Number.isInteger(input) && input > 0;
}

function randomNumber(number) {
    Math.floor(Math.random(), number)
}

// Helper Functions

// Validates a input to make sure that it's an integer, and above zero



class dog extends animal {
    constructor(weight, age, height, breed, color) {
        super(weight, age, height);
        this.breed = breed;
        this.color = color;

        function getBreed() {
            return this.breed;
        }

        function getColor() {
            return this.color;
        }

        function setBreed(newBreed) {
            this.breed = newBreed;
        }

        function setColor(newColor) {
            this.color = newColor;
        }
    }
}


const breeds = ['Pitbull', 'Terrier', 'Pitbull-Better', 'Great Dane', 'Weiner', 'Pointer'];
const color = ['Red', 'Red-better', 'Grey', 'Gold', 'Gold, but dirty', 'White'];
let dogs = [5];

for (let i = 0; i < 6; i++) {
    dogs.push(new dog((randomNumber(100),
        (randomNumber(15)),
        breeds[randomNumber(5),
            color[randomNumber((5))]])));

    console.log(dogs[i])
}
