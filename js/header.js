let isLoggedIn = false;

function logout() {
    isLoggedIn = !isLoggedIn;
    updateHeader();
}

function createHeaderHTML(isLoggedIn) {
    const commonHTML = `
        <div class="logo">
            <i class="fa-brands fa-phoenix-squadron"></i>
            HiTech
        </div>
        <div class="navigation">
            <a href="pages/cart.html" class="default cart navigation-buttons">
                <i class="fa-solid fa-cart-shopping"></i>
                €0,00
                <span class="products-count">0</span>
            </a>
    `;

    const loggedInHTML = `
            <button class="default navigation-buttons" onclick="logout()">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                Logout
            </button>
        </div>
    `;

    const loggedOutHTML = `
            <a href="pages/login.html" class="default log-in navigation-buttons">
                <i class="fa-solid fa-arrow-right-to-bracket"></i>
                Login
            </a>
            <a href="pages/register.html" class="default register navigation-buttons">
                <i class="fa-solid fa-user-plus"></i>
                Register
            </a>
        </div>
    `;

    return commonHTML + (isLoggedIn ? loggedInHTML : loggedOutHTML);
}

function updateHeader() {
    const header = document.querySelector("header");
    if (!header) {
        console.error("Header element not found");
        return;
    }

    header.innerHTML = createHeaderHTML(isLoggedIn);
}

// Initial header generation
updateHeader();
