// task 4

let sortOfNum = document.querySelectorAll("li");

alert(
  sortOfNum[0].innerHTML +
    " ," +
    sortOfNum[4].innerHTML +
    " ," +
    sortOfNum[1].innerHTML +
    " ," +
    sortOfNum[3].innerHTML +
    " ," +
    sortOfNum[2].innerHTML
);
alert(
  document.body.firstElementChild.innerHTML +
    " , " +
    document.body.lastElementChild.previousElementSibling.innerHTML +
    " , " +
    document.body.firstElementChild.nextElementSibling.innerHTML +
    " , " +
    document.body.lastElementChild.previousElementSibling.previousElementSibling
      .innerHTML +
    " , " +
    document.body.firstElementChild.nextElementSibling.nextElementSibling
      .innerHTML
);
