import Login from '../pages/Login';

const login = new Login();
let credentials = {};

describe('Testing login with valid credentials', () => {
  before(() => {
    cy.task('convertXlsxToJson', { filePath: 'cypress/fixtures/users.xlsx' }).then((data) => {
      credentials = data;
    });
    login.visit();
  });

  it('should login with valid credentials', () => {
    login.getUserID().type(credentials.validUser);
    login.getPassword().type(credentials.validPassword);
    login.getLoginButton().click();
  })
    after(() => {
      it("should take user to home page", () => {
        login.getHomeUrl()  
      })
      it("should display Welcome Message", () => {
          login.getWelcomeMessage().should('be.visible').should('eq', "Welcome To Manager's Page of Guru99 Bank")
        })
      it("should display Manager ID aka User ID", () => {
        login.getManagerID().should('be.visible').should('eq', "Manger Id : " + credentials.validUser);
      })
    })
  })
