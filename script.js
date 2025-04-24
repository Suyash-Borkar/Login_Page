function toggleForm(type) {
    document.getElementById('loginContainer').style.display = type === 'login' ? 'block' : 'none';
    document.getElementById('signupContainer').style.display = type === 'signup' ? 'block' : 'none';
  }

  function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    if (username && password) {
      localStorage.setItem(username, password);
      alert("Signup successful! You can now login.");
      toggleForm('login');
    } else {
      alert("Please fill in all fields.");
    }
  }

  function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      alert("Login successful!");
    } else {
      alert("Invalid credentials.");
    }
  }