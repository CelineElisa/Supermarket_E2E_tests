export class SupermarketALocationModalPage {

  searchZipCode(zipCode: string): void {
    cy.get('[id="journey-update-modal_desc"] input').eq(0).type(zipCode).type('{enter}');
  }

  clickOnZipCode(zipCode: string): void {
    cy.get('[id="journey-update-modal_desc"] li span').contains(zipCode).click();
  }
  
  chooseStoreLocation(): void {
    cy.contains('[id="journey-update-modal_desc"] button', 'Choisir',{timeout: 30000}).click();
  }

  checkModalNotExist(): void {
    cy.get('[id="journey-advanced-shipping-modal"]').should('not.exist');
  }
}