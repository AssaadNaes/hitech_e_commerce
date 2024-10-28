import { baseUrl } from "../variables.mjs";

export async function getAllProducts() {
    try {
        const response = await axios.get(`${baseUrl}/products`);
        return response.data;
    } catch (error) {
        console.error(`Failed to get products from the backend. Error: ${error}`);
        return [];
    }
}

export async function getByName(name) {
    try {
        const response = await axios.get(`${baseUrl}/products/${name}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to get products from the backend. Error: ${error}`);
        return [];
    }
}