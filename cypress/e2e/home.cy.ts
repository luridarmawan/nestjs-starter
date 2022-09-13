describe('/home', () => {
  it('contains welcome message', () => {
    cy.visit('/home');
    cy.contains('Hello world from NestJS');
  });
});
