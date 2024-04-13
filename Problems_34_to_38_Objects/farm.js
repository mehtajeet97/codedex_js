// Problem 37 : Animal Farm

const dog = {
  name: "Tommy",
  type: "dog",
  age: 10,
  makeSound() {
    console.log(
      `${this.name} is a ${this.age} year old ${this.type} that goes woof!`
    );
  },
};

dog.makeSound();

const sheep = {
  name: "Ma-Dam",
  type: "sheep",
  age: 12,
  makeSound() {
    console.log(
      `${this.name} is a ${this.age} year old ${this.type} that goes bleet!`
    );
  },
};

sheep.makeSound();

const pig = {
  name: "Dukar",
  type: "pig",
  age: 1,
  makeSound() {
    console.log(
      `${this.name} is a ${this.age} year old ${this.type} that goes oink!`
    );
  },
};

pig.makeSound();
