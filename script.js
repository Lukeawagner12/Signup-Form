function validatePassword() {
    let password1 = document.querySelector('#password1').value;
    let password2 = document.querySelector('#password2').value;
    
    if(password1 !== password2) {
        return false;
    } else {
        return true;
    }
}