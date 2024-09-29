import axios from 'axios';
const baseUrl = "http://localhost:8080/api"; // Ensure the URL is correct

export function login(email, password) {
    axios.get(baseUrl + "/user/login", {
        data: {
            "email": email,
            "password": password
        }
    })
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error("could not login user: " + error);
    })
}

export function register(username, email, password) {
    axios.post(baseUrl + "/user/register", {
        data: {
            "username": username,
            "email": email,
            "password": password
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        return response.status; 
    })
    .catch(error => {
        console.error("coulde not register user: " + error);
    })
}
