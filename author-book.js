class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === "string") {
      this._name = name;
    }
    throw new Error("Name note string");
  }
  get email() {
    return this._email;
  }

  set email(email) {
    if (typeof email === "string") {
      this._email = email;
    }
    throw new Error("Email note string");
  }
  get gender() {
    return this._gender;
  }

  set gender(gender) {
    if (typeof gender === "string") {
      this._gender = this.gender;
    }
    throw new Error("Gender note string");
  }
  toString() {
    if (this._gender === "fEmaLe") {
      return `Ms: ${this._name} ${this._email}`;
    } else if (this._gender === "maLe") {
      return `Mrs ${this._name} ${this._email}`;
    }
  }
}

let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
console.log(author1.toString());

class Book {
  constructor(title, price, quantity, ...author) {
    this._title = title;
    this._price = price;
    this._puantity = quantity;
    this._author = author;
  }
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === "string") {
      Author._name = name;
    }
    throw new Error("Name note string");
  }
  get title() {
    return this._title;
  }

  set title(title) {
    if (typeof title === "string") {
      this._title = title;
    }
    throw new Error("Name note string");
  }
  get price() {
    return this._price;
  }

  set price(price) {
    if (typeof price === "number") {
      this._price = price;
    }
    throw new Error("Price note number");
  }
  get puantity() {
    return this._puantity;
  }

  set puantity(puantity) {
    if (typeof puantity === "number") {
      this._puantity = this.puantity;
    }
    throw new Error("Quantity note number");
  }

  getProfit() {
    return this._puantity * this._price;
  }
  toString() {
    if (author1._gender === "fEmaLe") {
      return `Ms: ${author1._name} ${author1._email}`;
    } else if (author1._gender === "maLe") {
      return `Mrs ${author1._name} ${author1._email}`;
    }
  }
}

const b1 = new Book("Gitak", 2000, 30, author1);

console.log(b1);
console.log(b1.getProfit());
console.log(b1.toString());
