function validateForm() {
    // 1. Check Emails
    if (!checkEmails()) {
        return false; 
    }

    // 2. Check Date
    if (!checkDate()) {
        return false;
    }

    // 3. Check Required Fields
    if (!checkRequiredFields()) {
        return false;
    }

    alert("Form submitted successfully!");
    return true; 
} // <--- Added missing closing brace

function checkEmails() {
    let email = document.getElementById("email").value;
    let confirmEmail = document.getElementById("confirm-email").value;

    if (email === "" || confirmEmail === "") {
        alert("Please fill in both email fields.");
        return false;
    }

    if (email !== confirmEmail) {
        alert("Emails do not match.");
        return false;
    }

    return true;
}

function checkDate() {
    let dateInput = document.getElementById("date").value;
    if (dateInput === "") {
        alert("Please select a project date.");
        return false;
    }

    let selectedDate = new Date(dateInput);
    let today = new Date();
    today.setHours(0, 0, 0, 0); // Ignore time for accurate comparison

    if (selectedDate < today) {
        alert("Project date cannot be in the past.");
        return false;
    }

    return true;
}

function checkRequiredFields() {
    let fname = document.getElementById("fname").value;
    let phone = document.getElementById("phone").value;
    let desc = document.getElementById("description").value;

    if (fname === "" || phone === "" || desc === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    let contactMethods = document.getElementsByName("contact");
    let contactSelected = false;
    for (let i = 0; i < contactMethods.length; i++) {
        if (contactMethods[i].checked) {
            contactSelected = true;
            break;
        }
    }
    
    if (!contactSelected) {
        alert("Please select a preferred contact method.");
        return false;
    }

    return true;
}