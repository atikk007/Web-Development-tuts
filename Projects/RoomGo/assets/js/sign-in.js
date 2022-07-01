function googleSignIn() {
  document.querySelector(".sign-in-form").classList.remove("active");
  document.querySelector(".forgot-pass-form").classList.add("active");
}

function goToSignIn() {
  document.querySelector(".sign-in-form").classList.add("active");
  document.querySelector(".forgot-pass-form").classList.remove("active");
}

function clickToSignUp() {
  document.querySelector(".sign-in-form").classList.remove("active");
  document.querySelector(".sign-up-form").classList.add("active");
}

function clickToSignIn() {
  document.querySelector(".sign-in-form").classList.add("active");
  document.querySelector(".sign-up-form").classList.remove("active");
}

function darkModeEnable() {
  document.querySelector(".svg-btn").classList.toggle("active");
  document.body.classList.toggle("dark-mode-on");
}

function lengthChecker() {
  if (document.getElementById("login").value.length >= 8) {
    document.getElementById("login").classList.remove("error");
    document.querySelector(".error-text").classList.add("change-color");
  } else document.querySelector(".error-text").classList.remove("change-color");
}
