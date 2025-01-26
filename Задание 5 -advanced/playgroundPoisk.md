4. playgroundPoisk.cy.js
Цель: Проверка поисковой системы Playground.ru.
Сценарии:

Открытие главной страницы:

Переход на https://www.playground.ru и проверка URL.

Клик по кнопке вызова поиска:

Нажатие на кнопку с селектором .hidden-xs > .btn.

Пример: cy.get('.hidden-xs > .btn').click().

Обработка модального окна:

Если модальное окно #signinModalWindow появляется, тест проверяет его видимость.

Пример:

javascript
Copy
cy.get('#signinModalWindow').then(($modal) => {  
  if ($modal.is(':visible')) {  
    // Действия при открытом модальном окне  
  }  
});  
Ввод поискового запроса:

Ввод текста "PoE 2" в поле #searchPG.

Пример: cy.get('#searchPG').type('PoE 2').

Запуск поиска:

Клик по кнопке "Найти" (селектор .search-button.btn.btn-lg.btn-primary).

Пример: cy.get('.search-button.btn.btn-lg.btn-primary').click().