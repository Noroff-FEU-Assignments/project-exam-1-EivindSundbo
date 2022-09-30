const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const messageSuccess = document.querySelector("#messageSuccess");


function validateForm(event){
    event.preventDefault();

    if(checkLength(fullName.value, 4) === true){
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if(validateEmail(email.value) === true){
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(checkLength(subject.value, 14) === true){
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if(checkLength(message.value, 24) > 25){
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
    if (
        checkLength(firstName.value, 4) &&
        validateEmail(email.value) &&
        checkLength(subject.value, 14) &&
        checkLength(message.value, 24)
      ) {
        fullName.value = "";
        email.value = "";
        subject.value = "";
        message.value = "";
        messageSuccess.style.display = "block";
      } else {
        messageSuccess.style.display = "none";
      }
    }



form.addEventListener("submit", validateForm)

function checkLength(value, len){
    if(value.trim().length > len){
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}