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


// Example POST method implementation:
async function postData(url = "", data = {}) {

  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


//function run when page is fully loaded
document.addEventListener('DOMContentLoaded', function () {

  //do something here ...
  // if( window.location.href == "index.html"){
  //   alert('Admin')
  // }
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

//function to open and close side nav in mobile
function showsidenav() {
  let headerNav =  document.getElementById("dash_aside");

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

function adminlogin() {

  //get login parameters
  let err_msg = document.getElementById("err_msg");
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if(!username || !password){
    err_msg.innerHTML = "All fields required!";

  }else {

    postData("/admin", { "username": username, "password": password }).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  }
}