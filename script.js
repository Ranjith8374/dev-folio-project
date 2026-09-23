const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");


form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;


    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }


    // Email validation
    const emailPattern = /.+@.+\..+/;

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    }
    else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }


    // Message validation
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Message is required.";
        isValid = false;
    }
    else if (messageInput.value.trim().length < 10) {
        messageError.textContent =
            "Message must be at least 10 characters.";
        isValid = false;
    }


    // Successful submission
    if (isValid) {

        successMessage.textContent =
            "Form submitted successfully!";

        console.log("Form submitted successfully!");

        form.reset();
    }

});