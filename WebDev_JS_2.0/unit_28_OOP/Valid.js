class Valid {
    constructor(email, password, isValid = false) {
        this.email = email;
        this.password = password;
        this.isValid = isValid;
    }
    validate() {
        if (this.password.length > 6) this.isValid = true; 
        else this.isValid = false;
    }
}
