//task 1

let x = 1;
let y = 2;

let res1 = "" + x + y;
console.log(res1); // "12"
console.log(typeof res1); // "string

let res2 = Boolean(x) + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x) || Boolean(y);
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = parseInt(Boolean(x) || Boolean(y));
console.log(res4); // NaN
console.log(typeof res4); // "number"

//task 2

let num = prompt("Enter number");
if (num % 2 == 0 && num < 0) {
  console.log(num + " is even number");
} else if (num == 7 && num % 7 == 0) {
  console.log("Your enter number 7 ");
} else {
  console.log(num + " isn't even number");
}

//task 3

let array_1 = [];

array_1[0] = 1;
array_1[1] = "This is array";
array_1[2] = true;
array_1[3] = null;

document.write(array_1.length);
document.write("<br/>");
let s = prompt("Enter something");
array_1[4] = s;
document.write(array_1[4]);
array_1.shift();
document.write("<br/>");
document.write(array_1);

// task 4

let cities = ["Rome", "Lviv", "Warsaw"];
console.log(cities.join("*"));

// task 5

let isAdult = prompt("Скільки Вам років ?");
if (isAdult >= 18) {
  alert("Ви досягли повнолітнього віку");
} else if (isAdult <= 10) {
  alert("Ви ще надто молоді");
} else {
  alert("Ви середнього віку");
}

//task 6

let side_1 = prompt("Введіть довжину 1 сторони трикутника");
let side_2 = prompt("Введіть довжину 2 сторони трикутника");
let side_3 = prompt("Введіть довжину 3 сторони трикутника");

if (side_1 > 0 && side_2 > 0 && side_3 > 0) {
  let p = 0.5 * (+side_1 + +side_2 + +side_3);
  console.log(p);

  let s = Math.sqrt(p * (p - side_1) * (p - side_2) * (p - side_3));

  console.log(Math.floor(s * 1000) / 1000);
} else {
  alert("Incorrect data");
}
if (
  side_1 ** 2 == side_2 ** 2 + side_3 ** 2 ||
  side_2 ** 2 == side_1 ** 2 + side_3 ** 2 ||
  side_3 ** 2 == side_1 ** 2 + side_2 ** 2
) {
  console.log(" Це прямокутний трикутник");
} else {
  console.log(" Це не прямокутний трикутник");
}

//task 7

let now = new Date();

let nowHour = now.getHours();

if (nowHour >= 23 && nowHour < 5) {
  alert("Доброї ночі");
} else if (nowHour >= 5 && nowHour < 11) {
  alert("Доброго ранку");
} else if (nowHour >= 11 && nowHour < 17) {
  alert("Доброго дня");
} else if (nowHour >= 17 && nowHour < 23) {
  alert("Доброго вечора");
}

switch (nowHour) {
  case (23, 0, 1, 2, 3, 4):
    alert("Доброї ночі");
    break;
  case (5, 6, 7, 8, 9, 10):
    alert("Доброго ранку");
    break;
  case (11, 12, 13, 14, 15, 16):
    alert("Доброго дня");
    break;
  default:
    alert("Доброго вечора");
}
