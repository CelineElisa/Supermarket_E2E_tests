import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

   
Given('I am on the Supermarket A website', () => {
  cy.visit(Cypress.env('url_supermarket_A'))
  cy.get('[id="onetrust-accept-btn-handler"]').click()
})

When('I search for "oeufs bio"', () => {
  cy.get('[id="search"] input').type('oeufs bio').type('{enter}')
})

Then('I can see the products results', () => {
  cy.get('article').should('have.length', 15)
  cy.get('article').eq(0).contains('Oeufs', {matchCase: false}).contains('Bio', {matchCase: false})
})

Then('I can\'t see the products prices', ()=> {
  cy.get('article').eq(0).contains('button','Afficher le prix')
})

When('I enable my location', () => {
  cy.intercept({
    method: 'POST',
    url: `https://c.contentsquare.net/display*`,
    times: 1,
  }).as('postContentsquare');
  cy.intercept({
    method: 'POST',
    url: `https://www.merchant-center-analytics.goog/mc/collect*`,
    times: 1,
  }).as('postMerchantCenterAnalytics');
  cy.intercept({
    method: 'POST',
    url: `https://maps.googleapis.com/$rpc/google.internal.maps.mapsjs.v1.MapsJsInternalService/GetViewportInfo`,
    times: 2,
  }).as('postGoogleMaps');
  cy.intercept({
    method: 'GET',
    url: `/geocoding/autocomplete?*`,
    times: 2,
  }).as('getGeocodingAutocomplete');
  
  cy.contains('button', 'Afficher le prix').click()
  cy.wait('@postContentsquare').its('response.statusCode').should('eq', 204);
  // cy.wait(1000)
  cy.get('[id="journey-update-modal_desc"] input').eq(0).type(Cypress.env('zip_code_supermarket_A')).type('{enter}')
  cy.wait('@postMerchantCenterAnalytics').its('response.statusCode').should('eq', 204);
  // cy.wait(2000)
  cy.get('li span').contains(Cypress.env('zip_code_supermarket_A')).click()
  cy.wait('@postGoogleMaps').its('response.statusCode').should('eq', 200);
  // cy.wait(1000)
  cy.contains('[id="journey-update-modal_desc"] button', 'Choisir').click()
  cy.wait('@postGoogleMaps').its('response.statusCode').should('eq', 200);
  // cy.wait(1000)
  cy.get('[id="journey-advanced-shipping-modal"] input[placeholder="Ex : 200 rue de la recherche 59625"]').eq(0).type(Cypress.env('address')).type('{enter}')
  cy.wait('@getGeocodingAutocomplete').its('response.statusCode').should('eq', 200);
  // cy.wait(2000)
  cy.contains('[id="journey-advanced-shipping-modal"] li', Cypress.env('address')).click()
})

Then('I can see the products prices', () => {
  cy.get('article').contains('.product-price', '€')
})