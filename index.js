// Question
// what is regular exprasion
// what is control flow

const container = document.getElementById("container");
const form = document.getElementById("form");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userPass = document.getElementById("user-pass");
const userRePass = document.getElementById("user-repass");
const userData = document.getElementById("userdata");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if ((userName === "@", "#", "$")) {
    alert(`spacial sylmbols not allowed`);
  }
  if (userName.value.length === 0) {
    alert(` Please enter your name`);
  } else {
    console.log(`Name : ${userName.value}`);
  }

  if (userEmail.value.length === 0) {
    alert(` Please enter your Email`);
  } else {
    console.log(`Email : ${userEmail.value}`);
  }

  if (userPass.value.length > 10) {
    alert(`You cant enter more than 10 characters`);
    return;
  }
  if (userEmail.value.length === 0) {
    alert(` Please enter your Password`);
  } else {
    console.log(`Password : ${userPass.value}`);
  }

  if (userRePass.value === userPass.value) {
    console.log(`confirm pass : ${userRePass.value}`);
  } else {
    alert(`Yours password does not match`);
  }
  
  userData.innerHTML = `Name :${userName.value} <br> Email : ${userEmail.value} <br> Password :${userPass.value}<br> Confirm Password :${userRePass.value}`;

});
