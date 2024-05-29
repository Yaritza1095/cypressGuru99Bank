import Login from '../pages/Login';

const login = new Login();
let credentials = {};

describe('Testing reset button functionality', () => {
  before(() => {
    cy.task('convertXlsxToJson', { filePath: 'cypress/fixtures/users.xlsx' }).then((data) => {
      credentials = data;
    });
  });

  beforeEach(() => {
    login.visit();
    cy.reload();  // Reload the page to reset the state
  });

  it('should reset the login form', () => {
    login.getUserID().type(credentials.validUser);
    login.getPassword().type(credentials.validPassword);
    login.getResetButton().click();  // Click the reset button

    // Ensure fields are cleared
    login.getUserID().should('have.value', '');
    login.getPassword().should('have.value', '');
  });
});
