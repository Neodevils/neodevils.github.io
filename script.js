// all titles
var titleArray = ["I am Neo! 👋🏻", "And, this is my website ❤️", "@Neodevil 🙌🏻"];

// title's length 
var titleArrayLength = titleArray.length;
var i = 0;

// interval function
setInterval(titleUpdate, 3000);

// title updating function
function titleUpdate() {

  // looping the i variable
  if (i == 3) {
    i = 0;
  }

  // updating title and increasing i variable 
  document.title = titleArray[i];
  i++;
}

//////////////////////////////////////
