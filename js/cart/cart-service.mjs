import { baseUrl } from "../variables.mjs";

export async function getItemsByCartId(cartId) {
    try {
        const response = await axios.get(`${baseUrl}/cart/${cartId}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to get cart items from the backend. Error: ${error}`);
        return [];
    }
}

export async function getTotalByCartId(cartId) {
    try {
        const response = await axios.get(`${baseUrl}/cart/${cartId}/total`);
        return response.data;
    } catch (error) {
        console.error(`Failed to get total of cart. Error: ${error}`)
    }
}

export async function addItemToCart(cartId, productId, quantity) {
    try {
        await axios.post(`${baseUrl}/cart/item/append`, {
            cart_id: cartId,
            product_id: productId,
            quantity: quantity
        });
    } catch (error) {
        throw error;
    }
}

export async function removeItemById(cartItemId) {
    try {
        await axios.delete(`${baseUrl}/cart/item/remove/${parseInt(cartItemId)}`);
    } catch (error) {
        throw error; 
    }
}

export async function updateQuantity(cartItemId, quantity) {
    try {
        await axios.put(`${baseUrl}/cart/item/quantity/update/${cartItemId}/${quantity}`);
    } catch (error) {
        throw error;
    }
}