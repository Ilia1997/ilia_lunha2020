// task 1

function propsCount(currentObject) {
  let count = 0;
  for (let h in currentObject) {
    count++;
  }
  console.log(count);
}

let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};
propsCount(mentor);

// task 2

let dog = {
  name: "Pit",
  age: 3,
  weight: 8,
  ownName: "Jhon",
  color: "white",
};

function showProps(obj) {
  let j = [];
  let coutn = 0;
  for (let f in obj) {
    j[coutn] = f;
    coutn++;
  }
  console.log(j);
}
showProps(dog);

function showPropsMeaning(obj) {
  let j = [];
  let coutn = 0;
  for (let f in obj) {
    j[coutn] = obj[f];
    coutn++;
  }
  console.log(j);
}
showPropsMeaning(dog);

// task 3

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    return this.name + " " + this.surname;
  }
}
class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(midleName) {
    return this.surname + " " + this.name + " " + midleName;
  }
  showCourse() {
    let date = new Date();
    let currentYear = date.getFullYear();
    if (this.year == currentYear) {
      return 1;
    } else if (this.year >= 2014) {
      let course = currentYear - this.year;
      if (course < 1) {
        return "You enter wrong year";
      } else {
        return course;
      }
    } else {
      return "You enter wrong year";
    }
  }
}
let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 5

// task 4

class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }
  showSalary() {
    let salary = this.dayRate * this.workingDays;
    return console.log(salary);
  }
  #experience = 1.2;

  set setExp(value) {
    if (value < 0) {
      throw new Error("Negative experience");
    }
    this.#experience = value;
  }
  get showExp() {
    return this.#experience;
  }

  showSalaryWithExperience() {
    let salary = this.dayRate * this.workingDays;
    let salaryWithExperience = salary * this.showExp;
    console.log(salaryWithExperience);
    return salaryWithExperience;
  }
  showFullSalary() {
    let salary = this.dayRate * this.workingDays;
    let fullSalary = salary * this.showExp;
    return fullSalary;
  }
}

let worker1 = new Worker("John Johnson", 20, 23);

console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);

console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

var myarray = [worker1, worker2, worker3];

myarray.sort(function (a, b) {
  return a.showFullSalary() - b.showFullSalary();
});
console.log("Sorted salary:");
for (let i = 0; i < myarray.length; i++) {
  console.log(myarray[i].fullName + ": " + myarray[i].showFullSalary());
}

// task 5

class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}
class Triangle extends GeometricFigure {
  constructor(side_a, side_h) {
    super();
    this.side_a = side_a;
    this.side_h = side_h;
  }
  getArea() {
    return 0.5 * (this.side_a * this.side_h);
  }
}
class Square extends GeometricFigure {
  constructor(side_c) {
    super();
    this.side_c = side_c;
  }
  getArea() {
    return this.side_c * this.side_c;
  }
}
class Circle extends GeometricFigure {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * 2;
  }
}

function handleFigures(figures) {
  let arraysOfArg = [];
  arraysOfArg = arguments[0];
  let pipeline = [];
  for (let i = 0; i < arraysOfArg.length; i++) {
    if (arraysOfArg[i] instanceof GeometricFigure) {
      console.log(
        "Geometric Figure: " +
          arraysOfArg[i].toString() +
          " - area: " +
          arraysOfArg[i].getArea()
      );
      pipeline[i] = arraysOfArg[i].getArea();
    }
  }

  const result = pipeline.reduce(function (sum, current) {
    return sum + current;
  }, 0);

  return result;
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures) + " // total area");
