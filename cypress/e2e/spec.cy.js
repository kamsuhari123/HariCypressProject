describe('My Login Tests',()=>
{
//   it('First Test Case',()=>
//   {
//     cy.visit('/')
  
//   })
  
//   it('my second test',()=>
// {
//   cy.visit('/login')
//   cy.get('[data-qa="login-email"]').should('exist')
//   cy.get('[data-qa="login-email"]').type("mom@gmail.com")
//   cy.get('[data-qa="login-email"]').clear()
//   cy.get('[data-qa="login-email"]').should('have.value','mom@gmail.com')
//   cy.get('[data-qa="login-password"]').type('mom@123')
//   cy.get('.login-form').contains('button', 'Login').should('be.enabled')
//   cy.get('.login-form').contains('button', 'Login').click()
//   cy.url().should('not.include','/login')
//   cy.contains('Logout').should('be.visible')
//   cy.get('.carousel-inner :nth-child(2) h1 span').should('contain.text','Auto')
  
// })

// it('my second test',()=>
// {
//   cy.visit('/')
//   cy.get('.shop-menu.pull-right .nav :nth-child(4) a').click()
//   cy.screenshot('login-page')
//   cy.get('[data-qa="signup-name"]').type('madam')
//   cy.get('[data-qa="signup-email"]').type('madam@gmail.com')
//   cy.screenshot('login-details-filled',{
//     capture: 'fullPage'
//   })
//   cy.screenshot('login-details-filled',{
//     capture: 'viewport'
//   })
//   cy.get('[data-qa="signup-button"]').click()
//   cy.get("input#id_gender1").check()
//   cy.get('input[type="checkbox"]').check('1')
//   cy.get('#days').select('2')
//   cy.get('#days').should('have.value','2')
//   cy.get('#months').select(3)
//   cy.get('#years').select('2020')
//   cy.get('#susbscribe_email').scrollIntoView().should('be.visible')
//   cy.get('#susbscribe_email').type('madam@gmail.com').should('have.value','madam@gmail.com')
//   cy.scrollTo('top')
//   cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
//   cy.get('.product-image-wrapper').first().trigger('mouseover')
//   cy.go('forward')
//   cy.go('forward')
//   cy.go('back')
//   cy.url().should('include','product_details')
// })

// it('My third',()=>
// {
//   cy.visit('/login')
//   cy.get('[data-qa="signup-name"]').siblings().should('have.length',4)
//   cy.get('[data-qa="signup-name"]').parent().find('input').should('have.length',4)
//   cy.get('.login-form').children().first().should('have.length','1')
//   cy.get('.login-form').find('input').should('have.length','3')
//   cy.get('.login-form').find('button').should('be.visible')
// })


// it('each practice',()=>
// {
//   cy.visit('/products')
//   cy.get('.productinfo').each(($e1)=>
//   {
//   const productName=$e1.find('p').text()
//   cy.log(productName)
//   cy.wrap($e1).find('img').should('be.visible')
//   })
// })


it('practice 4',()=>
{
  cy.visit('/',{
    timeout:11000
  })
  cy.get('.productinfo').each(($e1)=>
  {
    const Name=$e1.find('p').filter(':contains("Top")').text()
    cy.log(Name)
    cy.wrap($e1).should('exist')
  })
})

})  