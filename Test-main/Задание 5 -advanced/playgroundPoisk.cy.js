describe('Тестирование сайта playground.ru', () => {
  it('Проверка открытия главной страницы, клика по кнопке и ввода текста в поиск', () => {
    // Открываем сайт
    cy.visit('https://www.playground.ru');
    
    // Проверяем, что URL сайта содержит playground.ru
    cy.url().should('include', 'playground.ru');
    
    // Проверяем, что body элемента страницы виден
    cy.get('body').should('be.visible');
    
    // Кликаем по кнопке с селектором .hidden-xs > .btn, если такая кнопка существует
    cy.get('.hidden-xs > .btn')
      .should('be.visible')  // Проверяем, что кнопка видна
      .click();  // Кликаем по кнопке

    // Проверяем, существует ли модальное окно и оно видимо
    cy.get('#signinModalWindow').then(($modal) => {
      if ($modal.is(':visible')) {
        // Если модальное окно видно, выполняем клик по поисковому полю
        cy.get('#searchPG')
          .should('be.visible')
          .type('PoE 2');
      } else {
        // Если модальное окно не видно, сразу работаем с поисковым полем
        cy.get('#searchPG')
          .should('be.visible')
          .type('PoE 2');
      }
    });

    // Нажимаем кнопку поиска "найти"
    cy.get('.search-button.btn.btn-lg.btn-primary')  // Селектор кнопки
      .should('be.visible')  // Проверяем, что кнопка видна
      .click();  // Кликаем по кнопке

  });
});
