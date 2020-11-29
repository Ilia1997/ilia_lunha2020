let f = document.getElementsByTagName("script")[0];
f.insertAdjacentHTML(
  "beforeBegin",
  "  <main class='mainClass check item'> " +
    " <div id='myDiv'>" +
    "<p>First paragraph</p>" +
    " </div>" +
    "</main>"
);
