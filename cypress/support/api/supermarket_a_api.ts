export class SupermarketAAPI {

  setInterceptGetLocatorConfig():void {
    cy.intercept({
      method: 'GET',
      url: '/journey/locator/configuration',
      times: 1,
    }).as('getLocatorConfiguration');
  }

  setInterceptGetLocatorSearch():void {
    cy.intercept({
      method: 'GET',
      url: '/journey/locator/search?*',
      times: 1,
    }).as('getLocatorSearch');
  }

  setInterceptPostCenterAnalytics():void {
    cy.intercept({
      method: 'POST',
      url: 'https://www.merchant-center-analytics.goog/mc/collect*',
      times: 1,
    }).as('postMerchantCenterAnalytics');
  }

  setInterceptPostGoogleMaps():void {
    cy.intercept({
      method: 'POST',
      url: 'https://maps.googleapis.com/$rpc/google.internal.maps.mapsjs.v1.MapsJsInternalService/GetViewportInfo',
      times: 1,
    }).as('postGoogleMaps');
  }

  setInterceptGetGeocodingAutocomplete():void {
    cy.intercept({
      method: 'GET',
      url: '/geocoding/autocomplete?*',
      times: 1,
    }).as('getGeocodingAutocomplete');
  }

  setInterceptPostTracking(): void {
    cy.intercept({
      method: 'POST',
      url: `${Cypress.env('url_supermarket_A_API')}/tracking/v1/tracking`,
      times: 1
    }).as('postTracking');
  }

  setInterceptGetOfferingContext():void {
    cy.intercept({
      method: 'GET',
      url: '/offering-contexts?*',
      times: 1,
    }).as('getOfferingContexts');
     
  }

  setInterceptLocatorShipping(): void {
    cy.intercept({  
      method: 'GET',
      url: '/journey/locator/shipping?*',
      times: 1,
    }).as('getLocatorShipping');
  }

  waitGetLocatorConfig():void {
    cy.wait('@getLocatorConfiguration').its('response.statusCode').should('eq', 200);
  }

  waitGetLocatorSearch():void {
    cy.wait('@getLocatorSearch').its('response.statusCode').should('eq', 200);
  }

  waitPostCenterAnalytics():void {
    cy.wait('@postMerchantCenterAnalytics').its('response.statusCode').should('eq', 204);
  }
    
  waitPostGoogleMaps():void {
    cy.wait('@postGoogleMaps', {timeout: 10000}).its('response.statusCode').should('eq', 200);
  }
    
  waitGetGeocodingAutocomplete():void {
    cy.wait('@getGeocodingAutocomplete').its('response.statusCode').should('eq', 200);
  }

  waitPostTracking(): void {
    cy.wait('@postTracking').its('response.statusCode').should('eq', 200);
  }

  waitGetOfferingContext():void {
    cy.wait('@getOfferingContexts').its('response.statusCode').should('eq', 200);
  }

  waitGetLocatorShipping():void {
    cy.wait('@getLocatorShipping').its('response.statusCode').should('eq', 200);
  }
}