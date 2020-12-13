export class TestPage {
    
    navigate() {
        cy.visit('https://google.ca/')
    }


    search(value) 
    { 
    const field=cy.get('.gLFyf')
    field.type(value) 
    // field.type((value) + '{enter}')
    // field.clear()
    }
        
}


