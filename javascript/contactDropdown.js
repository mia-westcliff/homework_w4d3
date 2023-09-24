const contactMethodSelect = document.getElementById("contactMethod");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");

function contactMethod() {
    const selectedOption = contactMethodSelect.value;
    if (selectedOption === "email") {
        emailInput.classList.remove("hidden");
        phoneInput.classList.add("hidden");
    } else if (selectedOption === "phone") {
        phoneInput.classList.remove("hidden");
        emailInput.classList.add("hidden");
    } else {
        emailInput.classList.add("hidden");
        phoneInput.classList.add("hidden");
    }
}
contactMethodSelect.addEventListener("change", contactMethod);