//When the dom is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function () {
  //Get the element with an id of onload
  let onLoadEl = document.getElementById("onload");

  //Add some HTML within the element we grabbed
  onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>";
});

//Get the element that will show our key code
let directionEl = document.getElementById("direction");

// Can be changed with Key press or key up depending on what you might need
document.addEventListener("keydown", function (e) {
  // When a key is pressed, the element with the id of direction will show the message
  directionEl.innerText = `The Key you pressed is ${e.code}`;
});

let clickMe = document.getElementById("clickMe");
document.addEventListener("click", function () {
  clickMe.innerText = "You clicked me!";
});

// function randomColorBtn() {
//   document
//     .getElementById("randomColorBtn")
//     .addEventListener("click", function () {
//       let randomColorBtn = Math.floor(Math.random() * 16777215).toString(16);
//       return randomColorBtn;
//     });
// }

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomColorBtn() {
  document
    .getElementById("randomColorBtn")
    .addEventListener("click", function () {
      document.body.style.backgroundColor = getRandomColor();
    });
}
