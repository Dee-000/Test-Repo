export class OfficioHomePage {
    
    Navigate() {
        cy.visit('https://officio.ca/')
    }

    SignUp() {
        cy.get('.nav05 > a').click()
    }


}


