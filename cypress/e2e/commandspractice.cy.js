describe('commands practice',()=>
{
    it('test 1',()=>
    {
        cy.login('validuser')
        cy.logout()
        cy.url().should('include','/login')

    })

    it('test2',()=>
    {
        cy.login('invaliduser')
    })

})