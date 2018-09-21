class animal {

    constructor(weight, age, height) {
        if (weight === undefined) this.weight = 15; else this.weight = weight;
        if (age === undefined) this.age = 2; else this.age = age;
        if (height === undefined) this.height = 4; else this.height = height;
    }

    get weight() {
        return this._weight
    }

    get age() {
        return this._age
    }

    get height() {
        return this._height
    }

    set height(newHeight) {
        this._height = newHeight
    }

    // Sets the age of the animal, if it has a valid age input
    set age(newAge) {
        this._age = newAge
    }

    // Sets the weight of the animal, if it has a valid weight input
    set weight(newWeight) {
        this._weight = newWeight
    }


}

function isValidInt(input) {
    return Number.isInteger(input) && input > 0;
}

function randomNumber(number) {
    return Math.floor(Math.random() * number + 1)
}

// Helper Functions

// Validates a input to make sure that it's an integer, and above zero


class dog extends animal {
    constructor(weight, age, height, breed, color) {
        super(weight, age, height);
        this.breed = breed;
        this.color = color;
    }

    get breed() {
        return this._breed;
    }


    get color() {
        return this._color;
    }

    set breed(newBreed) {
        this._breed = newBreed;
    }


    set color(newColor) {
        this._color = newColor;
    }

    // Function that compares two dogs and returns which one is heavier
    function isLarger (dogOne, dogTwo){}

    // Function that compares two dogs and returns which one is older

    function isOlder (dogOne, dogTwo){}

    // Function that compares two dogs and returns which one is shorter

    function isShorter (dogOne, dogTwo){}

}


const breeds = ['Pitbull', 'Terrier', 'Pitbull-Better', 'Great Dane', 'Weiner', 'Pointer'];
const color = ['Red', 'Red-better', 'Grey', 'Gold', 'Gold, but dirty', 'White'];


let dogs = [5];

for (let i = 0; i < 6; i++) {
    dogs.push(new dog(randomNumber(100), randomNumber(12), randomNumber(4), breeds[randomNumber(5)], color[randomNumber(5)]));
    console.log(dogs[i])
}
