const singInBtn = document.querySelector("#signInBtn");
const signUpBtn = document.querySelector("#signUpBtn");
const signInForm = document.querySelector("#signInForm");
const signUpForm = document.querySelector("#signUpForm");
const mainSignInDiv = document.querySelector(".mainSignInDiv");
const mainSignUpDiv = document.querySelector(".mainSignUpDiv");
const signUpOverflow = document.querySelector(".signUpOverFlow");
const signInH1 = document.querySelector("#signIH1");
const signUpH1 = document.querySelector("#signUpH1"); 

function toSignInForm() {
    signInForm.style.display = "block";
    mainSignInDiv.style.background = "#e9e9e9";
    mainSignUpDiv.style.background = "transparent";
    mainSignUpDiv.style.animation = "none";
    mainSignInDiv.style.animation = "showSignInOne 1s";
    mainSignUpDiv.style.animation = "showSignInTwo 1s";
    signUpForm.style.display = 'none';
    signUpH1.style.display = "none";
    signInH1.style.display = "block";
}

function toSignUpForm() {
    signUpForm.style.display = 'block';
    mainSignUpDiv.style.background = "#e9e9e9";
    mainSignInDiv.style.background = "transparent";
    mainSignInDiv.style.animation = "none";
    mainSignUpDiv.style.animation = "showSignUpOne 1s";
    mainSignInDiv.style.animation = "showSignUpTwo 1s";
    signInForm.style.display = "none";
    signInH1.style.display = "none";
    signUpH1.style.display = "block";
}

singInBtn.addEventListener("click", toSignInForm);
signUpBtn.addEventListener("click", toSignUpForm);