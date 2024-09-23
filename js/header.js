function generateHeader() {
    const body = document.getElementsByTagName("body")[0];
    const header = document.createElement("header");
    const htmlCode = `
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

    header.innerHTML = htmlCode;

    try {
        // Select the first element with the class 'welcome-view'
        const container = document.getElementsByClassName("welcome-view")[0];

        // Check if the container exists
        if (container) {
            // Prepend the header to the container
            container.prepend(header);
        } else {
            // If the container is not found, prepend the header to the body
            body.prepend(header);
        }
    } catch (err) {
        console.log(err);

        // In case of an error, prepend the header to the body as a fallback
        body.prepend(header);
    }
}

generateHeader();