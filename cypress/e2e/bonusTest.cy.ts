describe('Load the localhost bonus page', () => {
    it('and identify accessibility violations',() => {
      cy.visit('http://192.168.1.126:8080');
      cy.a11y();
    });
});