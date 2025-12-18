function passwordValidator(password) {
    // Declare previous password array
    const previousPassword = ["Abc123!", "abC098@"]
    return password.length < 5 ? false 
    : !(/[A-Z]/.test(password)) ? false 
    : !(/[a-z]/.test(password)) ? false 
    : !(/[0-9]/.test(password)) ? false 
    : !(/[^a-zA-Z\d\s:]/.test(password)) ? false 
    : previousPassword.includes(password) ? false : true
}

module.exports = passwordValidator;