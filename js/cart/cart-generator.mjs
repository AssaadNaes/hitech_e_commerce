import { getItemsByCartId, getTotalByCartId, removeItemById, updateQuantity } from "./cart-service.mjs";

async function getTotal(cartId) {
    const total = await getTotalByCartId(cartId);
    return total;
}

function validateInput(inputElement) {
    inputElement.value = inputElement.value.replace("-", "").slice(0, 2);
}

async function setQuatntiy(inputElement) {
    if (inputElement.value <= "0" || inputElement.value === "") {
        inputElement.value = "1"; 
        return;
    }

    await updateQuantity(inputElement.id, inputElement.value);
}

function quantityEventListeners() {
    const quantityInputs = document.querySelectorAll('.quantity-input');
    quantityInputs.forEach(input => {
        input.addEventListener('input', event => validateInput(event.target));
        input.addEventListener('change',async event => {
            await setQuatntiy(event.target);
            generateHeader();
        });
    });
}

function removeButonEventListener() {
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach(button => {
        button.addEventListener('click', event => {
            const cartItemId = event.currentTarget.getAttribute('item-id');
            const productElement = event.currentTarget.closest('.product');

            productElement.classList.add('fade-out');

            productElement.addEventListener('animationend', async () => {
                await removeItemById(cartItemId);
                generateHeader();
                generateProducts();
            });
        });
    });
}

async function generateHeader() {
    const header = document.querySelector("header");
    const html = `<div class="logo">
                <i class="fa-brands fa-phoenix-squadron"></i>
                HiTech
            </div>
            <div class="total-price">
                <p>Total: <span>${await getTotal(1)}€</span></p>
            </div>`;

    if (header) {
        header.innerHTML = html;
    }
}

function getProductHtml({ cart_item_id, name, image_url, price, quantity }) {
    return `<article class="product">
        <img src="${image_url}" alt="${name}">
        <div class="product-information">
            <h1>${name}</h1>
            <p class="price">${price}€</p>
            <div class="manage-product">
                <div class="manage-quantity">
                    <p class="quantity">Quantity:</p>
                    <input
                        id="${cart_item_id}"
                        class="quantity-input"
                        value="${quantity}"
                        type="number"/>
                </div>
                <button class="default remove-button" item-id="${cart_item_id}">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    </article>`;
}

function getPaymentHtml() {
    return `<p>checkout with</p>
        <div class="payment-methods">
            <button><i class="fa-brands fa-cc-paypal"></i></button>
        </div>`;
}

async function generateProducts() {
    const productsContainer = document.getElementById("products");
    const paymentContainer = document.getElementById("payment");

    productsContainer.innerHTML = "";
    paymentContainer.innerHTML = "";
    const products = await getItemsByCartId(1);
    if (products.length > 0) {
        products.forEach(product => {
            const html = getProductHtml(product);
            productsContainer.insertAdjacentHTML("beforeend", html);
        });
        paymentContainer.innerHTML = getPaymentHtml();
    } else {
        productsContainer.innerHTML = "<h1>Your cart is empty...</h1>";
        paymentContainer.innerHTML = "";
    }

    quantityEventListeners();
    removeButonEventListener();
}

document.addEventListener("DOMContentLoaded", () => {
    generateHeader();
    generateProducts();
});
