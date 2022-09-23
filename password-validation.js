const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const confirmPasswordValid = document.querySelector('#confirm-password-valid');

confirmPasswordInput.addEventListener('change', checkPasswordsMatch);

function checkPasswordsMatch(){
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password != confirmPassword){
        confirmPasswordInput.value = '';
        confirmPasswordValid.style.color = 'red';
        confirmPasswordValid.innerText = '*Passwords do not match';
    }
    else{
        console.log('yes');
        confirmPasswordValid.style.color = '';
        confirmPasswordValid.innerText = '';
    }
}