class animal {
    constructor(weight, age, height) {
        this.weight = weight;
        this.age = age;
        this.height = height;

        function getWeight() {
            return this.weight;
        }

        function getAge() {
            return this.age;
        }

        function getHeight() {
            return this.height;
        }

        function setHeight(newHeight) {
            this.height = newHeight;
        }

        // Sets the age of the animal, if it has a valid age input
        function setAge(newAge) {
            if (isValidInt(newAge)) {
                this.age = newAge
            } else alert('Not a valid age!')
        }

        // Sets the weight of the animal, if it has a valid weight input
        function setWeight(newWeight) {
            if (isValidInt(newWeight)) {
                this.weight = newWeight
            } else alert('Not a valid weight!')
        }
    }
}

// Validates a input to make sure that it's an integer, and above zero
function isValidInt(input) {
    return Number.isInteger(input) && input > 0;
}

class dog extends animal {
    constructor(weight, age, height, breed, color) {
        super(weight, age, height)
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

console.log(bear.weight(90))