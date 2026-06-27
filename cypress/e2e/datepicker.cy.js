describe('date picker practice',()=>
{
    
    it('date picker',()=>
    {
        cy.on('uncaught:exception',()=>false)
        cy.visit("https://demo.automationtesting.in/Datepicker.html")
        cy.get('input#datepicker2').type('02/05/2026{enter}').should('have.value', '02/05/2026')
    })

    it('date picker qith btns',()=>
    {
        cy.on('uncaught:exception',()=>false)
        cy.visit("https://demo.automationtesting.in/Datepicker.html")
        cy.get('input#datepicker2').click()
        // cy.get('.datepick-nav :nth-child(1)')
        // cy.get('.datepick-nav :nth-child(2)')
        // cy.get('.datepick-nav :nth-child(3)')

        cy.get('.datepick-month-year').first().select('June')
        cy.get('.datepick-month-year').last().select('2025')
        cy.get('.datepick-month').contains('td', '12').click()
    })
})