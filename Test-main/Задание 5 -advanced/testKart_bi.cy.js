describe('Простой тест на сайте Aviasales', () => {
  beforeEach(() => {
    // Игнорирование необработанных исключений
    cy.on('uncaught:exception', (err, runnable) => {
      // Возвращаем false, чтобы Cypress не прерывал тест на ошибке
      return false;
    });
  });

  it('Переход на сайт и выполнение базовых действий', () => {
    // Переход на сайт Aviasales
    cy.visit('https://www.aviasales.ru/?params=LAX1');

    // Клик по элементу с селектором :nth-child(3) > .s__copbTnCU01Z8RvQlTAy3
    cy.get(':nth-child(3) > .s__copbTnCU01Z8RvQlTAy3')
      .should('be.visible') // Проверяем, что элемент видим
      .click(); // Кликаем по элементу

    // Ждем 5 секунд
    cy.wait(5000); // Задержка 5 секунд

    // Клик по элементу с селектором data-test-id="place-card-SVX"
    cy.get('[data-test-id="place-card-SVX"] > .s__EJ4rq1YzvicZGxVybeBN > .s__QFVsRyIPprUnPXMWERK9 > .s__gF3vTeHzPI7PjjHV6JZ_')
      .should('be.visible') // Проверяем, что элемент видим
      .click(); // Кликаем по элементу

    cy.get('#travel-map-layer-selector-333 > .s__NMl0pb1xj8DjoUzWGlL7 > .s__BbuEoHGcaCJFDKIJvczh > .s__RMfsM0SjoBxH8oSXIT8p')
      .should('be.visible') // Проверяем, что элемент видим
      .click(); // Кликаем по элементу

    cy.get('.s__t1ejFG_j6BvjYk22afCA > .s__dqLrjmV81lbY2ctpQQWt')
      .should('be.visible') // Проверяем, что элемент видим
      .click(); // Кликаем по элементу

    cy.get(':nth-child(1) > .s__DM6TaBEGRPExR2JHC4AP > .s__G_eDNGRQW2CuL57KpbSi > .s__DdYj_HZjWf_F89Vp9iAQ > .s__qJnnbWbIcpsj7b444hDV > .s__gF3vTeHzPI7PjjHV6JZ_')
      .should('be.visible') // Проверяем, что элемент видим
      .click(); // Кликаем по элементу

    cy.get('.s__iUunIsbq9h9RkouV6XC8 > :nth-child(1)')
      .should('be.visible') // Проверяем, что элемент видим
      .click(); // Кликаем по элементу

    cy.get('.mapboxgl-ctrl-zoom-in > .mapboxgl-ctrl-icon')
      .should('be.visible') // Проверяем, что элемент видим
      .click(); // Кликаем по элементу

    cy.get('.mapboxgl-ctrl-zoom-in > .mapboxgl-ctrl-icon')
      .should('be.visible') // Проверяем, что элемент видим
      .click(); // Кликаем по элементу

    cy.get('.mapboxgl-ctrl-zoom-in > .mapboxgl-ctrl-icon')
      .should('be.visible') // Проверяем, что элемент видим
      .click(); // Кликаем по элементу

    cy.get('.mapboxgl-ctrl-zoom-out > .mapboxgl-ctrl-icon')
      .should('be.visible') // Проверяем, что элемент видим
      .click(); // Кликаем по элементу

    cy.get('.mapboxgl-ctrl-zoom-out > .mapboxgl-ctrl-icon')
      .should('be.visible') // Проверяем, что элемент видим
      .click(); // Кликаем по элементу

    cy.get('.mapboxgl-ctrl-zoom-out > .mapboxgl-ctrl-icon')
      .should('be.visible') // Проверяем, что элемент видим
      .click(); // Кликаем по элементу

    cy.get('.mapboxgl-ctrl-zoom-out > .mapboxgl-ctrl-icon')
      .should('be.visible') // Проверяем, что элемент видим
      .click(); // Кликаем по элементу

    // Переходим на главную страницу
    cy.visit('https://www.aviasales.ru/'); // Переход на главную страницу

    // Клик по элементу с селектором .s__VpknPUW_5gf3VewtTQYb
    cy.get('.s__VpknPUW_5gf3VewtTQYb')
      .should('be.visible') // Проверяем, что элемент видим
      .click(); // Кликаем по элементу

    // Клик по элементу с селектором .s__iONK7QTp4albT6LRJ2Po > :nth-child(1)
    cy.get('.s__iONK7QTp4albT6LRJ2Po > :nth-child(1)')
      .should('be.visible') // Проверяем, что элемент видим
      .click(); // Кликаем по элементу
  });
});
