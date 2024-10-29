import { getInformationById, setInforamtion } from "./profile-service.mjs"

const form = document.querySelector(".user-info");

function getValues() {
    return {
        country: document.getElementById("country-input").value,
        city: document.getElementById("city-input").value,
        plz: document.getElementById("plz-input").value,
        street: document.getElementById("street-input").value,
        phone: document.getElementById("phone-input").value
    }
}

async function fillInputs() {
    const data = await getInformationById(1);
    const values = getValues();
    
    values.country = data.country;
    values.city = data.city;
    if (data.plz != 0) {
        values.plz = data.plz;
    }
    values.street = data.street;
    values.phone = data.phone_number;
}

form.addEventListener("submit", async event => {
    event.preventDefault();

    const userId = 1;

    const values = getValues();
    setInforamtion(userId, values.country, values.city, values.plz, values.street, values.phone)
})


fillInputs();