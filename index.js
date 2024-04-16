// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//     }
//     return hash;
//   }
// }

// const obj = new HashTable(50);
// console.log(obj);

let str = "grapes";
console.log(str.charCodeAt(0) * str[0]);
