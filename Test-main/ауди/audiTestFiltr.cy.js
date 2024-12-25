describe('Тест кнопки и фильтров', () => {
  before(() => {
    cy.visit('https://sales-audi.ru/');
  });

  it('Нажимаем на кнопку, выбираем фильтр и подтверждаем', () => {
    // Нажимаем на кнопку и ждем, чтобы элемент появился
    cy.get('.header-flex > .nav-header > .nav-header-item.-flash > .nav-header-link')
      .should('be.visible')
      .click();

    // Дожидаемся появления фильтра и выбираем его
    cy.get(':nth-child(1) > .bx-filter-block > .bx-filter-parameters-box-container > :nth-child(1) > :nth-child(1) > .bx-filter-param-label > .bx-filter-input-checkbox > .bx-filter-param-text')
      .should('be.visible')
      .click();

    // Нажимаем на кнопку #set_filter, проверяем, что она видна перед нажатием
    cy.get('#set_filter').should('be.visible').click();

    // Дожидаемся, что результат будет отображен
    cy.get('.active > .nm-pageOpen > .owl-lazy')
      .should('exist')
      .and('be.visible');  // Проверяем, что элемент видим
  });
});

// Обработка исключений для предотвращения падения тестов на ошибки, происходящие в приложении
Cypress.on('uncaught:exception', (err, runnable) => {
  // Возвращаем false, чтобы Cypress не прерывал тест при ошибках
  return false;
});
