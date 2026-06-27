describe('Alerts practice',()=>
{
    it('alerts',()=>
    {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:alert',(text)=>
        {
            expect(text).to.include('Alert')
            
        })
        cy.get(' .example :nth-child(1) > button').click()
        cy.get('#result').should('contain.text','You successfully clicked an alert')
    })

    it('confirm',()=>
    {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm',()=> false)
        cy.get('.example :nth-child(2) > button').click()
        cy.get('#result').should('contain.text','Cancel')


    })

    it('prompt',()=>
    {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm',()=> false)
        cy.window().then((win)=>
        {
            cy.stub(win,'prompt').returns('HAri')
        })
        cy.get('.example ul :nth-child(3) > button').click()
        cy.get('#result').should('contain.text','HAri')


    })
})