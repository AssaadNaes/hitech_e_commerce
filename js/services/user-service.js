import axios from 'axios';
const baseUrl = "http://localhost:8080/api"; // Ensure the URL is correct

function login() {
    axios({
        method: 'get',
        url: baseUrl + "/user/login",
        headers: {},
        data: {
            "email": "a@gmail.com",
            "password": "apassword"
        }
    }).then(response => {
        console.log(response.data); // Accessing response data
    }).catch(error => {
        console.error('There was an error!', error);
    });
}

login();
