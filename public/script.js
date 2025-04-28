function register() {
  const name = document.getElementById('reg_name').value;
  const email = document.getElementById('reg_email').value;
  const country = document.getElementById('reg_country').value;
  const affiliation = document.getElementById('reg_affiliation').value;
  const username = document.getElementById('reg_username').value;
  const password = document.getElementById('reg_password').value;

  fetch('/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, country, affiliation, username, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      alert('Registration successful!');
    } else {
      alert('Registration failed.');
    }
  })
  .catch(err => {
    console.error(err);
    alert('An error occurred.');
  });
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      document.getElementById('login-section').style.display = 'none';
      document.getElementById('form-section').style.display = 'block';
    } else {
      alert('Login failed');
    }
  })
  .catch(err => {
    console.error(err);
    alert('An error occurred.');
  });
}

function submitData() {
  const data = document.getElementById('data').value;

  fetch('/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      alert('Data submitted successfully!');
    } else {
      alert('Submission failed');
    }
  })
  .catch(err => {
    console.error(err);
    alert('An error occurred.');
  });
}
