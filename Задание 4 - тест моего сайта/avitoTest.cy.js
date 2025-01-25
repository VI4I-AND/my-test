describe('Avito Page Test', () => {
  beforeEach(() => {
    cy.visit('https://www.avito.ru/');
  });

  it('should load the Avito homepage correctly and open the first ad', () => {
    // Проверяем, что URL содержит "avito.ru"
    cy.url().should('include', 'avito.ru');
    cy.get('header').should('be.visible');

    // Вводим запрос "айфон 11" в поисковую строку и отправляем
    cy.get('input[data-marker="search-form/suggest/input"]')
      .should('exist')
      .and('be.visible')
      .type('айфон 11{enter}');

    // Ждем загрузки объявлений
    cy.get('[data-marker="item"]', { timeout: 10000 })
      .should('exist');

    // Кликаем на первое объявление в списке
    cy.get('[data-marker="item"]').first().click();
  });

  it('should open the specific product page and add to favorites', () => {
    const productUrl = 'https://www.avito.ru/ekaterinburg/telefony/iphone_11_128_gb_3965786849';
    cy.visit(productUrl);

    // Проверяем корректность перехода на нужный URL
    cy.url().should('eq', productUrl);

    // Проверяем, что кнопка "Добавить в избранное" доступна
    cy.get('button[data-marker="item-view/favorite-button"]')
      .should('exist')
      .and('be.visible');

    // Кликаем по кнопке "Добавить в избранное"
    cy.get('button[data-marker="item-view/favorite-button"]')
      .click();

    // Проверяем, что кнопка теперь отмечена как "в избранном"
    cy.get('button[data-marker="item-view/favorite-button"]')
      .should('have.attr', 'data-is-favorite', 'true');
  });
});
