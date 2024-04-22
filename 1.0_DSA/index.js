/////////////////////////////// the first recurring elements /////////////////////////

const arr = [1, 2, 2, 3, 4];
const arr1 = [];
let reOccur;
for (let i = 0; i < arr.length; i++) {
  if (arr1.includes(arr[i])) {
    reOccur = arr[i];
    console.log(`the first reocccuring ele is ${arr[i]}`);
    break;
  } else {
    arr1.push(arr[i]);
  }
}
if (!reOccur) {
  console.log("there is no reoccuring element");
}
