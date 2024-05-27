class Login{
    constructor(){

        this.url = '/V4'
        this.title = 'Login'

    }
    visit(){
        cy.visit(this.url)
        
    }
    getUserID(){
        return cy.get('table > tbody > tr:nth-child(1) > td > input')
    }
    getPassword(){
        return cy.get('table > tbody > tr:nth-child(2) > td > input')
    }

    getLoginButton(){
        return cy.get('table > tbody > tr:nth-child(3) > td > input:nth-child(1)')
    }
    getResetButton(){
        return cy.get('table > tbody > tr > td > input:nth-child(2)')

    }
    getHomeUrl(){
        return cy.url().should('be', '/V4/manager/Managerhomepage.php')

    }
    getWelcomeMessage(){
        return cy.get('table > tbody > tr > td > .heading3')
    }
    getManagerID(){ 
        return cy.get('td > table > tbody > .heading3 > td')
    }
}

module.exports = Login