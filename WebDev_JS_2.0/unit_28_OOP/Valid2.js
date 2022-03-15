class Valid2 extends Valid {
    constructor(email, password, isValid, emailError = '', passwordError = '') {
        super(email, password, isValid);
        this.emailError = emailError;
        this.passwordError = passwordError;
    }
    validate() {
        if (this.password.length > 6 && this.email.length !== 0) this.isValid = true; 
        else this.isValid = false;
        if (this.isValid === false) {
            this.emailError = 'email empty';
            this.passwordError = 'min length 6';
        }
    }
}