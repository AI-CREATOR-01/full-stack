const name = "creator";
const ele = `

  <h1>${name}</h1>

`;

const ele1 = `
<h2>hey</h2>
`;

const selEle = document.getElementById("div");
selEle.insertAdjacentHTML("afterbegin", ele);
selEle.insertAdjacentHTML("afterbegin", ele1);
