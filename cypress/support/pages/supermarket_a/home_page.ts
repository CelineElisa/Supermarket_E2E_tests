export class SupermarketAHomePage {

  visit():void  {
    cy.visit(Cypress.env('url_supermarket_A'));
  }

  visitEggsPage():void  {
    cy.visit(`${Cypress.env('url_supermarket_A')}
    /oeufs-produits-laitiers/cremerie-oeufs-laits/oeufs/ca-n010103?redirect_keywords=oeufs&x-ua-device=mobile`);
  }

  acceptCookies():void  {
    cy.get('[id="onetrust-accept-btn-handler"]').click();
  }
   
  search(product:string):void  {
    cy.get('[id="search"] input').type(product).type('{enter}');
  }

  checkArticleNumber(number:number):void  {
    cy.get('article').should('have.length', number);
  }

  checkArticleContent(text: string):void  {
    cy.get('article').contains(text, {matchCase: false});
  }

  checkArticlePriceIsHidden():void  {
    cy.get('article').eq(0).contains('button','Afficher le prix');
  }
    
  clickOnShowPriceButton():void  {
    cy.contains('article button', 'Afficher le prix').click();
  }
    
  checkSpinnerNotVisible():void  {
    cy.get('[id="spinner"]').should('not.be.visible');
  }

  checkSuccessLocationNotif():void  {
    cy.get('[id^="notification"').contains('C\'est noté ! Vos courses seront maintenant livrées à');
  }

  checkPriceVisible():void  {
    cy.get('article').contains('.product-price', '€');
  }

  filter(filter:string):void {
    cy.get('#sort').select(filter);
    cy.url().should('include', filter);
  }

  checkPriceAscending():void {
    cy.get('article .product-price').then(($prices) => {
      const prices = $prices.map((i, el) => Cypress.$(el).text().replace('€', '').replace(',', '.')).get();
      const pricesSorted = [...prices].sort((a, b) => parseFloat(a) - parseFloat(b));
      expect(prices).to.deep.equal(pricesSorted);
    });
  }
}