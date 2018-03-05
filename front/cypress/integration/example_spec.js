describe('My First Test', function() {
  it('visit app', function() {
    cy.visit('/')    
    cy.get('.optionsViewMode').click()
    cy.get('.phoneList .compact')

  })
})