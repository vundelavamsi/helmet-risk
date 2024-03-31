document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Replace this logic with your authentication process
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'admin' && password === 'password') {
        // Redirect to content page on successful login
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password');
    }
});
