const baseUrl = "http://localhost:8080/products";

export async function getAllProducts() {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        throw error;
    }
}