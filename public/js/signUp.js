const signUpHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
    const passconfirm = document.querySelector('#signup-confirm').value.trim();
    const name = document.querySelector('#signup-name').value.trim();
  
    if (email && password) {
        if (password !== passconfirm) {
            alert("Passwords did not match!");
        } else {
      const response = await fetch('/api/users/newSignUp', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert("Thanks for signing up!");
        document.location.replace('/');
      } else {
        alert('Failed to sign up');
      }
    }
  };
}
  document
    .querySelector('#signupsuccess')
    .addEventListener('click', signUpHandler);