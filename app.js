const user = [
  {
    username: "Ezkiel8807",
    firstname: "Ezekiel",
    Lastname: "Ayebidun",
    islogin: false,
    password: "##Iyanu8807"
  },
  
  {
    username: "pelumi8807",
    firstname: "pelumi",
    Lastname: "Ayebidun",
    islogin: false,
    password: "##Pelumi8807"
  }
]

//function run when page is fully loaded
document.addEventListener('DOMContentLoaded', function () {

  //do something here ...
  if( window.location.href == "index.html"){
    alert('Admin')
  }
});


//function to open and close nav on mobile view
function show$hideNav() {
  let headerNav =  document.getElementById("headerNav");

  if (headerNav.style.display == "block"){
    headerNav.style.display = "none";
  }else {
    headerNav.style.display = "block";
  }
};

//Back to homepage function
function logo() {
  window.location.href = "./index.html";
};