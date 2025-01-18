describe('Проверка работы слайдера', () => {
  Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('Cannot set properties of null')) {
      return false; // Игнорируем ошибки из кода сайта
    }
    throw err;
  });

  it('Нажатие на кнопку слайдера три раза с задержкой', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://sales-audi.ru/', { timeout: 60000 });

    // Ожидаем 3 секунды, чтобы слайдер прогрузился
    cy.wait(3000);

    // Вызовем тест для нажатия на слайдер
    cy.slideThrough();Ц
  });
});

// Добавляем команду для нажатия на кнопку слайдера
Cypress.Commands.add('slideThrough', () => {
  // Находим кнопку слайдера и кликаем по ней три раза с задержкой в 1 секунду
  cy.get('.m_stage__list > .owl-nav > .owl-next') // Находим кнопку слайдера
    .should('be.visible')  // Проверяем, что кнопка видима
    .then(($btn) => {
      // Кликаем по кнопке 3 раза с задержкой в 1 секунду между кликами
      cy.wrap($btn).click(); // Первый клик
      cy.wait(1000);  // Задержка 1 секунда
      cy.wrap($btn).click(); // Второй клик
      cy.wait(1000);  // Задержка 1 секунда
      cy.wrap($btn).click(); // Третий клик
    });

  // Добавим проверку, например, что слайдер переключился (если есть индикатор текущего слайда)
  // cy.get('.current-slide').should('have.class', 'active'); // Пример проверки, если индикатор есть
});
