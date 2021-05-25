class Account {
  constructor(name, balance) {
    this.id = Account.id;
    this._name = name;
    this._balance = balance;
    Account.id++;
  }
  static id = 0;
  get name() {
    return this._name;
  }

  get balance() {
    return this._balance;
  }

  set name(name) {
    if (typeof name === "string") {
      this._name = name;
    }
    throw new Error("Name note string");
  }

  set balance(balance) {
    if (typeof balance === "string") {
      this._balance = balance;
    }
    throw new Error("Balance note string");
  }

  credit(amount) {
    this._balance = this._balance + amount;
    return this._balance;
  }
  debit(amount) {
    if (this._balance < amount) {
      return amount - this._balance;
    } else {
      return "Amount exceeded balance.";
    }
  }
  transferTo(anotherAccount, amount) {
    if (amount < this._balance) {
      this._balance = this._balance - amount;
      anotherAccount = this._balance;
      return this._balance;
    } else {
      return "Amount exceeded balance.";
    }
  }

  toString() {
    return `${this._name}'s account balance is $${this._balance}`;
  }

  static identifyAccounts(accountFirst, accountSecond) {
    if (accountFirst === accountSecond) {
      return true;
    }
    return false;
  }
}

let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account', _balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance: 1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); //6600
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString()); // Saving account's account balance is $1400.
