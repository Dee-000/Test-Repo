export class OfficioPackagesPage {

    SoloSelectClick() {
        cy.get('#liteBtn').click()
    }

    ProSelectClick() {
        cy.get('#proBtn').click()
    }

    UltimateSelectClick() {
        cy.get('#ultimateBtn').click()
    }

    MonthlyPriceValidation(value) {
        const field=cy.get('#total_user_price_month')
        field.should('have.text', value)
        }

            
    NextClick() {
        cy.get('#nextBtn').click() 
    }

}


