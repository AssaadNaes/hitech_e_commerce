const products = [
    {
        id: 1,
        imgSrc: "../images/products/gpu.jpeg",
        name: "GPU",
        description: "Ultra x pro max 200 GB GPU",
        price: 1500,
        quantity: "10"
    },
    {
        id: 2,
        imgSrc: "../images/products/mouse-keyboard-mic-headset.jpeg",
        name: "Mouse + Keyboard + Mic + Headset",
        description: "Complete gaming kit from the most famous and best brands in the world",
        price: 1250,
        quantity: "25"
    },

    {
        id: 3,
        imgSrc: "../images/products/moi-motherboard.jpg",
        name: "MOI Motherboard",
        description: "Ultra x pro max 200 GB GPU",
        price: 2000,
        quantity: "10"
    }
];

function generateProducts() {
    const container = document.getElementById("products");

    products.forEach(product => {
        const article = document.createElement("article");
        article.classList.add("product");

        article.innerHTML = `
          <div class="content">
              <img src="${product.imgSrc}" alt="${product.name}-image">
              <div class="product-description">
                  <h1>${product.name}</h1>
                  <p>${product.description}</p>
                  <p class="price"><s>${product.price}</s> <span style="color:red;">${(product.price - (product.price / 100 * 10))}€</span></p>
              </div>
          </div>
          <div class="button-container">
              <button class="default">Add to cart</button>
          </div>
        `;

        container.appendChild(article);
    });
}

generateProducts();

