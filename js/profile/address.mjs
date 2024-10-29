import { getAddressById, setAddress } from "./profile-service.mjs";

async function fillInputs() {
    try {
        const data = await getAddressById(1);
        
        document.getElementById("country-input").value = data.country || "";
        document.getElementById("city-input").value = data.city || "";
        document.getElementById("plz-input").value = data.plz !== 0 ? data.plz : "";
        document.getElementById("street-input").value = data.street || "";
        document.getElementById("phone-input").value = data.phone_number || "";
        
    } catch (error) {
        console.error("Error fetching address data:", error);
    }
}

function getInputValues() {
    return {
        country: document.getElementById("country-input").value,
        city: document.getElementById("city-input").value,
        plz: document.getElementById("plz-input").value,
        street: document.getElementById("street-input").value,
        phone: document.getElementById("phone-input").value,
    };
}

async function handleFormSubmit(event) {
    event.preventDefault();
    
    const userId = 1;
    const values = getInputValues();
    
    try {
        await setAddress(userId, values.country, values.city, values.plz, values.street, values.phone);
        console.log("Address updated successfully!");
    } catch (error) {
        console.error("Error updating address:", error);
    }
}

function initializeAddressForm() {
    const form = document.getElementById("user-address");
    
    form?.addEventListener("submit", handleFormSubmit);
    fillInputs();
}

document.addEventListener("DOMContentLoaded", initializeAddressForm);
