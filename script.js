document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input values
    var email = document.querySelector('input[type="email"]').value;
    var password = document.querySelector('input[type="password"]').value;

    // Simulated user credentials (replace these with actual credentials from your server)
    var correctEmail = 'user@example.com';
    var correctPassword = 'password123';

    // Check if the input values match the correct credentials
    if (email === correctEmail && password === correctPassword) {
        // Login successful
        alert('Login successful! Redirecting to the dashboard...');
        // You can redirect the user to another page using window.location.href = 'dashboard.html';
    } else {
        // Login failed
        alert('Invalid email or password. Please try again.');
    }
});
