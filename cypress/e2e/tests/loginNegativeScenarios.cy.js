import Login from '../pages/Login'

const login = new Login()
const userID = "reset"
const password = "button"
describe("Testing login", () => {

  beforeEach(() => { 
    login.visit()
})
  it("should reset the form if I click the Reset button", () => {
    login.getUserID().type(userID)
    login.getPassword().type(password)
    login.getResetButton().click()
  })
  it("should display a popup if user or password are invalid and take the user to previous url after clicking ok on the popup", () => {
    login.getUserID().type(userID)
    login.getPassword().type(password)
    login.getLoginButton().click()
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('User or Password is not valid')
      return true
    })
      cy.get('button').click()
    
})
})