const products = [
    {
        id: 0,
        name: "NONIDEA GeForce RTX 4080 SUPER - 16GB",
        imgSrc: "../images/products/gpu.jpeg",
        price: 1500,
        quantityInCart: "1"
    },
    {
        id: 1,
        name: "Mouse + Keyboard + Mic + Headset",
        imgSrc: "../images/products/mouse-keyboard-mic-headset.jpeg",
        price: 1250,
        quantityInCart: "1"
    }
];

function validateInput(inputElement, maxLength) {
    inputElement.value = inputElement.value
    .replace("-", "")
    .slice(0, maxLength)
}

function createHeaderHTML(/*Total price*/) {
    return `<div class="logo">
                <i class="fa-brands fa-phoenix-squadron"></i>
                HiTech
            </div>
            <div class="total-price">
                <p>Total: <span>25€</span></p>
            </div>`;
}

function createProductHTML({ id, name, imgSrc, price, quantityInCart }) {
    return `<article class="product">
                <img src="${imgSrc}" alt>
                <div class="product-information">
                    <h1>${name}</h1>
                    <p>${price * quantityInCart}€</p>
                    <div class="manage-product">
                        <div class="manage-quantity">
                            <p class="quantity">quantity:</p>
                            <input
                                id="${id}"
                                value="${quantityInCart}"
                                oninput="validateInput(this, this.maxLength)"
                                min="0"
                                type="number"
                                maxlength="2" />
                        </div>
                        <button class="remove default"><i class="fa-solid fa-trash-can"></i></button>
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

function generateCart(products){
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const container = document.getElementById("products");

    if (!header || !container || !footer){
        console.error("One or more requiered elements not found");
    }

    header.innerHTML = createHeaderHTML(/*Total price*/);

    container.innerHTML = "";
    if (products.length > 0) {
        products.forEach(product => {
            const articleHTML = createProductHTML(product);
            container.insertAdjacentHTML("beforeend", articleHTML)
        });
    } else {
        container.innerHTML = "<h1>Your cart is empty...</h1>";

    }

    footer.innerHTML = createFooterHTML();
}

generateCart(products);