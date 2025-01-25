describe('Login test for Sauce Demo', () => {
	const users = [
	  { username: 'standard_user', expectedUrl: '/inventory.html', errorMessage: null },
	  { username: 'locked_out_user', expectedUrl: null, errorMessage: 'Epic sadface: Sorry, this user has been locked out.' },
	  { username: 'problem_user', expectedUrl: '/inventory.html', errorMessage: null },
	  { username: 'performance_glitch_user', expectedUrl: '/inventory.html', errorMessage: null },
	  { username: 'error_user', expectedUrl: null, errorMessage: 'Epic sadface: Sorry, this user has been locked out.' },
	  { username: 'visual_user', expectedUrl: '/inventory.html', errorMessage: null },
	];
  
	users.forEach((user) => {
	  it(`should login successfully with ${user.username}`, () => {
		cy.visit('https://www.saucedemo.com/'); // Переходим на сайт
  
		// Вводим данные для входа
		cy.get('input#user-name').type(user.username); // Логин
		cy.get('input#password').type('secret_sauce'); // Пароль
  
		// Нажимаем кнопку логина
		cy.get('input.btn_action').click();
  
		if (user.errorMessage) {
		  // Если ожидается ошибка, проверяем сообщение об ошибке
		  cy.get('.error-message-container').should('exist');
		  cy.get('.error-message-container').should('contain', user.errorMessage);
		} else {
		  // Проверяем успешный вход для пользователей, у которых нет ошибки
		  cy.url().should('include', user.expectedUrl); // Проверяем URL
		  cy.get('.inventory_list').should('exist'); // Проверяем, что на странице есть товары
		}
	  });
	});
  
	it('should show error with invalid credentials', () => {
	  cy.visit('https://www.saucedemo.com/');
  
	  // Вводим неверные данные для входа
	  cy.get('input#user-name').type('invalid_user');
	  cy.get('input#password').type('wrong_password');
  
	  // Нажимаем кнопку логина
	  cy.get('input.btn_action').click();
  
	  // Проверяем, что появилась ошибка
	  cy.get('.error-message-container').should('exist');
	  cy.get('.error-message-container')
		.should('contain', 'Epic sadface: Username and password do not match any user in this service');
	});
  });
  