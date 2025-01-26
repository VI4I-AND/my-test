// Общие настройки для всех тестов
describe('Комплексное тестирование сайта Audi', () => {
  // Конфигурация viewports с индивидуальными допусками
  const VIEWPORTS = [
    { 
      device: 'Desktop Full HD', 
      width: 1920, 
      height: 1080,
      widthTolerance: 1.15
    },
    { 
      device: 'Laptop', 
      width: 1366, 
      height: 768,
      widthTolerance: 1.25
    },
    { 
      device: 'Tablet Landscape', 
      width: 1024, 
      height: 768,
      widthTolerance: 1.3
    },
    { 
      device: 'Tablet Portrait', 
      width: 768, 
      height: 1024,
      widthTolerance: 1.4
    },
    { 
      device: 'iPhone X', 
      width: 375, 
      height: 812,
      widthTolerance: 1.5
    },
    { 
      device: 'Android', 
      width: 360, 
      height: 640,
      widthTolerance: 1.6
    }
  ];

  // Глобальная обработка ошибок
  before(() => {
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes('Cannot set properties of null')) return false;
      return true;
    });
  });

  // Общая подготовка перед каждым тестом
  beforeEach(() => {
    cy.clearCookies()
      .clearLocalStorage()
      .intercept('GET', 'https://mc.yandex.ru/**', { statusCode: 204 })
      .intercept('POST', '/bitrix/tools/conversion/ajax_counter.php', { statusCode: 204 })
      .intercept('POST', 'https://bitrix.info/**', { statusCode: 204 })
      .viewport(1920, 1080)
      .visit('https://sales-audi.ru/', { timeout: 60000 });
  });

  // Блок тестов адаптивности
  describe('Адаптивное тестирование', () => {
    VIEWPORTS.forEach(({ device, width, height, widthTolerance }) => {
      it(`Проверка отображения на ${device} (${width}x${height})`, () => {
        cy.viewport(width, height)
          .reload()
          .get('meta[name="viewport"]')
          .should('have.attr', 'content', 'width=device-width, initial-scale=1');

        // Проверка основных элементов
        cy.get('header').should('be.visible');
        cy.get('footer').should('be.visible');

        // Проверка ширины с динамическим допуском
        cy.document().then(doc => {
          const maxAllowed = Math.floor(width * widthTolerance);
          expect(doc.documentElement.scrollWidth).to.be.lte(maxAllowed);
        });
      });
    });
  });

  // Блок функционального тестирования
  describe('Функциональное тестирование', () => {
    it('Работа главного меню в десктопной версии', () => {
      cy.get('.header-nav-toggle')
        .should('be.visible')
        .click({ force: true });

      cy.get('.header-overlay')
        .should('be.visible')
        .within(() => {
          cy.contains('a', 'Предложения недели')
            .should('be.visible')
            .click();
        });

      cy.url().should('include', '/offers/');
    });

    it('Работа системы фильтрации', () => {
      // Навигация к фильтрам
      cy.get('[data-testid="flash-sales-button"]')
        .should('be.visible')
        .click();

      // Выбор первого фильтра
      cy.get('.bx-filter-block:first-child .bx-filter-param-label', { timeout: 10000 })
        .first()
        .click({ force: true });

      // Применение фильтра
      cy.get('#set_filter')
        .should('be.visible')
        .click();

      // Проверка результатов
      cy.get('.catalog-section .owl-lazy', { timeout: 15000 })
        .should('have.length.gt', 0)
        .and('be.visible');
    });

    it('Тестирование работы слайдера', () => {
      // Инициализация слайдера
      cy.get('.m_stage__list', { timeout: 10000 })
        .should('be.visible')
        .then(($slider) => {
          const initialPosition = $slider.scrollLeft();

          // Пролистывание слайдов
          Array(3).fill().forEach(() => {
            cy.get('.owl-next')
              .should('be.visible')
              .click()
              .waitForSliderChange(initialPosition);
          });
        });
    });
  });
});

// Кастомные команды
Cypress.Commands.add('waitForSliderChange', (initialPosition) => {
  cy.get('.m_stage__list').should(($slider) => {
    expect($slider.scrollLeft()).not.to.eq(initialPosition);
  });
});

// Глобальная обработка скриншотов при ошибках
afterEach(function() {
  if (this.currentTest.state === 'failed') {
    cy.screenshot(this.currentTest.title + ' -- FAILED');
  }
});