import { getAllProducts } from "../services/products-service.mjs";

const products = await getAllProducts();

function createProductHTML({ image_url, name, description, price }) {
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
                <button class="default">Add to cart</button>
            </div>
        </article>
    `;
}

function generateProducts() {
    const container = document.getElementById("products");
    if (!container) {
        console.error("Container element not found");
        return;
    }

    let len = products.length;
    if(len) {
        products.forEach(product => {
            const articleHTML = createProductHTML(product);
            container.insertAdjacentHTML('beforeend', articleHTML);
        });
    }
}

generateProducts();
