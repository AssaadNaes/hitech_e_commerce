import { register } from "./services/user-service.mjs";

const form = document.getElementById("register-form");
form?.addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repeatedPassword = document.getElementById("repeated-password").value;
    const registerButton = document.getElementById("register-button");
    const msgParagraph = document.getElementById("failure-msg");
    let cursor = document.body.style.cursor;
    
    if(password === repeatedPassword){

        registerButton.disabled = true;
        cursor = "wait";

        try {
            const res = await register(username, email, password);
            if(res.status === 201) {
                console.log("User has been registered");
                window.location.href = "../index.html";
            }
        } catch(error) {
            msgParagraph.textContent = "a user with same email already exists!";
        } finally {
            registerButton.disabled = false;
            cursor = "default"
        }
    } else {
        msgParagraph.textContent = "passwords do not match!";
    }
});