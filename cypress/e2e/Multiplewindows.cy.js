describe('multiple windows practice',()=>
{
    
    it('multiple windows',()=>
    {
        cy.on('uncaught:exception', () => false)
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example a').invoke('attr','href').then((href)=>
    {
        cy.visit('https://the-internet.herokuapp.com' + href)
    })
    })
        cy.get('.example a').invoke('removeAttr','target').click()
        cy.get('.example h3').should('have.text','New Window')
})
 

cy.window().then((win)=>
{
    cy.stub(win,'open').as('windowOpen')
})
cy.get('.example a').click()