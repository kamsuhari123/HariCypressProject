class HomePage
{
    logoutButton()
    {
        return cy.get('.shop-menu .nav :nth-child(4) a')
    }

    clickLogout()
    {
        this.logoutButton().click()
    }

    homeLogo()
    {
        return cy.get('.col-sm-4 .logo a')
    }

    verifyHomeLogo()
    {
        this.homeLogo().should('be.visible')
    }

    navigateToProduct()
    {
        cy.get('.features_items .col-sm-4').each(($e1)=>
        {
            const productName=$e1.text()
            if(productName.includes("Blue Top"))
            {
                cy.wrap($e1).find('.productinfo a').click()
            }
        })
    }

    verifyProductAdded()
    {
        cy.get('.modal-content .modal-header h4').should('contain.text','Added')
    }

    
}

export default new HomePage()