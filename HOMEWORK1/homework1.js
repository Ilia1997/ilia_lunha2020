// task 2
console.log("Lunha");
// task 3
let i = 1;
let u = "String";
document.write(i," ",u );
document.write ( "<br>");
i = "String";
document.write(i," ",u);
// task 4
let obj = {
    string: "JavaScript",
    number: 1,
    boolean: true,
    undefined:undefined,
    null:null
};
// task 5
let isAdult = confirm("Вам є 18 років ?");
console.log(isAdult);
// task 6
let firstName;
let lastName;
let studyGroup;
let yearOfBirdth;

firstName = "Ilia";
lastName = "Lunha";
studyGroup = 548;
yearOfBirdth = 1997;
let statusFamily = false;

typeof studyGroup;
typeof yearOfBirdth;
typeof statusFamily;
typeof firstName;
typeof lastName;

console.log(studyGroup, yearOfBirdth, statusFamily, firstName,lastName)

let f = null;
let r = undefined;

console.log(f ,r);

// task 7

var login = prompt('Enter your login', 'admin');
var email = prompt('Enter your e-mail', 'admin@mail.com');
var password = prompt('Enter your password', '*******');




alert('Dear ' + login +', your email is '+ email +', your password is '+ password);

// task 8 


let numbrOfSecondInHour = 60*60;
let numbrOfSecondInDay = numbrOfSecondInHour * 24;
let numbrOfSecondInMonth = numbrOfSecondInDay * 30;

document.write( "<br>");
document.write("Second in hour:" + numbrOfSecondInHour);
document.write( "<br>");
document.write("Second in day:" + numbrOfSecondInDay);
document.write( "<br>");
document.write("Second in month:" + numbrOfSecondInMonth);

