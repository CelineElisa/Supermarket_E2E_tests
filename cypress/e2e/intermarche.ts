import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'


Given('I am on the Intermarché website', () => {
  cy.visit('https://www.google.com')
  cy.contains('button', 'Tout accepter').click()
  cy.get('textarea').eq(0).type('Intermarché').type('{enter}')
  cy.get('[role="button"]').contains('Pas maintenant').click()
  cy.get('[href="https://www.intermarche.com/"]').eq(0).click()
})

When('I search for "compote"', () => {

})

Then('I should see the price of the first product', () => {

})