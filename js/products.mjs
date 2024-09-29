const products = [
    {
        id: 1,
        imgSrc: "../images/products/gpu.jpeg",
        name: "NVIDIA GeForce RTX 4080 SUPER - 16GB",
        description: "Ultra x pro max 200 GB GPU",
        price: 1500,
        quantity: 10
    },
    {
        id: 2,
        imgSrc: "../images/products/mouse-keyboard-mic-headset.jpeg",
        name: "Mouse + Keyboard + Mic + Headset",
        description: "Complete gaming kit from the most famous and best brands in the world",
        price: 1250,
        quantity: 25
    },
    {
        id: 3,
        imgSrc: "../images/products/moi-motherboard.jpg",
        name: "MSI Motherboard",
        description: "Ultra x pro max 200 GB GPU",
        price: 2000,
        quantity: 10
    }
];

function createProductHTML({ imgSrc, name, description, price }) {
    return `
        <article class="product">
            <div class="content">
                <img src="${imgSrc}" alt="${name}-image">
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

    products.forEach(product => {
        const articleHTML = createProductHTML(product);
        container.insertAdjacentHTML('beforeend', articleHTML);
    });
}

document.addEventListener("DOMContentLoaded", generateProducts);
