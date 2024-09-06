export class Utils {
    handleExeption() {
        Cypress.on('uncaught:exception', () => {
            // returning false here prevents Cypress from
            // failing the test
            return false;
          });
    }
}