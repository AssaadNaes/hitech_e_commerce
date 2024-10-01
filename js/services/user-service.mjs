import axios from "axios";

const baseUrl = "http://localhost:8080/user";

export async function login(email, password) {
    try {
        const response = await axios({
            method: 'post',
            url: `${baseUrl}/login`,
            data: {
                email: email,
                password: password
            }
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network error');
    }
}

// Use example
// login("as@gmail.com", "apassword")
//     .then(res => console.log(res))
//     .catch(err => console.error(err));


export function register(username, email, password){
    try {
        axios({
            method: 'post',
            url: `${baseUrl}/register`,
            data: {
                username: username,
                email: email,
                password: password
            }
        });
    } catch(error) {
        throw error.response ? error.response.data : new Error('Network error');
    }
}
