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

        function setAge(newAge) {
            if (Number.isInteger(newAge) && newAge > 0) {
                this.age = newAge;
            } else {
                
            }

        }

        function setWeight(newWeight) {
            if (Number.isInteger(newWeight) && newWeight > 0) {
                this.weight = newWeight;
            } else {
                return 'Not a valid weight!'
            }
        }
    }
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