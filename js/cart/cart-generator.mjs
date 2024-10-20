import { getItemsByCartId } from "./cart-service.mjs";

const products = await getItemsByCartId(1)

console.log(products);


function validateInput(inputElement, maxLength) {
    inputElement.value = inputElement.value
        .replace("-", "")
        .slice(0, maxLength);
}

function setQuantity(id, value) {
    if (value === "0" || value === "") {
        value = 1;
    }

    generateHeader();
}


function headerHTML(totalPrice) {
    return `<div class="logo">
                <i class="fa-brands fa-phoenix-squadron"></i>
                HiTech
            </div>
            <div class="total-price">
                <p>Total: <span>${totalPrice}€</span></p>
            </div>`;
}

function productHTML({ id, name, image_url, price, quantity }) {
    return `<article class="product">
                <img src="${image_url}" alt>
                <div class="product-information">
                    <h1>${name}</h1>
                    <p class="price">${price * quantity}€</p>
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

function footerHTML() {
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
    
    header.innerHTML = headerHTML(totalPrice);
}

function generateCart() {
    const container = document.getElementById("products");
    const footer = document.querySelector("footer");

    if (!container || !footer) {
        console.error("One or more requiered elements not found!");
    }

    generateHeader(1000);

    container.innerHTML = "";
    if (products.length > 0) {
        products.forEach(product => {
            const articleHTML = productHTML(product);
            container.insertAdjacentHTML("beforeend", articleHTML)
        });

        footer.innerHTML = footerHTML();
    } else {
        container.innerHTML = "<h1>Your cart is empty...</h1>";
        footer.innerHTML = ""; 
    }
}

document.addEventListener("DOMContentLoaded", generateCart());