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

function myExtraFunction() {
  var dots = document.getElementById("dots")
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtnBacon");

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

function myExtraFunction2() {
  var dots = document.getElementById("dots2")
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtnCheeto");

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

 function myExtraFunction3() {
  var dots = document.getElementById("dots3")
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtnBear");

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

 function myExtraFunction4() {
  var dots = document.getElementById("dots4")
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("myBtnBiscuit");

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

 function myExtraFunction5() {
  var dots = document.getElementById("dots5")
  var moreText = document.getElementById("more5");
  var btnText = document.getElementById("myBtnChief");

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

 function myExtraFunction6() {
  var dots = document.getElementById("dots6")
  var moreText = document.getElementById("more6");
  var btnText = document.getElementById("myBtnBo");

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

 function myExtraFunction7() {
  var dots = document.getElementById("dots7")
  var moreText = document.getElementById("more7");
  var btnText = document.getElementById("myBtnBobtail");

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

 function myExtraFunctionT() {
  var dots = document.getElementById("dotsT")
  var moreText = document.getElementById("moreT");
  var btnText = document.getElementById("myBtnYellowstone");

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

 function myExtraFunctionT2() {
  var dots = document.getElementById("dotsT2")
  var moreText = document.getElementById("moreT2");
  var btnText = document.getElementById("myBtnDubai");

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

 function myExtraFunctionT3() {
  var dots = document.getElementById("dotsT3")
  var moreText = document.getElementById("moreT3");
  var btnText = document.getElementById("myBtnSeattle");

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

 function myExtraFunctionT4() {
  var dots = document.getElementById("dotsT4")
  var moreText = document.getElementById("moreT4");
  var btnText = document.getElementById("myBtnMaldives");

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

 function myExtraFunctionR() {
  var dots = document.getElementById("dotsR")
  var moreText = document.getElementById("moreR");
  var btnText = document.getElementById("myBtnDoubleChocolateCookies");

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

 function myExtraFunctionR2() {
  var dots = document.getElementById("dotsR2")
  var moreText = document.getElementById("moreR2");
  var btnText = document.getElementById("myBtnWhiteSaucePasta");

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

 function myExtraFunctionR3() {
  var dots = document.getElementById("dotsR3")
  var moreText = document.getElementById("moreR3");
  var btnText = document.getElementById("myBtnMatchaCookies");

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