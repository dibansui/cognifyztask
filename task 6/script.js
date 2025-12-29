const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    clearErrors();

    let isValid = true;


    if (username.value.trim() === '') {
        showError('nameError', 'Name is required.');
        isValid = false;
    }

    if (!email.value.includes('@') || email.value.trim() === '') {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    if (password.value.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters.');
        isValid = false;
    }

    if (isValid) {
        alert('Form Submitted Successfully!');
        form.reset(); 
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
    errorElement.style.display = 'block';
    
    if(elementId === 'nameError') username.style.border = "1px solid red";
    if(elementId === 'emailError') email.style.border = "1px solid red";
    if(elementId === 'passwordError') password.style.border = "1px solid red";
}

function clearErrors() {
    const errors = document.querySelectorAll('.error-msg');
    errors.forEach(error => error.style.display = 'none');
    
    username.style.border = "1px solid #ccc";
    email.style.border = "1px solid #ccc";
    password.style.border = "1px solid #ccc";
}