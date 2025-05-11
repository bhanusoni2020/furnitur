const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Add event listeners for form submissions
const signupForm = document.querySelector('.signup-form');
const loginForm = document.querySelector('.login-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = signupForm.querySelector('input[name="name"]').value;
    const email = signupForm.querySelector('input[name="email"]').value;
    const password = signupForm.querySelector('input[name="password"]').value;
    
    // Add your signup logic here
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    window.location.href = 'dashboard.html';
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[name="email"]').value;
    const password = loginForm.querySelector('input[name="password"]').value;
    
    // Add your login logic here
    // For now, we'll accept any email/password
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    window.location.href = 'dashboard.html';
});

// Add event listeners for social login buttons
const socialButtons = document.querySelectorAll('.social');
socialButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const icon = button.querySelector('i').className;
        if (icon.includes('facebook')) {
            // Add Facebook login logic
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', 'facebook_user@example.com');
            window.location.href = 'dashboard.html';
        } else if (icon.includes('google')) {
            // Add Google login logic
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', 'google_user@example.com');
            window.location.href = 'dashboard.html';
        }
    });
});
