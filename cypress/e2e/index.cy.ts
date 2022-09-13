describe('/', () => {
  it('contains welcome message', () => {
    cy.visit('/');
    cy.contains('Hello world from NestJS');
  });
});
