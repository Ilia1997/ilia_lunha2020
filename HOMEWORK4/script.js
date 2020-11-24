// task 1
function testThrow(someVal) {
  try {
    throw new Error(someVal);
  } catch (err) {
    console.log("Caught: " + err.message);
  }
}
testThrow(5);
testThrow("Test");
testThrow(new Error("An error happened"));

// task 2
function calcRectangleArea(width, height) {
  if (!isNaN(width) && !isNaN(height)) {
    let square = 0.5 * width * height;
    console.log(square);
  } else {
    console.log("You don't enter a number !");
  }
}
try {
  calcRectangleArea(5, h);
} catch {
  console.log("You don't enter a number !");
}

// task 3
function checkAge() {
  let ageUser = prompt("Enter your age");
  let age = parseInt(ageUser);

  if (ageUser.length === 0) {
    throw new Error("The field is empty! Please enter your age");
  } else if (isNaN(ageUser)) {
    throw new Error("Your enter not a number");
  } else if (age < 14) {
    throw new Error("You are too litle");
  } else {
    throw new Error("You can watch movie ");
  }
}
try {
  let s = checkAge();
  console.log(s);
} catch (errors) {
  alert(errors.message);

  console.log(errors.name);
  console.log(errors.message);
  console.log(errors.stack);
}

// task 4

class MonthException {
  constructor(message) {
    this.message = message;
  }
  name = "MonthException";
}

function showMonthName(month) {
  switch (month) {
    case 1:
      console.log("January");
      break;
    case 2:
      console.log("February");
      break;
    case 3:
      console.log("March");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("May");
      break;
    case 6:
      console.log("June");
      break;
    case 7:
      console.log("July");
      break;
    case 8:
      console.log("August");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("October");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("December");
      break;
    default:
      try {
        throw new MonthException("Incorrect month number");
      } catch (message) {
        console.log(message.name + " " + message.message);
      }
  }
}
console.log(showMonthName(5));
console.log(showMonthName(14));

// task 5

function showUser(id) {
  if (id >= 0) {
    let user = {
      userId: id,
    };
    return user;
  } else {
    try {
      throw new Error(" ID must not be negative: " + id);
    } catch (errors) {
      console.log(errors.name + ": " + errors.message);
    }
  }
}
let r = [];
function showUsers(ids) {
  for (var i = 0; i < ids.length; i++) {
    r[i] = showUser(ids[i]);
    if (!r[i]) {
      r.splice(i, 1);
    }

    continue;
  }
  console.log(r);
}
showUsers([7, 12, -44, -22]);
