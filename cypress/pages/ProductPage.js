class ProductPage
{

    searchProduct()
    {
        return cy.get('#search_product')
    }

    submitSearch()
    {
        return cy.get('#submit_search')
    }


    enterProductName(product)
    {
        this.searchProduct().type(product)
    }

    clickSubmitSearch()
    {
        this.submitSearch().click()
    }


    verifyProducts(productName)
    {
        cy.get('.productinfo p').each(($e1)=>
        {
            const name=$e1.text().toLowerCase()
            expect(name).to.include(productName.toLowerCase())
        })
    }
}

export default new ProductPage()