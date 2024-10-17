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

export async function insertItemToCart(cartId, productId, quantity) {
    try {
        const response = await axios({
            method: 'post',
            url: `${baseUrl}/cart/item/append`,
            data: {
                cart_id: cartId,
                product_id: productId,
                quantity: quantity
            }
        });
        return response
    } catch (error) {
        throw error;
    }
}