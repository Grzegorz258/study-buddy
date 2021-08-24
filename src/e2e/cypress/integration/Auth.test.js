describe('Study Buddy app', () => {
  it('Renders unathenthicated app', () => {
    cy.visit('/');
    cy.findByText(/login/i).should('exist');
  });
  it('Renders unathenthicated app', () => {
    cy.visit('/');
    cy.findByText(/login/i).should('exist');
    cy.findByText(/login/i).click().type('teacher@studybuddy.com');
    cy.findByText(/password/i)
      .click()
      .type('123');
    cy.findByText(/sign in/i).click();

    cy.findByText(/logged as/i).should('exist');
  });
});
