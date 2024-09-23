const products = []; 

function viewProducts() {
    const container = document.getElementById("products");

    if (products.length !== 0){

    } else {
        container.appendChild(
            document.createElement("h1").innerHTML = "your cart is empty..."
        ); 
    }

}

viewProducts();