import { deleteAccount } from "../auth/user-service.mjs";

const deleteAccountButton = document.querySelector(".delete-account");

deleteAccountButton?.addEventListener("click", () => {
    const modal = document.querySelector("#modal");
    const cancleButton = document.querySelector(".cancle");
    const submitDeleteButton = document.querySelector(".submit-delete")

    modal.showModal();
    cancleButton.addEventListener("click", () => {
        modal.close();
    });

    submitDeleteButton.addEventListener("click", () => {
        const form = document.getElementById("deletion-form");
        const username = document.getElementById("username-input").value;
        const password = document.getElementById("password-input").value;

        form?.addEventListener("submit", async event => {
            event.preventDefault();

            try {
                console.log(username, password);
                
                deleteAccount(username, password);
            } catch (error) {
                // you were here
            }
        })
    })
});