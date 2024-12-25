describe('Проверка работы меню на разрешении 1920x1080', () => {
  Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('Cannot set properties of null')) {
      return false; // Игнорируем ошибки из кода сайта
    }
    throw err;
  });

  beforeEach(() => {
    // Блокируем трекеры для ускорения тестов
    cy.intercept('GET', 'https://mc.yandex.ru/**', { statusCode: 204 });
    cy.intercept('POST', '/bitrix/tools/conversion/ajax_counter.php', { statusCode: 204 });
    cy.intercept('POST', 'https://bitrix.info/**', { statusCode: 204 });
  });

  it('Проверка работы меню на разрешении 1920x1080', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://sales-audi.ru/', { timeout: 60000 });

    // Проверка отображения основного контента
    cy.get('header').should('be.visible');
    cy.get('footer').should('be.visible');

    cy.document().then((doc) => {
      expect(doc.body.scrollWidth).to.be.lte(1920); // Проверяем, чтобы контент не выходил за пределы экрана
    });

    // Открываем меню
    cy.get('.header-nav-toggle').click();

    // Ожидаем 1 секунду перед кликом на ссылку
    cy.wait(1000);  // Задержка в 1 секунду

    // Нажимаем на ссылку "Предложения недели" внутри контейнера .header-column-list
    cy.get('.header-column-list')
      .contains('Предложения недели')
      .click();

    // Проверяем, что переходим на правильную страницу
    cy.url().should('include', '/offers/');

    cy.log('Проверка меню на разрешении 1920x1080 завершена');
  });
});
