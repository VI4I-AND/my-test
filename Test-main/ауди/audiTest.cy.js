describe('Адаптивность сайта https://sales-audi.ru/', () => {
  Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('Cannot set properties of null')) {
      return false; // Игнорируем ошибки из кода сайта
    }
    throw err;
  });

  const viewports = [
    { device: 'Desktop Full HD', width: 1920, height: 1080 },
    { device: 'Laptop', width: 1366, height: 768 },
    { device: 'Tablet Landscape', width: 1024, height: 768 },
    { device: 'Tablet Portrait', width: 768, height: 1024 },
    { device: 'iPhone X', width: 375, height: 812 },
    { device: 'Android', width: 360, height: 640 },
  ];

  beforeEach(() => {
    // Блокируем трекеры для ускорения тестов
    cy.intercept('GET', 'https://mc.yandex.ru/**', { statusCode: 204 });
    cy.intercept('POST', '/bitrix/tools/conversion/ajax_counter.php', { statusCode: 204 });
    cy.intercept('POST', 'https://bitrix.info/**', { statusCode: 204 });
  });

  viewports.forEach(({ device, width, height }) => {
    it(`Проверка отображения и работы меню на ${device} (${width}x${height})`, () => {
      cy.viewport(width, height);
      cy.visit('https://sales-audi.ru/', { timeout: 1000 });

      // Проверка отображения основного контента
      cy.get('header').should('be.visible');
      cy.get('footer').should('be.visible');

      cy.document().then((doc) => {
        expect(doc.body.scrollWidth).to.be.lte(width);
      });

      // Открываем меню
      cy.get('.header-nav-toggle').click();

      // Проверяем, что меню открыто (например, по наличию класса или изменениям на странице)
      cy.get('.header-overlay').should('be.visible');

      // Нажимаем на ссылку "Предложения недели"
      cy.contains('a.header-overlay-link', 'Предложения недели').click();

      // Проверяем, что переходим на правильную страницу
      cy.url().should('include', '/offers/');

      cy.log(`Проверка для ${device} завершена`);
    });
  });
});
