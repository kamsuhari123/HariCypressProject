class LoginPage
{
    visit()
    {
        cy.visit('/login')
    }

    emailField()
    {
        return cy.get('[data-qa="login-email"]')
    }

    passwordField()
    {
        return cy.get('[data-qa="login-password"]')
    }

    loginButton()
    {
        return cy.get('[data-qa="login-button"]')
    }

    enterEmail(email)
    {
        this.emailField().clear().type(email)
    }

    enterPassword(pass)
    {
        this.passwordField().clear().type(pass)
    }

    clickLogin()
    {
        this.loginButton().click()
    }

    verifySuccessMessage()
    {
        cy.url().should('not.include','/login')
    }

    verifyErrormessage()
    {
        cy.get('.login-form form').find('p').should('contain.text','incorrect')

    }
}

export default new LoginPage()