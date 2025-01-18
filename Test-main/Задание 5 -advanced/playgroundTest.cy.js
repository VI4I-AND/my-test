describe('Тестирование сайта playground.ru', () => {
  // Тест, чтобы убедиться, что сайт загружается
  it('Проверка загрузки главной страницы', () => {
      cy.visit('https://www.playground.ru');
      cy.url().should('include', 'playground.ru'); // Проверка URL сайта
      cy.get('body').should('be.visible'); // Проверка видимости body элемента
  });

  describe('Тестирование выпадающего меню и клика по элементу', () => {
    it('Проверка работы выпадающего меню, клика на кнопку и клика на элемент', () => {
        cy.visit('https://www.playground.ru');

        // Клик по элементу с селектором :nth-child(1) > .dropdown-toggle
        cy.get(':nth-child(1) > .dropdown-toggle').should('be.visible').click();

        // Клик по кнопке .signup-button > .hidden-xs
        cy.get('.signup-button > .hidden-xs')
          .should('be.visible')  // Проверка, что элемент видим
          .click();  // Клик по кнопке

        // Заполнение формы логина (поля с id='name')
        const randomUsername = 'user' + Math.floor(Math.random() * 1000000);
        cy.get('#name')  // Поле для логина
          .should('be.visible')
          .type(randomUsername);  // Заполнение поля случайным логином

        // Заполнение формы пароля (поле с id='password')
        const randomPassword = Math.random().toString(36).slice(-8); // Генерация случайного пароля
        cy.get('#password')  // Поле для пароля
          .should('be.visible')
          .type(randomPassword);  // Заполнение поля случайным паролем

        // Клик по кнопке .js-login > .btn-outline-primary
        cy.get('.js-login > .btn-outline-primary')
          .should('be.visible')  // Проверка видимости кнопки
          .click();  // Клик по кнопке для выполнения логина
    });
  });
});
