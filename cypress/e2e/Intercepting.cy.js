it('Intercept GET request', () => {

  // Setup intercept!!
  cy.intercept('GET',
    'https://jsonplaceholder.typicode.com/users',
    {
      statusCode: 200,
      body: [
        { id: 1, name: 'Fake Hari' }
      ]
    }
  ).as('getUsers')

  // Visit page — triggers API call!!
  cy.visit('https://jsonplaceholder.typicode.com')

  // Wait for intercept!!
  cy.wait('@getUsers')
    .then((interception) => {
      expect(interception.response.statusCode)
        .to.equal(200)
      expect(interception.response.body[0].name)
        .to.equal('Fake Hari')
      cy.log(JSON.stringify(
        interception.response.body))
    })
})