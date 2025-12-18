describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.get('input[type="email"]').type('anifeg@test.com')
    cy.get('input[type="password"]').type('123456')
    cy.get('button[type="submit"]').click()
    cy.contains('li', 'MYVIEW').should('exist')
    
  })
})