import Login from '../pages/Login'

const login = new Login()
const userID = "mngr573953"
const password = "YhutysY"
describe("Testing login", () => {

  before(() => {
    login.visit()
  })

  it("should login with valid credentials", () => {
    login.getUserID().type(userID)
    login.getPassword().type(password)
    login.getLoginButton().click()
  })
  after(() => {
    it("should take user to home page", () => {
      login.getHomeUrl()  
    })
    it("should display Welcome Message", () => {
        login.getWelcomeMessage().should('be.visible').should('eq', "Welcome To Manager's Page of Guru99 Bank")
      })
    it("should display Manager ID aka User ID", () => {
      login.getManagerID().should('be.visible').should('eq', "Manger Id : " + userID)
    })
  })
})