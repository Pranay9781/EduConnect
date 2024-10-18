document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  // Simulate login logic
  const username = document.getElementById('username').value;
  alert('Logged in as ' + username);
  // Redirect to student profile for demonstration
  window.location.href = 'student-profile.html';
});

document.getElementById('registerForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  // Simulate registration logic
  alert('Registration successful!');
  // Redirect to login page for demonstration
  window.location.href = 'login.html';
});

function logout() {
  alert('Logged out');
  window.location.href = 'login.html';
}
