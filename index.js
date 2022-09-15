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
  validateEmail(userEmail);
  validatePass(userPass, userRePass);
});

// validate userName
function validateUser(userName) {
  if (!userName.value.match(/^[A-Za-z]+$/)) {
    massage[0].innerHTML = "invalid username";
    massage[0].classList.add("error");
    userName.classList.add("error-input");
    return;
  }
  massage[0].innerHTML = "valide username";
  massage[0].classList.add("success");
  userName.classList.add("success-input");
  userData.innerHTML = `Name :${userName.value}`;
}

// validate email
function validateEmail(userEmail) {
  if (
    String(userEmail)
      .toLowerCase()
      .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    massage[1].innerHTML = "valid email";
    massage[1].classList.add("success");
    userEmail.classList.add("success-input");
    userData.innerHTML = `Email :${userEmail.value}`;
  } else {
    massage[1].innerHTML = "invalid email";
    massage[1].classList.add("error");
    userEmail.classList.add("error-input");
  }
}

// validate password

function validatePass(userPass, userRePass) {
  if (userPass.value.trim().length > 5) {
    massage[2].classList.add("success");
    massage[2].innerHTML = "vlaid password";
    userPass.classList.add("success-input");
    userData.innerHTML = `Password :${userPass.value}`;
    if (userPass.value === userRePass.value) {
      massage[3].classList.add("success");
      massage[3].innerHTML = "valide password";
      userRePass.classList.add("success-input");
      userData.innerHTML = `Confirm pass :${userRePass.value}`;
    } else {
      massage[3].classList.add("error");
      massage[3].innerHTML = "Confirm password donot match";
      userRePass.classList.add("error-input");
      userEmail.classList.add("error-input");
    }
  } else {
    massage[2].classList.add("error");
    massage[2].innerHTML = "invalid password";
    userPass.classList.add("error-input");
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
userEmail.addEventListener("focusout", (e) => {
  if (
    String(userEmail)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    userEmail.classList.add("success-input");
  } else {
    userEmail.classList.add("error-input");
  }
});
userPass.addEventListener("focusout", (e) => {
  if (userPass.value.trim().length > 5) {
    userPass.classList.add("success-input");
  } else {
    userPass.classList.add("error-input");
  }
});
