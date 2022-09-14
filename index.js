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
const massage = document.getElementsByClassName("massage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateUser(userName);
  // validateEmail(userEmail);
  // validatePass(userPass, userRePass);
});

// validate userName
function validateUser(userName) {
  if (!userName.value.match(/^[A-Za-z]+$/)) {
    massage[0].innerHTML = "invalid username";
    massage[0].classList.add("error");
    userName.classList.add("error-input");
    // console.log("invalid user")
    return;
  }
  massage[0].innerHTML = "valide username";
  massage[0].classList.add("success");
  userName.classList.add("success-input");
  userData.innerHTML = `Name ${userName.value} <br>`;
}

// validate email
function validateEmail(userEmail) {
  return String(userEmail)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// validate password

function validatePass(userPass, userRePass) {
  if (userPass.value.trim().length > 7 && userPass.value.trim().length < 20) {
    if (userPass.value === userRePass.value) {
      console.log(`Password : ${userPass.value}`);
    } else {
      alert(" Password donot match");
    }
  } else {
    alert("invalid password.Password should be atleast 8 characters long");
  }
}

// Make another event listner
userName.addEventListener("focusout", (e) => {
  if (userName.value.match(/^[A-Za-z]+$/)) {
    userName.classList.add("success-input");
  } else {
    userName.classList.add("error-input");
  }
});
