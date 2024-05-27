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
  
})