document.addEventListener('DOMContentLoaded', function() {
    // Show create account form
    document.getElementById('showCreateAccount').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('createAccountForm').classList.remove('hidden');
    });

    // Show login form from create account form
    document.getElementById('showLoginFromCreate').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        document.getElementById('createAccountForm').classList.add('hidden');
        document.getElementById('loginForm').classList.remove('hidden');
    });

    // Show forgot password form
    document.getElementById('showForgotPassword').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('forgotPasswordForm').classList.remove('hidden');
    });

    // Show login form from forgot password form
    document.getElementById('showLoginFromForgot').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        document.getElementById('forgotPasswordForm').classList.add('hidden');
        document.getElementById('loginForm').classList.remove('hidden');
    });

    // Handle create account form submission (dummy action)
    document.getElementById('createAccount').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission for demo purposes
        var createEmail = document.getElementById('createEmail').value;
        var createPassword = document.getElementById('createPassword').value;
        // Here you can add your logic to handle account creation (e.g., AJAX request)
        console.log('Create Account Form Submitted');
    });

    // Handle forgot password form submission (dummy action)
    document.getElementById('forgotPassword').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission for demo purposes
        var forgotEmail = document.getElementById('forgotEmail').value;
        // Here you can add your logic to handle forgot password (e.g., sending reset link)
        console.log('Forgot Password Form Submitted');
    });
});
