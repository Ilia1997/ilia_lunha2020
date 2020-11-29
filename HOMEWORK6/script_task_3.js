// task 3
let elem = document.querySelectorAll("div p");
for (let i = 0; i < elem.length; i++) {
  console.log("Selector text " + i + ": " + elem[i].innerHTML);
}
