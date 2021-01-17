const form = document.querySelector(".form");

// first name
const firstName = document.querySelector("#form__first-name");
const firstNameError = document.querySelector("#form__first-name-error");
let firstNameHasError = false;

// last name
const lastName = document.querySelector("#form__last-name");
const lastNameError = document.querySelector("#form__last-name-error");
let lastNameHasError = false;

//email
const emailAddress = document.querySelector("#form__email");
const emailAddressError = document.querySelector("#form__email-error");
let emailAddressHasError = false;

// message
const formMessage = document.querySelector("#form__message");
const formMessageError = document.querySelector("#form__message-error");
let formMessageHasError = false;

// submit message
const submitMessage = document.querySelector("#form__submit-message");


form.addEventListener("submit", formValidation);

function formValidation() {
    event.preventDefault();

    // first name
    const firstNameValue = firstName.value;

    if (validateLength(firstNameValue, 2) === true) {
        firstNameError.style.display = "none";
        firstNameHasError = false;
    } else {
        firstNameError.style.display = "block";
        firstNameHasError = true;
    }

    // last name
    const lastNameValue = lastName.value;

    if (validateLength(lastNameValue, 2) === true) {
        lastNameError.style.display = "none";
        lastNameHasError = false;
    } else {
        lastNameError.style.display = "block";
        lastNameHasError = true;
    }

    // email
    const emailAddressValue = emailAddress.value;

    if (validateEmailAddress(emailAddressValue)) {
        emailAddressError.style.display = "none";
        emailAddressHasError = false;
    } else {
        emailAddressError.style.display = "block";
        emailAddressHasError = true;
    }

    // message
    const formMessageValue = formMessage.value;

    if (validateLength(formMessageValue, 8) === true) {
        formMessageError.style.display = "none";
        formMessageHasError = false;
    } else {
        formMessageError.style.display = "block";
        formMessageHasError = true;
    }

    // submit message 
    if (firstNameHasError === true || lastNameHasError === true || emailAddressHasError === true || formMessageHasError === true) {
        submitMessage.style.display = "none";
    } else {
        submitMessage.style.display = "block";
        firstName.value = "";
        lastName.value = "";
        emailAddress.value = "";
        formMessage.value = "";

        console.log("message was submitted!");
    }
}

function validateLength(value, checkLength) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= checkLength) {
        return true;
    } else {
        return false;
    }
}

function validateEmailAddress(emailAddressValue) {
    const registrat = /\S+@\S+\.\S+/;

    if (registrat.test(emailAddressValue)) {
        return true;
    } else {
        return false;
    }
}