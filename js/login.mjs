import { login } from './services/user-service.mjs';

export let user = {
};

const form = document.getElementById("login-form");
form?.addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const loginButton = document.getElementById("login-button");
    let cursor = document.body.style.cursor;

    loginButton.disabled = true;
    cursor = "wait";

    try {
        const res = await login(email, password);

        if (res) {
            user.isLoggedIn = res;
            alert("do not forget to handle login")
            
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
