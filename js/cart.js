const products = [
    {
        id: 1,
        imgSrc: "../images/products/gpu.jpeg",
        name: "NONIDEA GeForce RTX 4080 SUPER - 16GB",
        price: 1500,
        inCartQuantity: "1"
    },
    {
        id: 2,
        imgSrc: "../images/products/mouse-keyboard-mic-headset.jpeg",
        name: "Mouse + Keyboard + Mic + Headset",
        price: 1250,
        inCartQuantity: "5"
    }
];

function getTotal() {
    let totalPrice = 0;
    const length = products.length;
    for (let i = 0; i < length; i++){
        product = products[i]
        totalPrice += product.price * product.inCartQuantity;
    }

    return totalPrice;
}

function viewHeader() {
    const header = document.getElementById("header");
    const logo = document.createElement("div");
    logo.classList.add("logo");
    const total = document.createElement("div");
    total.classList.add("total-price");

    logo.innerHTML = `
            <i class="fa-brands fa-phoenix-squadron"></i>
            HiTech`
    
    total.innerHTML = `<p>Total: <span>${getTotal()}€</span></p>`

    header.appendChild(logo);
    header.appendChild(total);
}

function validateInput(inputElement, maxLength) {
    inputElement.value = inputElement.value
        .replace('-', '')
        .slice(0, maxLength);
}

function viewProducts() {
    const container = document.getElementById("products");
    if (products.length > 0) {
        products.forEach(product => {
            const article = document.createElement("article");
            article.classList.add("product");

            article.innerHTML = `
                <img src="${product.imgSrc}" alt>
                <div class="product-information">
                    <h1>${product.name}</h1>
                    <p>${(product.price - (product.price / 100 * 10)) * product.inCartQuantity}€</p>
                    <div class="manage-product">
                        <div class="manage-quantity">
                            <p class="quantity">quantity:</p>
                            <input
                                name="quantity"
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

function viewFooter() {
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

viewHeader();
viewProducts();
viewFooter();