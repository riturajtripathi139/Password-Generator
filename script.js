const passwordBox = document.getElementById("Password");
let lengthInput = document.querySelector("#chooseLength");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+=-/?>.<,~";

let lower = document.getElementById("LowerCase");
let upper = document.getElementById("UpperCase");
let num = document.getElementById("digits");
let sym = document.getElementById("symbols");

function createPassword() {
    let password = "";
    let allChars = "";

    // Build the character set based on selected checkboxes
    if (lower.checked) {
        allChars += lowerCase;
    }
    if (upper.checked) {
        allChars += upperCase;
    }
    if (num.checked) {
        allChars += number;
    }
    if (sym.checked) {
        allChars += symbol;
    }

    // Ensure that at least one character type is selected
    if (allChars === "") {
        alert("Please select at least one character type.");
        return;
    }

    // Add at least one character from each selected type
    if (lower.checked) {
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    if (upper.checked) {
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
    }
    if (num.checked) {
        password += number[Math.floor(Math.random() * number.length)];
    }
    if (sym.checked) {
        password += symbol[Math.floor(Math.random() * symbol.length)];
    }

    // Generate the rest of the password
    while (password.length < lengthInput.value) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Display the password
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}

document.querySelector("#Generate").addEventListener("click", createPassword);
document.querySelector("#copy").addEventListener("click", copyPassword);
