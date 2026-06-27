describe('File Upload practice',()=>
{
    
    it('File Upload',()=>
    {
        cy.on('uncaught:exception', () => false)
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile('cypress/fixtures/sample.pdf',{action:"drag-drop"})
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').should('contain.text','sample')
    })
        
})
