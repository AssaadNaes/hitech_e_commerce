import { login } from './services/user-service.mjs';

const form = document.getElementById("login-form");
form?.addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginButton = document.getElementById("login-button");
    let cursor = document.body.style.cursor;

    loginButton.disabled = true;
    cursor = "wait";

    try {
        const res = await login(username, password);

        if (res) {
            localStorage.setItem('isLoggedIn', res)
            window.location.href = "../pages/home.html";
        } else {
            document.getElementById("failure-msg").textContent = "wrong email or password!"
            loginButton.disabled = false;
        }
        
    } catch (error) {
        console.error("Faile to log in. Reason: " + error);
        alert("There was an error during login. Please refresh the page.");
    } finally {
        cursor = "default"
    }
});