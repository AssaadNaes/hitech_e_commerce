import { baseUrl } from "../variables.mjs";

export async function login(username, password) {
    try {
        const response = await axios({
            method: 'post',
            url: `${baseUrl}/user/login`,
            data: {
                username: username,
                password: password
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function register(username, email, password) {
    try {
        const response = await axios.post(`${baseUrl}/user/register`,{
            username: username,
            email: email,
            password: password
        });
        return response;
    } catch (error) {
        throw error;
    }
}

export async function deleteAccount(userName, password) {
    try {
        const response = await axios.post(`${baseUrl}/user/delete`, {
            username: userName,
            password: password
        });
        return response;
    } catch (error) {
        throw error;
    }
}
