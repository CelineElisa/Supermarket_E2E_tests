export class SupermarketALocationModalPage {

  searchZipCode(zipCode: string): void {
    cy.get('[id="journey-update-modal_desc"] input').eq(0).type(zipCode).type('{enter}')
  }

  clickOnZipCode(zipCode: string): void {
    cy.get('li span').contains(zipCode).click()
  }
  
  chooseStoreLocation(): void {
    cy.contains('[id="journey-update-modal_desc"] button', 'Choisir',{timeout: 30000}).click()
  }
  
  searchAddress(address: string): void {
    cy.get('[id="journey-advanced-shipping-modal"] input[placeholder="Ex : 200 rue de la recherche 59625"]').eq(0).type(address).type('{enter}')
  }

  clickOnAddress(address: string): void {
    cy.contains('[id="journey-advanced-shipping-modal"] li', address).click()
  }

  checkModalNotExist(): void {
    cy.get('[id="journey-advanced-shipping-modal"]').should('not.exist')
  }
}