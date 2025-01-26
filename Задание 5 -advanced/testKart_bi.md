3. testKart_bi.cy.js
Цель: Тестирование интерактивной карты на Aviasales.ru.
Сценарии:

Клики по элементам карты:

Взаимодействие с аэропортами и метками (селекторы [data-test-id="place-card-SVX"], #travel-map-layer-selector-333).

Пример:

javascript
Copy
cy.get('[data-test-id="place-card-SVX"]').click();  
cy.get('#travel-map-layer-selector-333').click();  
Управление масштабом:

Увеличение: 3 клика по кнопке .mapboxgl-ctrl-zoom-in.

Уменьшение: 4 клика по кнопке .mapboxgl-ctrl-zoom-out.

Пример:

javascript
Copy
cy.get('.mapboxgl-ctrl-zoom-in').click().click().click();  
cy.get('.mapboxgl-ctrl-zoom-out').click().click().click().click();  
Возврат на главную страницу:

Переход на https://www.aviasales.ru/ после тестирования карты.

Взаимодействие с дополнительными элементами:

Клик по кнопкам интерфейса (селекторы .s__VpknPUW_5gf3VewtTQYb, .s__iONK7QTp4albT6LRJ2Po > :nth-child(1)).