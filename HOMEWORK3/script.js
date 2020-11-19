// task 1
let elements = [2, 3, 4, 5];
let x = 1;
for (let i = 0; i < elements.length; i++) {
  x *= elements[i];
}
console.log(x);
let i = 0;
let r = 1;
while (i < elements.length) {
  r *= elements[i];
  i++;
}
console.log(r);

// task 2

for (let i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

// task 3

let arraus = [];
let randArray = function (k) {
  for (let i = 0; i < k; i++) {
    let someNum = Math.floor(Math.random() * 500) + 1;
    arraus.unshift(someNum);
  }
  console.log(arraus);
};

randArray(7);

// task 4
let e = prompt("Enter number a");
let t = prompt("Enter number b");

let u = Number(e);
let y = Number(t);

let raiseToDegree = function (a, b) {
  console.log(a ** b);
};
if (Number.isInteger(u) && Number.isInteger(y)) {
  raiseToDegree(u, y);
} else {
  console.log("It's not an integer");
}

// task 5

let findMin = function () {
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] < arguments[0]) {
      arguments[0] = arguments[i];
    }
  }
  console.log(arguments[0]);
};
findMin(12, 14, 4, -4, 0.2);

// task 6

// let arr = [1, 12, 3, 5, 12];
function findUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log(findUnique([1, 2, 3, 5, 11]));

// task 7

function lastElem(array, numOfAr = 1) {
  let g = 1;
  let o = [];
  let l = numOfAr;

  if (array.length < numOfAr) {
    return array;
  } else if (numOfAr > g) {
    for (let i = 0; i < numOfAr; i++) {
      let h = array.length - l;

      o[i] = array[h];
      l = l - 1;
    }
    return o;
  }
}

// task 8
let someText = "i love java script";

function changeCase(someText) {
  return someText.replace(/(^|\s)\S/g, function (s) {
    return s.toUpperCase();
  });
}
console.log(changeCase(someText));
