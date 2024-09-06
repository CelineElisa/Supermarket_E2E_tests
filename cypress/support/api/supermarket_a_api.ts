export class SupermarketAAPI {

    setInterceptGetLocatorConfig():void {
        cy.intercept({
            method: 'GET',
            url: `/journey/locator/configuration`,
            times: 1,
          }).as('getLocatorConfiguration');
    }
    
    setInterceptPostContentSquare():void {
        cy.intercept({
            method: 'POST',
            url: `https://c.contentsquare.net/display*`,
            times: 1,
          }).as('postContentSquare');
    }

    setInterceptPostCenterAnalytics():void {
        cy.intercept({
            method: 'POST',
            url: `https://www.merchant-center-analytics.goog/mc/collect*`,
            times: 1,
          }).as('postMerchantCenterAnalytics');
        }

    setInterceptPostGoogleMaps():void {
      cy.intercept({
        method: 'POST',
        url: `https://maps.googleapis.com/$rpc/google.internal.maps.mapsjs.v1.MapsJsInternalService/GetViewportInfo`,
        times: 2,
      }).as('postGoogleMaps');
    }

    setInterceptGetGeocodingAutocomplete():void {
      cy.intercept({
        method: 'GET',
        url: `/geocoding/autocomplete?*`,
        times: 2,
      }).as('getGeocodingAutocomplete');
    }

    waitGetLocatorConfig():void {
        cy.wait('@getLocatorConfiguration').its('response.statusCode').should('eq', 200);
    }
    
    waitPostContentSquare():void {
        cy.wait('@postContentSquare').its('response.statusCode').should('eq', 204);
    }

    waitPostCenterAnalytics():void {
        cy.wait('@postMerchantCenterAnalytics').its('response.statusCode').should('eq', 204);
    }
    
    waitPostGoogleMaps():void {
        cy.wait('@postGoogleMaps').its('response.statusCode').should('eq', 200);
    }
    
    waitGetGeocodingAutocomplete():void {
        cy.wait('@getGeocodingAutocomplete').its('response.statusCode').should('eq', 200);
    }
}