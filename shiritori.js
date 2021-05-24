function Shiritori() {
  this.words = [];
  this.game_over = false;
  this.play = function (word) {
    let item = this.words[this.words.length - 1];
    if (this.words.length === 0) {
      this.words.push(word);
    } else if (this.words.length > 0 && item[item.length - 1] !== word[0]) {
      this.game_over = true;
      return "game over";
    } else if (this.words.length > 0 && item[item.length - 1] === word[0]) {
      this.words.push(word);
    }
    return this.words;
  };
  this.restart=function(){
      this.words=[]
      this.game_over=false
      return "game restarted"
  }
}

const myShiritori = new Shiritori();
// console.log(myShiritori)
console.log(myShiritori.play("apple")); // ["apple"]
console.log(myShiritori.play("ear")); // ["apple"]
console.log(myShiritori.play("rhino")); // ["apple"]
console.log(myShiritori.play("corn")); // ["apple"]
console.log(myShiritori.restart())
console.log(myShiritori.words)
console.log(myShiritori.play("apple")); // ["apple"]
console.log(myShiritori.play("ear")); // ["apple"]
console.log(myShiritori.play("rhino")); // ["apple"]
console.log(myShiritori.play("corn")); // ["apple"]

// myShiritori.play("ear"); // ["apple", "ear"]
// myShiritori.play("rhino"); // ["apple", "ear", "rhino"]
// myShiritori.play("corn"); // "game over"
