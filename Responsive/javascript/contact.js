document.querySelector(".contact-form form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission to process it in JavaScript

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Store the data in localStorage
    const contactData = {
        name: name,
        email: email,
        message: message
    };
    localStorage.setItem("contactData", JSON.stringify(contactData));

    // Display confirmation message
    alert("Thank you! Your message has been submitted.");

    // Log the stored data to verify
    console.log("Stored Contact Data:", JSON.parse(localStorage.getItem("contactData")));

    // Reset the form fields
    this.reset();
});
