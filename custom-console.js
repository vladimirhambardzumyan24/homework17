function Console(name) {
  this.name = name;
  this.historyArr = [];
}

Console.prototype.log = function (...object) {
  let obj = JSON.stringify(object);
  let item = `${this.name}: ${obj}`;
  this.historyArr.push(item);
  return item;
};

Console.prototype.history = function (number) {
  return this.historyArr.slice(0, number);
};

Console.prototype.clearHistory = function () {
  this.historyArr = [];
};

const myConsole = new Console("Regular");
const fancyConsole = new Console("Fancy");
console.log(myConsole.log([0, 1, 2, 3]));
console.log(myConsole.log({ a: 1, b: 2 }));
console.log(myConsole.log({ a: 1, b: 2 }));
console.log(myConsole.log({ a: 1, b: 2 }));
console.log(myConsole.log({ a: 1, b: 2 }));
console.log(fancyConsole.log("ok : ", 1, 2, 3));
console.log(myConsole.history(3));
myConsole.clearHistory();
console.log(myConsole.history());
console.log(myConsole.log({ a: 1, b: 2 }));
console.log(myConsole.log({ a: 1, b: 2 }));
console.log(myConsole.log({ a: 1, b: 2 }));
console.log(myConsole.log({ a: 1, b: 2 }));
console.log(fancyConsole.log("ok : ", 1, 2, 3));
console.log(myConsole.history(3));
myConsole.clearHistory();
console.log(myConsole.history(3));
