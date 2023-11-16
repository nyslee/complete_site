// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the Nav
var navbar = document.getElementById("myNav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function myExtraFunction(expand) {
  var dots = document.querySelector(".dots")
  var moreText = document.querySelector(".more");
  var btnText = document.querySelector(".myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Open Photo Gallery";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Close Photo Gallery";
    moreText.style.display = "inline";
  }
 }

// function myExtraFunction() {
//   var dots = document.querySelector(".dots2")
//   var moreText = document.querySelector(".more2");
//   var btnText = document.querySelector(".myBtn2");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Open Photo Gallery";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Close Photo Gallery";
//     moreText.style.display = "inline";
//   }
//  }