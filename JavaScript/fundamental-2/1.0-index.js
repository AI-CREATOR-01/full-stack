"use strict"; // to write more secure codes by avoiding accidentals errors and ceating visible errors reason in console

// let hasDriversLicense = false;
// const passTest = true;
// if (hasDriverLicense) {
//   console.log("hello");
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////// ARRAY ///////////////////////////////

// const arr = ["sanit", "creator", 100];
// const arr1 = new Array("sanit", "creator", 100);
// console.log(arr);
// console.log(arr1);

// arr[0] = "anit";
// console.log(arr[0]);

// function fn() {
//   return 100;
// }

// const arr3 = [100 - 90, fn()];
// console.log(arr3);
// console.log(arr3[1]);
// console.log(`ssecond ele of arr3 is : ${fn()}`);

////////////////////////////// ARRAY METHODS //////////////////////////////

//NOTE ---->> AB CHUNKI METHODS BHI EK FUNCTION HOTE HAI aur ek function kuchh na kuchhh return krta hai either undefined or any valid output
// const arr4 = [1, 2, 3, 4, 5, 6];
// arr4.push(10); // add the ele at last index and return new length of arr4 so we can store this operation to  a variable see
// arr4.pop(); // remove last ele and return that ele
// arr4.unshift(30); // add ele at first index and return new length of arr4
// arr4.shift(); // it remove first ele and return that

// arr4.indexOf(6); // return the inex of that ele
// arr4.includes(3); // return either true or false

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////// OBJECT ///////////////////////////

// const obj = {
//   name: "creator",
//   sirname: "sanit",
//   num: () => 100 - 90,
//   arr: [1, 22, 3],
//   obj: {
//     obj: "obj1",
//   },
// };

// obj["name"] = "ai";
// obj["name1"] = "ml";
// console.log(obj);

////////////////////   OBJECT METHODS ////////////////////

// const obj1 = {
//   num: 100,
//   num: 1000,
// };
// // console.log(obj1.num);

// const obj2 = {
//   name: "creator",
//   fn: () => console.log("hello"),
//   fn2: () => {
//     if (obj2.name) {
//       return obj2.name;
//     }
//   },
//   fn3: function (sirname) {
//     console.log(this);
//     return `${this.name} ${sirname}`; // this.name === obj2.name, this keyword
//   },
//   fn4: function () {
//     console.log(this);
//     return "hello world";
//   },
// };

// console.log(obj2.fn2); // yah fn2 me jo bhi store hoga wah laakr dega so yah arow function return krega
// console.log(obj2.fn2()); // isss baar yah fn2 me store function ko execute kr dega
// console.log(obj2["fn2"]()); // alternative way of previous one

// const compName = obj2.fn3("sanit");
// console.log(compName);

// const func4 = obj2.fn4; // obj2.fn4 gone replace itself with actual function that is stored to fn4 property and stored to func4 variable name
// console.log(func4()); // here func4 variable hold a function so we call this variable like a function simple

//////////////////////////////////////

// here prove that this keyword of a function refer to obj that call this/that function
// const obj4 = {
//   name: "data scientist",
// };

// function fn10() {
//   console.log(this.name);
// }
// obj4.exeternalFunction = fn10;
// //it's alternative
// // obj4["exeternalFunction"] = fn10;

// console.log(obj4);
// obj4.exeternalFunction();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////// LOOPING ARRAYS, BREAKING AND CONTINUING ////////////////

// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 3) {
//     continue;
//   }
//   console.log(arr[i]);
// }

let str = "helloworldopoops";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] !== "o") {
    continue; // mtlb jab jab str[i] o na hi tab tab unn sabhi iteration and operations corresponding to them  skip krdo and move to next iteration
  }
  console.log(str[i]);
  count++;
}
console.log(`totaal O is ${count}`);

/* how the break and continue work see
 jaise ki above for loop ko har ek iteration ke corresponding three statement/lines of code ko 
 execute krna hai phla if block statement ko dusra cl ko aur tisra
 count ko so for any iteration loop execute it's statement one by one aur jaise hi continue ko
 encounter krta hai whi se next iteration ke liye move kr jaaat hai without executing next statement/line of code
*/
///NOTE---->> agar if block ke ander continue se phle lines of codes hai then wah har ke iteration ke liye execute honge

////////////////////////// RETURN VS BREAK VS CONTINUE /////////////////////////////
// return
/*
1. used to Exits a function and optionally returns a value jha pr function invoke hua hai

2. return is used only within JS function and return can be anywhere even inside any loop and if else but this loop and if else 
   shoul be inside a function kyuiki return jka kaam hi function ko exit krne ke liye no matter inside the functionn return keyword
   kha used hua hai

3. jaise hi return keyword encounter hota hai then rest lines of codes/statements inside that function that come after return keyword 
   does not execute kyuki has already exit that function simple
*/

// NOTE:--->>> agr kisi kaam(any operation/operations) ko baar baar krna hai then unnn operations ko for loop ke saath bind kr dena hai

/*
1.return: Used only within functions.
2.break and continue: Used within loops and switch statements.
3.break: Exits the loop or switch completely.
4.continue: Skips the remaining code in/for the current iteration of a loop and moves to the next iteration.
*/
