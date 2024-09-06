import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import { SupermarketAHomePage, SupermarketALocationModalPage } from '@pages'
import { SupermarketAAPI } from '@api'
import { SupermarketAData } from '@data'
import { Utils } from '@utils'

const homePage = new SupermarketAHomePage()
const api = new SupermarketAAPI()
const user = new SupermarketAData()
   
Given('I am on the Supermarket A website', () => {
  homePage.visit()
  homePage.acceptCookies()
})

When('I search for "oeufs"', () => {
  api.setInterceptGetLocatorConfig()
  homePage.search('oeufs')
})

Then('I can see the products results', () => {
  homePage.checkArticleNumber(15)
  homePage.checkArticleContent('Oeufs')
})

Then('I can\'t see the products prices', ()=> {
  homePage.checkArticlePriceIsHidden()
})

When('I enable my location', () => {
  const locationModal = new SupermarketALocationModalPage()
  api.setInterceptPostContentSquare()
  api.setInterceptPostCenterAnalytics()
  api.setInterceptPostGoogleMaps()
  api.setInterceptGetGeocodingAutocomplete()
  api.waitGetLocatorConfig()
  homePage.clickOnShowPriceButton()
  api.waitPostContentSquare()
  locationModal.searchZipCode(user.zipCode)
  api.waitPostCenterAnalytics()
  locationModal.clickOnZipCode(user.zipCode)
  api.waitPostGoogleMaps()
  locationModal.chooseStoreLocation()
  api.waitPostGoogleMaps()
  locationModal.searchAddress(user.address)
  api.waitGetGeocodingAutocomplete()
  locationModal.clickOnAddress(user.address)
  locationModal.checkModalNotExist()
  homePage.checkSpinnerNotVisible()
  homePage.checkSuccessLocationNotif()
})

Then('I can see the products prices', () => {
  homePage.checkPriceVisible()
})

Given('I have enabled my location', () => {
  cy.setCookie(user.locationCookie.name, user.locationCookie.value)
})

Given('I have made a research for "oeufs"', () => {
  const utils = new Utils()
  homePage.visitEggsPage()
  utils.handleExeption()
})

When('I filter the products by price ascending', () => {
  homePage.filter('asc_price_pos')
})

Then('The products are sorted by price ascending', () => {
  homePage.checkPriceAscending()
}) 

