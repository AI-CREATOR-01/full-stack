function fn(...args) {
  for (let i = 0; i < args.length; i++) {
    let str = args.join().replace(/,/g, "");
    console.log(eval(str));
  }
}
// fn(1 + 2 + 3 + 43 + 4);

