const password = document.querySelector('#pwd');
const confirmPassword = document.querySelector('#pwd-confirm')
const errorMsg = document.querySelector('.error-msg-password');

function checkPasswordMatch() {
    if (password.value == '' && confirmPassword.value == '') {
        errorMsg.textContent = "*please fill out this field";
        errorMsg.style.color = "red";
    }
    else if (password.value == confirmPassword.value) {
        errorMsg.textContent = "";
        errorMsg.textContent = "password confirmed!";
        errorMsg.style.color = "green";
        password.style.borderColor = 'green';
        confirmPassword.style.borderColor = 'green';
    }
    else {
        errorMsg.textContent = "*password do not match";
        errorMsg.style.color = "red";
        password.style.borderColor = 'red';
        confirmPassword.style.borderColor = 'red';
    }
}

password.addEventListener('input', checkPasswordMatch);
confirmPassword.addEventListener('input', checkPasswordMatch);