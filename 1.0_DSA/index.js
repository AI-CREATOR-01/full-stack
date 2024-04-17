/////////////////////////////// the first recurring elements /////////////////////////

const arr = [2, 1, 3, 1, 3, 5, 1, 5, 2, 3, 5, 1, 2, 4];
const arr1 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr1.includes(arr[i])) {
    console.log(`the first reocccuring ele is ${arr[i]}`);
    break;
  } else {
    arr1.push(arr[i]);
  }
}
