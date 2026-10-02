class LoginPage {
    
    selectorsList() {
        const selectorsList = {
            loginButton: "li > .undefined",
            emailField: "[data-cy='email']",
            passwordField: "[data-cy='password']",
            // signInButton: ".w-\[380px\] > .flex > .undefined",
            wrongEmailError: " ",
            wrongError: " "
        }
        return selectorsList
    }

    accessHomePage() {
        cy.visit('http://localhost:3000/heroes')
    }

    login(email, password) {
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.contains('Sign in').click()
    }
}

export default LoginPage