import LoginPage from '../pages/LoginPage'
import HomePage  from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'

describe('pom practice',()=>
{
    beforeEach(()=>
    {
        cy.fixture('Users').then((data)=>
        {
            LoginPage.visit()
            LoginPage.enterEmail(data.validUser.email)
            LoginPage.enterPassword(data.validUser.password)
            LoginPage.clickLogin()
            LoginPage.verifySuccessMessage()
        })

    })
    // it('valid login',()=>
    // {

    //     cy.fixture('Users').then((data)=>
    //     {
    //         LoginPage.visit()
    //         LoginPage.enterEmail(data.validUser.email)
    //         LoginPage.enterPassword(data.validUser.password)
    //         LoginPage.clickLogin()
    //         LoginPage.verifySuccessMessage()
    //     })
    // })

    // it('invalid login',()=>
    // {
    //     cy.fixture('Users').then((data)=>
    //     {
    //         LoginPage.visit()
    //         LoginPage.enterEmail(data.invalidUser.email)
    //         LoginPage.enterPassword(data.invalidUser.password)
    //         LoginPage.clickLogin()
    //         LoginPage.verifyErrormessage()
    //     })
    // })

    it('verify its lgeedin or not',()=>
    {
        HomePage.verifyHomeLogo()
        HomePage.clickLogout()
    })

    it('add and verify product added',()=>
    {
        HomePage.navigateToProduct()
        HomePage.verifyProductAdded()
    })

    it('verify products of search in product page',()=>
    {
        cy.visit('/products')
        ProductPage.enterProductName('top')
        ProductPage.clickSubmitSearch()
        ProductPage.verifyProducts('top')
    })

})