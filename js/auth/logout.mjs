
const logoutButton = document.getElementById("logout-button");

logoutButton?.addEventListener('click', async function(event) {
    event.preventDefault();
    localStorage.setItem("isLoggedIn", false);
    window.location.href = "../../index.html";
})