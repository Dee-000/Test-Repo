/// <reference types="cypress" />

import { OfficioCheckoutPage } from "../page-objects/officioCheckout-page"
import { OfficioHomePage } from "../page-objects/officioHome-page"
import { OfficioPackagesPage } from "../page-objects/officioPackages-page"

describe('sign up for each package and check price', () => {
    const officioHomePage = new OfficioHomePage
    const officioPackagesPage = new OfficioPackagesPage
    

    beforeEach(() => {
        officioHomePage.Navigate()
        officioHomePage.SignUp()
    })

    it('should select solo package and validate monthly price', () => {
        officioPackagesPage.SoloSelectClick()
        officioPackagesPage.MonthlyPriceValidation('$69')
    })  

    it('should select pro package and validate monthly price', () => {
        officioPackagesPage.ProSelectClick()
        officioPackagesPage.MonthlyPriceValidation('$99')
    })          

    it('should select ultimate package and validate monthly price', () => {
        officioPackagesPage.UltimateSelectClick()
        officioPackagesPage.MonthlyPriceValidation('$99')
    })

}) 

// ----------------------------------------------------------------------------------

describe('sign up for each package and assert navigation to checkout', () => {
    const officioHomePage = new OfficioHomePage
    const officioPackagesPage = new OfficioPackagesPage
    const officioCheckoutPage = new OfficioCheckoutPage

    beforeEach(() => {
        officioHomePage.Navigate()
        officioHomePage.SignUp()
        
    })

    it('should select solo package and navigate to checkout form', () => {
        officioPackagesPage.SoloSelectClick()
        officioPackagesPage.NextClick()
        officioCheckoutPage.CheckoutURLValidation('https://secure.officio.ca/signup/index/step3')
        
    })  

    it('should select pro package and navigate to checkout form', () => {
        officioPackagesPage.ProSelectClick()
        officioPackagesPage.NextClick()
        officioCheckoutPage.CheckoutURLValidation('https://secure.officio.ca/signup/index/step3')
    })  

    it('should select ultimate package and navigate to checkout form', () => {
        officioPackagesPage.UltimateSelectClick()
        officioPackagesPage.NextClick()
        officioCheckoutPage.CheckoutURLValidation('https://secure.officio.ca/signup/index/step3')
    })  
 }) 