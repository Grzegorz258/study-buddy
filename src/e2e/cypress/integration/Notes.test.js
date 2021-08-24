describe('Notes view', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.findByText(/login/i).should('exist');
    cy.findByText(/login/i).click().type('teacher@studybuddy.com');
    cy.findByText(/password/i)
      .click()
      .type('123');
    cy.findByText(/sign in/i).click();
  });

  it('Allows to create a new note and delete it', () => {
    cy.visit('/notes');
    cy.findByText(/title/i).click().type('My cypress note');
    cy.findByText(/content/i)
      .click()
      .type('My cypress note content');
    cy.findByText(/add/i).click();
    cy.findAllByText('My cypress note').should('exist');
    cy.findAllByText('My cypress note content').should('exist');
    cy.findAllByText('My cypress note')
      .first()
      .parent()
      .findByLabelText(/delete/i)
      .click();

    cy.findByText('My cypress note').should('not.exist');
  });
});
