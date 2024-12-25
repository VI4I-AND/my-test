describe('Проверка загрузки сайта Aviasales', () => {
  beforeEach(() => {
    // Игнорирование необработанных исключений
    cy.on('uncaught:exception', (err, runnable) => {
      // Вернуть false, чтобы Cypress не прерывал тест
      return false;
    });
  });

  it('Загрузка главной страницы, принятие cookies, ввод данных в поле назначения и клики по элементам', () => {
    // Переход на сайт Aviasales
    cy.visit('https://www.aviasales.ru/?params=LAX1');

    // Клик по кнопке принятия cookies
    cy.get('.s__rjNuWebUllS07JjnN9xC > .s__dqLrjmV81lbY2ctpQQWt')
      .should('be.visible') // Проверяем, что кнопка видима
      .click(); // Кликаем по кнопке

    // Проверяем, что кнопка исчезла после нажатия
    cy.get('.s__rjNuWebUllS07JjnN9xC > .s__dqLrjmV81lbY2ctpQQWt')
      .should('not.exist');

    // Клик по полю ввода "Куда" и ввод "Москва"
    cy.get('#avia_form_destination-input')
      .should('be.visible') // Проверяем, что поле видно
      .click() // Кликаем по полю
      .type('Москва'); // Вводим текст

    // Задержка перед следующим действием
    cy.wait(2000); // Ждем 2 секунды

    // Клик по элементу с селектором .s__FKt_57Z3lbn26yIqnsch с использованием {force: true}
    cy.get('.s__FKt_57Z3lbn26yIqnsch')
      .click({ force: true }); // Принудительный клик

    // Клик по элементу с селектором .s__A9OCC3uwrVobddgFoyr6 > .s__dqLrjmV81lbY2ctpQQWt
    cy.get('.s__A9OCC3uwrVobddgFoyr6 > .s__dqLrjmV81lbY2ctpQQWt')
      .should('be.visible') // Проверяем, что кнопка видима
      .click(); // Кликаем по кнопке

    // Клик по элементу с селектором .s__qtg4lj96ykXE3OEOzWM5 > .s__dqLrjmV81lbY2ctpQQWt
    cy.get('.s__qtg4lj96ykXE3OEOzWM5 > .s__dqLrjmV81lbY2ctpQQWt')
      .should('be.visible') // Проверяем, что кнопка видима
      .click(); // Кликаем по кнопке и переходим
  });

  it('Переход на страницу поиска LAX2612MOW1', () => {
    // Переход на указанную страницу
    cy.visit('https://www.aviasales.ru/search/LAX2612MOW1');

    // Проверяем, что мы находимся на нужной странице
    cy.url().should('include', '/search/LAX2612MOW1');
  });
});
