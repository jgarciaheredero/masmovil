describe('My First Test', function() {
  it('visit app', function() {
    cy.visit('/')
  })
  it('Check mode view',function(){
    cy.get('#changeModeView').click()
    cy.get('.phoneList').find('.compact')
    cy.get('#changeModeView').click()
    cy.get('.phoneList').not('.compact')
  });
  it('Show detail card',function(){
    cy.get('.phoneItem').click({multiple: true})
    cy.get('.phoneItem__card').find('.phoneDetail')
  })
  it('Hide detail card',function(){
    cy.get('.phoneItem').click({multiple: true})
    cy.get('.phoneItem__card').not('.phoneDetail')
  })
  it('Hide option mode view in mobile/tablet',function(){
    cy.viewport(500, 700)
    cy.get('.optionsViewMode').should('not.visible')
  })
  it('Show option mode view in mobile/tablet',function(){
    cy.viewport(995, 700)
    cy.get('.optionsViewMode').should('be.visible')
  })
})