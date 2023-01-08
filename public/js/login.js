const { json } = require("sequelize");

const loginForm = async (event) =>{
    event.preventDefault();

    alert('login request recieved');
    
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(email && password){
        const response = await fetch ('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'}
        })

        if(response.ok){
            document.location.replace('/mainpage')
        }
    }
}

document.querySelector('#login-button').addEventListener('submit', loginForm)