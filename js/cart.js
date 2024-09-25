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

function setQuantity(inputElement) {
    const product = products.find(product => product.id === parseInt(inputElement.id));
    
    if (product) {
        product.quantityInCart = inputElement.value;
    }
    
    // regenerates the header in order for the total price to update
    generateHeader(calculateTotalPrice());
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
                                onchange="setQuantity(this)"
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


function generateHeader(totalPrice){
    const header = document.querySelector("header");

    if(!header) {
        console.error("Header element not found!");
        return;
    }

    header.innerHTML = createHeaderHTML(totalPrice);
}

function generateCart(products) {
    const footer = document.querySelector("footer");
    const container = document.getElementById("products");

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
    } else {
        container.innerHTML = "<h1>Your cart is empty...</h1>";

    }

    footer.innerHTML = createFooterHTML();
}

generateCart(products);