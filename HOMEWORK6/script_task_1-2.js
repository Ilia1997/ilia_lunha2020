// task 1

let changeElem = document.getElementById("test");
alert((changeElem.innerHTML = "Last"));

let changeElemQS = document.querySelector("#test");
alert((changeElemQS.innerHTML = "Last"));

// task 2

let changeImg = document.querySelector(".image");
alert((changeImg.outerHTML = ' <img class="image" src="cat.jpg" />'));
