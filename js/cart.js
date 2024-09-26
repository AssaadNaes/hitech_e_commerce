const products = [
    {
        id: 0,
        name: "NONIDEA GeForce RTX 4080 SUPER - 16GB",
        imgSrc: "../images/products/gpu.jpeg",
        price: 1500,
        quantityInCart: 1
    },
    {
        id: 1,
        name: "Mouse + Keyboard + Mic + Headset",
        imgSrc: "../images/products/mouse-keyboard-mic-headset.jpeg",
        price: 1250,
        quantityInCart: 1
    }
];

function validateInput(inputElement, maxLength) {
    inputElement.value = inputElement.value
        .replace("-", "")
        .slice(0, maxLength);
}

function calculateTotalPrice() {
    return products.reduce((total, product) => total + product.price * product.quantityInCart, 0).toFixed(2);
}

function setQuantity(id, value) {
    if (value === "0" || value === "") {
        value = 1;
    }

    const product = products.find(product => product.id === Number(id));
    
    if (product) {
        product.quantityInCart = parseInt(value);
    }

    // regenerates the header in order for the total price to update
    generateHeader(calculateTotalPrice());
}

function removeItem(id) {
    const index = products.findIndex(product => product.id === Number(id));

    if (index !== -1) {
        products.splice(index, 1);
        generateCart();
    } else {
        console.error(`Product with id ${id} not found.`);
    }
}

function createHeaderHTML(totalPrice) {
    return `<div class="logo">
                <i class="fa-brands fa-phoenix-squadron"></i>
                HiTech
            </div>
            <div class="total-price">
                <p>Total: <span>${totalPrice}€</span></p>
            </div>`;
}

function createProductHTML({ id, name, imgSrc, price, quantityInCart }) {
    return `<article class="product">
                <img src="${imgSrc}" alt>
                <div class="product-information">
                    <h1>${name}</h1>
                    <p class="price">${price * quantityInCart}€</p>
                    <div class="manage-product">
                        <div class="manage-quantity">
                            <p class="quantity">quantity:</p>
                            <input
                                id="${id}"
                                value="1"
                                oninput="validateInput(this, this.maxLength)"
                                onchange="setQuantity(this.id, this.value)"
                                min="0"
                                type="number"
                                maxlength="2" />
                        </div>
                        <button id="${id}" class="remove default" onclick="removeItem(this.id)"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
            </article>`;
}

function createFooterHTML() {
    return `<p>checkout with</p>
            <div class="payment-methods">
                <button><i class="fa-brands fa-cc-paypal"></i></button>
                <button><i class="fa-brands fa-cc-mastercard"></i></button>
                <button><i class="fa-brands fa-google-pay"></i></i></button>
            </div>`;
}

function generateHeader(totalPrice) {
    const header = document.querySelector("header");

    if (!header) {
        console.error("Header element not found!");
        return;
    }

    header.innerHTML = createHeaderHTML(totalPrice);
}

function generateCart() {
    const container = document.getElementById("products");
    const footer = document.querySelector("footer");

    if (!container || !footer) {
        console.error("One or more requiered elements not found");
    }

    generateHeader(calculateTotalPrice());

    container.innerHTML = "";
    if (products.length > 0) {
        products.forEach(product => {
            const articleHTML = createProductHTML(product);
            container.insertAdjacentHTML("beforeend", articleHTML)
        });

        footer.innerHTML = createFooterHTML();
    } else {
        container.innerHTML = "<h1>Your cart is empty...</h1>";
        footer.innerHTML = ""; 
    }
}

document.addEventListener("DOMContentLoaded", generateCart);