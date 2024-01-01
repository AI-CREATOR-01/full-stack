////////////////////////// VALUES AND VARIABLES /////////////////////////////

// let var1;
// var var2;
// var1 = 17;

// let PI = 3.14;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////// DATA TYPE //////////////////////////////

// const var3 = 100;
// let var4 = 152;
// var4 = "string";
// console.log(var4);
// console.log(typeof var3);
// console.log(typeof var4);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof NaN);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////// STRING VS TEMPLATE STRING /////////////////////

// console.log("hello\nworld");

// // vs
// console.log(
//   "hello\n\
// world"
// );
// // vs
// console.log(`
// hello
// world`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////  IF-ELSE STATEMENT //////////////////

// let age = 18;
// if (age >= 18) {
//   console.log("Yes you can drive");
// } else if (age < 18) {
//   console.log("sorry you can't drive");
// } else {
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////// TYPE CONVERSION AND COERSION /////////////////////////////

// console.log("100" + 100);
// console.log("100" / 100);
// console.log("100" * 100);
// console.log("100" - 100);
// console.log("100" % 100);
// console.log("100" ** 2);
// let str = +"str100"; // result will be NaN so finally str == NaN hoga and NaN is a number data type
// console.log(str);
// console.log(+"hello100");
// console.log("40" + 40);
// console.log(+40 + 40);
// console.log(+"40" + 40);
// console.log(-"40" + 40);
// console.log(-10);
// console.log(100);
// console.log("100");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////// ////////// TRUTHY AND FALSY VALUES   //////////////////////////////

// console.log(Boolean(NaN));
// console.log(Boolean(0));
// console.log(Boolean(""));

// let und = Boolean(undefined);
// console.log(und);
// console.log(Boolean({}));
// console.log(Boolean(null));

// let num = 0;

// // if-else statement always convert provided condition to truthy or falsy value
// if (num) {
//   console.log("hello");
// } else {
//   console.log("hiii");
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////// SWITCH STATEMENTS /////////////////////////////
// NOTE INSIDE PARENTHEIS AND AFTER CASE WE PUT ANY EXP  AND THEN EXP SHOULD BE MATCH TABHI CODES EXECUTES HONGE SIMPLE
// function fn1() {
//   console.log("hello");
// }
// const day = 12;
// switch (day) {
//   case "monday":
//   case "wednesday":
//   case 10 && 12:
//   case 1000:
//     if (true) {
//       console.log("hello");
//     }
//     console.log("hello world");
//     console.log(day);
//     fn1();
//     break;

//   case "tuesday":
//     console.log(day);

//   default:
//     console.log("enter correct day");
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////// CONDITIONAL(TERNARY ) OPERATOR////////////////////////////////////
// syntax
//condition ? exp1 : exp2 ----->> if cond is true exp1 value will be returned and if cond is false then exp2 value will be returned
// const age = 18;
// const age2 = age > 18 ? "hello world" : "hiii";
// console.log(age2);

// function add() {
//   return 10 + 10;
// }
// function sub() {
//   return 10 - 10;
// }

// const final = true ? add() : sub();
// console.log(final);
