
import LoginPage from "../pages/LoginPage"

describe('env practice',()=>
{
    it('env',()=>
    {
        const env=Cypress.env('activeEnv')
        LoginPage.visit()
        LoginPage.enterEmail(Cypress.env(env).email)
        LoginPage.enterPassword(Cypress.env(env).password)
        LoginPage.clickLogin()
        LoginPage.verifySuccessMessage()
    })
})