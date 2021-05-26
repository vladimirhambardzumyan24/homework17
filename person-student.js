class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }
  get firstName() {
    return this._firstName;
  }

  set firstName(firstName) {
    if (typeof name === "string") {
      this._firstName = firstName;
    }
    throw new Error("firstName note string");
  }
  get lastName() {
    return this._lastName;
  }

  set lastName(lastName) {
    if (typeof lastName === "string") {
      this._lastName = lastName;
    }
    throw new Error("lastName note string");
  }
  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === "number") {
      this._age = age;
    }
    throw new Error("age note number");
  }
  get gender() {
    return this._gender;
  }

  set gender(gender) {
    if (typeof gender === "string") {
      this._gender = gender;
    }
    throw new Error("gender note string");
  }
  toString() {
    return `${this.firstName} ${this.lastName} ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(fee, program, firstName, lastName, gender, age) {
    super(firstName, lastName, gender, age);
    this._fee = fee;
    this._program = program;
    this.year = 0;
  }
  get fee() {
    return this._fee;
  }

  set fee(fee) {
    if (typeof fee === "number") {
      this._fee = fee;
    }
    throw new Error("age note number");
  }
  get program() {
    return this._program;
  }

  set program(program) {
    if (typeof program === "object") {
      this._program = program;
    }
    throw new Error("Program note Array");
  }

  passExam() {
    for (let i = 0; i < this.program.length; i++) {
      if (this.program[i].grade < 50) {
        return false;
      } else {
        this.year++;
      }
    }
  }
  isAllPassed() {
    let bool = true;
    for (let i = 0; i < this.program.length; i++) {
      if (this.program[i].grade < 50) {
        return "cheq ancel";
      } else {
        bool = false;
      }
    }
    if (!bool) return "Ancel eq";
  }
  toString() {
    return `firstName:${this.firstName} lastName: ${this.lastName} age: ${this.age} year: ${this.year}`;
  }
}

let user1 = new Person("Name", "Surname", "female", 23);
console.log(user1.toString()); // Name Surname, 23 years old.

let student1 = new Student(
  1000,
  [
    { programName: "math", grade: 55 },
    { programName: "english", grade: 55 },
  ],
  "Name",
  "Surname",
  "female",
  23
);
console.log(student1);
student1.passExam();
console.log(student1.isAllPassed());
console.log(student1.toString());
