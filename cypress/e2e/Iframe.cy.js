describe('Iframe practice',()=>
{
    
    it('iframe',()=>
    {
        cy.on('uncaught:exception', () => false)
        cy.visit('https://demo.automationtesting.in/Frames.html')
        cy.frameLoaded('#singleframe')
        cy.iframe('#singleframe').find('.container .col-xs-6 input').type('HI')
        cy.iframe('#singleframe').find('.container .col-xs-6 input').should('have.value','HI')
    })

    it('Nestd iframe',()=>
    {
        cy.on('uncaught:exception', () => false)
        cy.visit('https://demo.automationtesting.in/Frames.html')
        cy.get(':nth-child(2) > .analystic')
        cy.frameLoaded('[src="MultipleFrames.html"]')
        cy.iframe('[src="MultipleFrames.html"]').find('[src="SingleFrame.html"]')
        .then(($Innerfrme)=>{
            cy.wrap($Innerfrme).iframe()
            .find('.container .col-xs-6 input').type('HI')
            .find('.container .col-xs-6 input').should('have.value','HI')
        })
        
    })

   
})