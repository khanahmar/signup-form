const container = document.getElementById("container");
const form = document.getElementById("form");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userPass = document.getElementById("user-pass");
const userRePass = document.getElementById("user-repass");

form.addEventListener("submit", (e) => {
  e.preventDefault();
   
  if (userName === "") {
    console.log(userName.value);
  } else {
    console.log((userName.innerHTML = "empty data"));
  }
});
