

describe('drag and drop practice',()=>
{
    
    it('drag and drop',()=>
    {
        cy.on('uncaught:exception',()=>false)
        cy.visit("https://demo.automationtesting.in/Static.html")
        cy.get('img#angular').drag('.dragged#droparea')
        cy.get('#droparea img').should('have.length',1)
    })

    it('trigger practice',()=>
    {
        cy.on('uncaught:exception',()=>false)
        cy.visit("https://demo.automationtesting.in/Static.html")
        cy.get('img#angular').trigger('dragstart',{button:0})
        cy.get('.dragged#droparea').trigger('dragover')
        cy.get('.dragged#droparea').trigger('drop4')
        cy.get('#droparea img').should('have.length',1)
    })


})