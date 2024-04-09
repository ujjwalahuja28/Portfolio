// contact-page alert message starts here

function validateForm() {
    var form = document.getElementById("contactForm");
    if (!form.checkValidity()) {
        // If the form is invalid, prevent submission and display error messages
        form.reportValidity();
        return false;
    }

    // Display a success message when the form is submitted successfully
    alert("Your message has been sent successfully.");
    return true;
}

// contact-page alert message ends here