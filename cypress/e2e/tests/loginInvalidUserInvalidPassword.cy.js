import Login from '../pages/Login';

const login = new Login();
let credentials = {};

describe('Testing login with invalid user and invalid password', () => {
  before(() => {
    cy.task('convertXlsxToJson', { filePath: 'cypress/fixtures/users.xlsx' }).then((data) => {
      credentials = data;
    });
  });

  beforeEach(() => {
    login.visit();
    cy.reload();  // Reload the page to reset the state
  });

  it('should fail to login with invalid user and invalid password', () => {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alert');
    });

    login.getUserID().type(credentials.invalidUser);
    login.getPassword().type(credentials.invalidPassword);
    login.getLoginButton().click();

    cy.get('@alert').should('have.been.calledWith', 'User or Password is not valid');
});

after(() => {
  cy.window().then((win) => {
    win.close();  // Attempt to close the browser tab
  });
});
});