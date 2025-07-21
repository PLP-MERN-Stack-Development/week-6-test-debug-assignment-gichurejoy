// Example Cypress E2E test

describe('Sample E2E', () => {
    it('visits the app root url', () => {
        cy.visit('/');
        cy.contains('React'); // Adjust as needed for your app
    });
}); 