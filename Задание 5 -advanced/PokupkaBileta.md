2. PokupkaBileta.cy.js
Цель: Тестирование процесса поиска билетов на Aviasales.ru.
Сценарии:

Базовый сценарий поиска:

Принятие cookies:

Клик по кнопке принятия cookies (селектор .s__rjNuWebUllS07JjnN9xC > .s__dqLrjmV81lbY2ctpQQWt).

Проверка исчезновения кнопки после принятия.

Пример:

javascript
Copy
cy.get('.s__rjNuWebUllS07JjnN9xC > .s__dqLrjmV81lbY2ctpQQWt').click();  
cy.get('.s__rjNuWebUllS07JjnN9xC > .s__dqLrjmV81lbY2ctpQQWt').should('not.exist');  
Ввод города назначения:

Ввод "Москва" в поле #avia_form_destination-input.

Пример: cy.get('#avia_form_destination-input').type('Москва').

Выбор даты и подтверждение поиска:

Клик по элементам выбора даты (селекторы .s__FKt_57Z3lbn26yIqnsch, .s__A9OCC3uwrVobddgFoyr6).

Использование { force: true } для проблемных элементов.

Проверка перехода на страницу результатов:

Убедиться, что URL содержит параметры поиска.

Проверка конкретного маршрута:

Переход по прямому URL:

Открытие страницы https://www.aviasales.ru/search/LAX2612MOW1.

Валидация корректности URL:

Проверка, что URL включает /search/LAX2612MOW1.

Пример: cy.url().should('include', '/search/LAX2612MOW1').