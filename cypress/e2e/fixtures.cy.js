describe('fixtures practice',()=>
{
    // it('fixtures',()=>
    // {
    //     cy.visit('https://www.automationexercise.com/login')
    //     cy.fixture('loginData').then((data)=>
    //     {
    //         cy.get('[data-qa="login-email"]').type(data.email)
    //         cy.get('[data-qa="login-password"]').type(data.password)
    //     })
    //     cy.get('[data-qa="login-button"]').click()
    //     cy.get('.features_items .title').should('have.text','Features Items')
    // })

    it('verify logout visible',()=>
    {
        cy.visit('https://www.automationexercise.com/login')
        cy.fixture('Users').then((data)=>
        {
            cy.get('[data-qa="login-email"]').type(data.validuser.email)
            cy.get('[data-qa="login-password"]').type(data.validuser.password)
        })
        cy.get('[data-qa="login-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('contain.text','Logout')
    })

    it('verify error msg',()=>
    {
        cy.visit('https://www.automationexercise.com/login')
        cy.fixture('Users').then((data)=>
        {
            cy.get('[data-qa="login-email"]').type(data.invaliduser.email)
            cy.get('[data-qa="login-password"]').type(data.invaliduser.password)
        })
        cy.get('[data-qa="login-button"]').click()
        cy.contains('Your email or password is incorrect!').should('contain.text','incorrect')
    })
})