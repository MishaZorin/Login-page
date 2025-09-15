let username = document.getElementById("name")
let passwordUser = document.getElementById("password")
let emailUser = document.getElementById("email")
let error1 = document.querySelector(".error1")
let error2 = document.querySelector(".error2")
let error3 = document.querySelector(".error3")
let submit = document.getElementById("submit")

submit.addEventListener('click', function (e) {
    e.preventDefault();
    userValid();
    emailValid()
    passwordValid()

});

function userValid() {
    let isValid = true;
    if (!username.value) {

        error1.style.display = "block"
        error1.textContent = "Имя не заполнено"
        username.style.borderColor = "red"
        isValid = false;
    }
    else if (username.value.length < 2) {
        error1.style.display = "block";
        username.style.borderColor = "red";
        isValid = false;

    } else {
        error1.style.display = "none";
        username.style.borderColor = "green";

    }
    return isValid



}

function emailValid(isValid) {
    if (!emailUser.value) {
        error2.style.display = "block"
        error2.textContent = "Email не заполнен"
        emailUser.style.borderColor = "red"
        isValid = false

    }
    else if (!emailUser.value.includes("@")) {
        error2.style.display = "block";
        emailUser.style.borderColor = "red";
        isValid = false;
    } else {
        error2.style.display = "none";
        emailUser.style.borderColor = "green";
    }
    return isValid
}
function passwordValid(isValid){
    if(!passwordUser.value){
        error3.style.display = "block"
        error3.textContent = "Пароль незаполнен!"
        passwordUser.style.borderColor = "red"
        isValid = false
    }
    else if (!passwordUser.value.includes("!")){
        error3.style.display = "block"
        passwordUser.style.borderColor = "red"
        isValid = false
    }
    else{
        error3.style.display = "none"
        passwordUser.style.borderColor = "green"
    }
    return isValid
}

