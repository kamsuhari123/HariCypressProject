describe('web tables practice',()=>
{
    
    it('tables',()=>
    {
        cy.visit('https://the-internet.herokuapp.com/tables')

        // count no.of rows
        cy.get('#table1 tbody tr').should('have.length',4)

        // get value of 1st row 2nd column cell
        cy.get('#table1 tbody tr:nth-child(1) td:nth-child(2)').should('have.text','John')

        //i need 1st column all row values 
        cy.get('#table1 tbody tr:nth-child(n) td:nth-child(1)').each(($e1)=>
        {
            cy.log($e1.text())
        })

        // all column header cells
        cy.get('#table1 thead tr th').each(($e1)=>
        {
            cy.log($e1.text())
        })
        .should('have.length',6)

        // find smith row and click edit 
        cy.contains('#table1 tbody tr','smith').find('a').contains('edit').click()
    })
})