export class OfficioCheckoutPage {
    
        salutation(value) 
        { 
        const field=cy.get('#salutation')
        field.select(value) 
        }    

        name(value) 
        { 
        const field=cy.get('#firstName')
        field.type(value) 
        }

        lastName(value) 
        { 
        const field=cy.get('#lastName')
        field.type(value) 
        }
        
        companyName(value)
        {
        const field=cy.get('#companyName')
        field.type(value)    
        }
                
        phone1(value)
        {
        const field=cy.get('#phone1')
        field.type(value)    
        }

        companyEmail(value)
        {
        const field=cy.get('#companyEmail')
        field.type(value)    
        }

        address(value)
        {
        const field=cy.get('#address')
        field.type(value)    
        }

        city(value)
        {
        const field=cy.get('#city')
        field.type(value)    
        }

        province(value)
        {
        const field=cy.get('#province')
        field.select(value)    
        }

        country(value)
        {
        const field=cy.get('#country')
        field.select(value)    
        }

        zip(value)
        {
        const field=cy.get('#zip')
        field.type(value)    
        }

        ccType(value)
        {
        const field=cy.get('#ccType')
        field.select(value)    
        }

        ccNumber(value)
        {
        const field=cy.get('#ccNumber')
        field.type(value)    
        }

        //validate empty credit card required field
        ccNumber_NullValidation() {
            cy.get(':nth-child(14) > [align="left"] > label.error').should('have.text', 'This field is required.')
        }
        
        // validate invalid credit card field:
        ccNumber_InvalidValidation() {
            cy.get(':nth-child(14) > [align="left"] > label.error').should('have.text', 'Please enter a valid Credit Card Number.')
        }
                
        ccExpMonth(value) 
        {
        const field=cy.get('#ccExpMonth')
        field.select(value)    
        }

        ccExpYear(value)
        {
        const field=cy.get('#ccExpYear')
        field.select(value)    
        }

        ccName(value)
        {
        const field=cy.get('#ccName')
        field.type(value)    
        }
               
        CheckoutURLValidation(value) {
            const field=cy.url()
            field.should('include', value)
            }  

    NextClick() {
        cy.get('#nextBtn').click() 
    }


}