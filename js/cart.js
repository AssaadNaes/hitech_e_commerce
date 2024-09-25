const products = [
    {
        id: 0,
        imgSrc: "../images/products/gpu.jpeg",
        name: "NONIDEA GeForce RTX 4080 SUPER - 16GB",
        price: 1500,
        totalPrice: 1500,
        inCartQuantity: "1"
    },
    {
        id: 1,
        imgSrc: "../images/products/mouse-keyboard-mic-headset.jpeg",
        name: "Mouse + Keyboard + Mic + Headset",
        price: 1250,
        totalPrice: 2500,
        inCartQuantity: "2"
    }
];

function validateInput(inputElement, maxLength) {
    inputElement.value = inputElement.value
        .replace('-', '')
        .slice(0, maxLength);
}

function setHeader() {
    const header = document.getElementById("header");
    header.innerHTML = 
    `<div class="logo">
        <i class="fa-brands fa-phoenix-squadron"></i>
        HiTech
    </div>
    <div class="total-price">
        <p>Total: <span>to set€</span></p>
    </div>`;
}

function setProducts() {
    const container = document.getElementById("products");
    if (products.length > 0) {
        products.forEach(product => {
            const article = document.createElement("article");
            article.classList.add("product");

            article.innerHTML = `
                <img src="${product.imgSrc}" alt>
                <div class="product-information">
                    <h1>${product.name}</h1>
                    <p>${product.totalPrice}€</p>
                    <div class="manage-product">
                        <div class="manage-quantity">
                            <p class="quantity">quantity:</p>
                            <input
                                id="${product.id}"
                                value="${product.inCartQuantity}"
                                oninput="validateInput(this, this.maxLength)"
                                min="0"
                                type="number"
                                maxlength="2" />
                        </div>
                        <button class="remove default"><i
                                class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>`
            container.appendChild(article);
        });

    } else {
        const message = document.createElement("h1");
        message.innerHTML = "your cart is empty...";
        container.appendChild(message);
    }
}

function setFooter() {
    if (products.length > 0) {
        const footer = document.getElementById("checkout");
        footer.innerHTML = `
            <p>checkout with</p>
            <div class="payment-methods">
                <button><i class="fa-brands fa-cc-paypal"></i></button>
                <button><i class="fa-brands fa-cc-mastercard"></i></button>
                <button><i class="fa-brands fa-google-pay"></i></i></button>
            </div>`
    }
}

setHeader();
setProducts();
setFooter();