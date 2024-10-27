import { getAllProducts } from "./products-service.mjs";
import { addItemToCart } from "../cart/cart-service.mjs"

const products = await getAllProducts();

function getProductHTML({ product_id, image_url, name, description, price }) {
    return `
        <article class="product">
            <div class="content">
                <img src="${image_url}" alt="${name}-image">
                <div class="product-description">
                    <h1>${name}</h1>
                    <p>${description}</p>
                    <p class="price">${price}€</p>
                </div>
            </div>
            <div class="button-container">
                <div class="cart-load-container">
                    <i class="fa-solid fa-cart-arrow-down cart-load"></i>
                </div>
                <button product-id=${product_id} class="default add-to-cart-button">Add to cart</button>
            </div>
        </article>
    `;
}

async function addToCartHandler(event) {
    const productID = event.target.getAttribute('product-id');

    if (localStorage.getItem("isLoggedIn") === "true") {
        try {
            await addItemToCart(1, productID, 1);
            
            const cartLoadIcon = event.target.parentElement.querySelector(".cart-load");
            cartLoadIcon.style.display = "inline";
            setTimeout(() => {
                cartLoadIcon.style.display = "none";
            }, 2000);

            console.log(`Added product with ID ${productID} to cart`);
        } catch (error){
            if (error.response && error.response.status === 409) {
                const modal = document.querySelector("#modal");
                const closeModalButton = document.querySelector(".close-modal");

                modal.showModal();
                closeModalButton.addEventListener("click", () => {
                    modal.close();
                })
                return;
            } else {
                console.error(`Failed to add product to cart: ${error.message}`);
            }
        }
    } else {
        window.location.href = "../../pages/login.html";
    }
}

function generateProducts() {
    const container = document.getElementById("products");
    if (!container) {
        console.error("Container element not found");
        return;
    }
    else if(products.length > 0) {
        products.forEach(product => {
            const productHTML = getProductHTML(product);
            container.insertAdjacentHTML('beforeend', productHTML);
        });

        const buttons = document.querySelectorAll(".add-to-cart-button");
        buttons.forEach(button => {
            button.addEventListener("click", addToCartHandler);
        })
    }
}

generateProducts();
