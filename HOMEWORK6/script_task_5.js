// task 5

let bgc = document.getElementsByTagName("h1")[0];
bgc.style.background = "#3cb371";

let p1 = document.getElementsByTagName("p")[0];
p1.style.fontWeight = "700";
let p2 = document.getElementsByTagName("p")[1];
p2.style.color = "red";
let p3 = document.getElementsByTagName("p")[2];
p3.style.textDecoration = "underline";
let p4 = document.getElementsByTagName("p")[3];
p4.style.fontStyle = "italic";
let horDiv = document.getElementById("myList");
let hor = document.getElementById("myList").children;
for (let i = 0; i < hor.length; i++) {
  hor[i].style.listStyleType = "none";
}
horDiv.style.display = "flex";

let sp = document.getElementsByTagName("span")[0];
sp.style.display = "none";
