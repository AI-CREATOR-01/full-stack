function Fn(name) {
  this.name = name;
}
const obj = new Fn("hello");
console.log(obj);

console.log(obj instanceof Object);
