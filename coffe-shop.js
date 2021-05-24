function CoffeeShop({ name, menu }) {
  this.name = name;
  this.menu = menu;
  this.orders = [];
  this.element;
}

CoffeeShop.prototype.addOrder = function (item) {
  let bool = true;
  this.menu.forEach((element) => {
    if (element.name === item) {
      this.orders.push(element);
      this.element = element;
      bool = false;
    }
  });
  if (bool) {
    return "This item is currently unavailable!";
  }
};
CoffeeShop.prototype.fulfillOrder = function () {
  if (this.orders.length > 0) {
    return `The ${this.element.name} is ready!`;
  } else {
    return "All orders have been fulfilled!";
  }
};
CoffeeShop.prototype.listOrders = function () {
  return this.orders;
};
CoffeeShop.prototype.dueAmount = function () {
  let sum = 0;
  this.orders.forEach((el) => {
    sum += el.price;
  });
  return sum;
};
CoffeeShop.prototype.cheapestItem = function () {
  let min = this.menu[0].price;
  let minName;
  this.menu.forEach((el) => {
    if (min > el.price) {
      min = el.price;
      minName = el.name;
    }
  });
  return minName;
};
CoffeeShop.prototype.drinksOnly = function () {
  let drinks = [];
  this.menu.forEach((el) => {
    if (el.type === "drink") {
      drinks.push(el.name);
    }
  });
  return drinks;
};
CoffeeShop.prototype.foodOnly = function () {
  let foodes = [];
  this.menu.forEach((el) => {
    if (el.type === "food") {
      foodes.push(el.name);
    }
  });
  return foodes;
};

const Shop = {
  name: "Chayxana",
  menu: [
    { name: "hot cocoa", type: "Drink", price: 5 },
    { name: "iced tea", type: "drink", price: 1.7 },
    { name: "iced coffee", type: "drink", price: 1.2 },
    { name: "kabab", type: "food", price: 3 },
    { name: "shaurma", type: "food", price: 1 },
  ],
};
const tcs = new CoffeeShop(Shop);
console.log(tcs);
tcs.addOrder("iced coffee");
// console.log(tcs.fulfillOrder());
tcs.addOrder("iced tea");
// console.log(tcs.listOrders());
console.log(tcs.dueAmount());
console.log(tcs.cheapestItem());
console.log(tcs.drinksOnly());
console.log(tcs.foodOnly());
