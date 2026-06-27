describe('hooks practice',()=>
{
    before(()=>
    {
        cy.visit('/login')
    })

    beforeEach(()=>
    {
        cy.clearCookies()
    })

    after(()=>
    {
         cy.log('all tests done')
    })

    afterEach(()=>
    {
        cy.screenshot({capture:"viewport"})
    }) 


    it('verify home page title',()=>
    {
        cy.visit('/')
        //cy.title().should('have.text','Automation')
        cy.get('a img').should('be.visible')
        cy.url().should('include','automationexercise.com')
    })

    it('verify login page loads',()=>
    {
        cy.visit('https://www.automationexercise.com/login')
        cy.get('.login-form').should('exist')

    })

    it('verify product page loads',()=>
    {
        cy.visit('https://www.automationexercise.com/products')
        cy.get('.features_items').should('exist')
    })



})