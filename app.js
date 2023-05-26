const logo = document.getElementById("logo");
const navBar = document.getElementById("navbtn");

//function run when page is fully loaded
// document.addEventListener('DOMContentLoaded', function () {
  // do something here ...
//   alert("hello World")
// });


//function to open and close nav on mobile view
navBar.addEventListener("click", ()=> {
  let headerNav =  document.getElementById("headerNav");

  if (headerNav.style.display == "block"){
    headerNav.style.display = "none";
  }else {
    headerNav.style.display = "block";
  }
});

//Back to homepage function
logo.addEventListener("click", () => {
  window.location.href = "./index.html";
});