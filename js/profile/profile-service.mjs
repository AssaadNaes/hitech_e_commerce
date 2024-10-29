import {baseUrl} from "../variables.mjs";

export async function getAddressById(userId) {
    try {
        const respone = await axios.get(`${baseUrl}/userinfo/${userId}`);
        return respone.data;
    } catch (error) {
        console.error(`Failed to get address from the server. Error: ${error}`);
        return [];
    }
}

export async function setAddress(userId, country, city, plz, street, phoneNumber) {
    try {
        await axios.post(`${baseUrl}/userinfo/set`, {
            user_id: userId,
            country: country,
            city: city,
            plz: plz,
            street: street,
            phone_number: phoneNumber
        });
    } catch (error) {
        console.error(`Failed to set user address. Error: ${error}`);
    }   
}