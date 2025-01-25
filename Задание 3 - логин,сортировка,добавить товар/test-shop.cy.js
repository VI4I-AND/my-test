describe('Sauce Demo Login Test', () => {
	it('should log in with valid credentials, select sorting option, add items to cart, and complete checkout', () => {
	  cy.visit('https://www.saucedemo.com/');
	  cy.get('input[name="user-name"]').type('standard_user');
	  cy.get('input[name="password"]').type('secret_sauce');
	  cy.get('input[type="submit"]').click();
	  cy.url().should('include', '/inventory.html');
	  cy.get('.title').should('contain', 'Products');
	  cy.get('[data-test="product-sort-container"]').select('Price (high to low)');
	  cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
	  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
	  cy.get('[data-test="shopping-cart-link"]').click();
	  cy.get('[data-test="checkout"]').click();
	  cy.get('[data-test="firstName"]').type('Андрей');
	  cy.get('[data-test="lastName"]').type('Коновалов');
	  cy.get('[data-test="postalCode"]').type('223.2');
	  cy.get('[data-test="continue"]').click();
	  cy.get('[data-test="finish"]').click();
	  cy.get('[data-test="back-to-products"]').click();
	});
  });
  