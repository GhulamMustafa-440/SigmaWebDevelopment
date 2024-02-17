// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function isValidPassword(password) {
    // Check length
    if (password.length < 8) {
        return false;
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
    }

    // Check for at least one digit
    if (!/\d/.test(password)) {
        return false;
    }

    // If all criteria are met, the password is valid
    return true;
}

// Example usage:
let password = "SecurePass123";
if (isValidPassword(password)) {
    console.log("Password is valid.");
} else {
    console.log("Password is not valid.");
}
