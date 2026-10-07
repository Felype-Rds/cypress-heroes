class LoginPage {
    
    selectorsList() {
        const selectorsList = {
            loginButton: "li > .undefined",
            emailField: "[data-cy='email']",
            passwordField: "[data-cy='password']",
            signInButton: "[novalidate='']",
            wrongEmailError: ".text-red-500",
            wrongError: "[novalidate='']"
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
        cy.get(this.selectorsList().signInButton).contains('Sign in').click()
        // cy.contains('Sign in').click()
    }

    wrongEmailError() {
        cy.get(this.selectorsList().wrongEmailError).contains('Email is not valid').should('be.visible')
    }

    wrongError() {
        cy.get(this.selectorsList().wrongError).contains('Invalid email or password').should('be.visible')
    }

}

export default LoginPage