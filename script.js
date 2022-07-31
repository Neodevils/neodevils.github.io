function menuFunction() {
  var menu = document.getElementById("myTopNav");
  if (menu.className === "topNav") {
    menu.className += " responsive";
  } else {
    menu.className = "topNav";
  }
}