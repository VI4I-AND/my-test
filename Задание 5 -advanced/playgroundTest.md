1. playgroundTest.cy.js
Цель: Проверка базовой функциональности сайта Playground.ru.
Сценарии:

Загрузка главной страницы:

Проверка корректности URL:

После перехода на https://www.playground.ru тест убеждается, что URL содержит playground.ru.

Пример: cy.url().should('include', 'playground.ru').

Валидация видимости основного контента:

Проверяется, что тело страницы (body) отображается.

Пример: cy.get('body').should('be.visible').

Работа с авторизацией:

Открытие выпадающего меню:

Клик по элементу с селектором :nth-child(1) > .dropdown-toggle.

Проверка видимости меню перед взаимодействием.

Пример: cy.get(':nth-child(1) > .dropdown-toggle').should('be.visible').click().

Клик по кнопке регистрации/входа:

Нажатие на кнопку с классом .signup-button > .hidden-xs.

Пример: cy.get('.signup-button > .hidden-xs').click().

Заполнение формы случайными данными:

Генерация случайного логина (user123456) и пароля (a1b2c3d4).

Ввод данных в поля #name и #password.

Пример:

javascript
Copy
cy.get('#name').type(randomUsername);  
cy.get('#password').type(randomPassword);  
Отправка формы авторизации:

Клик по кнопке входа (селектор .js-login > .btn-outline-primary).

Пример: cy.get('.js-login > .btn-outline-primary').click().