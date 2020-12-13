/// <reference types="cypress" />

import { OfficioHomePage } from "../page-objects/officioHome-page"
import { OfficioPackagesPage } from "../page-objects/officioPackages-page"
import { OfficioCheckoutPage } from "../page-objects/officioCheckout-page"

describe('complete checkout forms for all packages', () => {
    const officioHomePage = new OfficioHomePage
    const officioPackagesPage = new OfficioPackagesPage
    const officioCheckoutPage = new OfficioCheckoutPage
    
    beforeEach(() => {
        officioHomePage.Navigate()
        officioHomePage.SignUp()
       
    })

    it('should complete solo checkout form', () => {
        officioPackagesPage.SoloSelectClick()
        officioPackagesPage.NextClick()
       
        officioCheckoutPage.salutation('Mr.')
        officioCheckoutPage.name('Joe')
        officioCheckoutPage.lastName('Smith')
        officioCheckoutPage.companyName('ACME')
        officioCheckoutPage.phone1('(604)777-888-0000')
        officioCheckoutPage.companyEmail('joe@smith.com')
        officioCheckoutPage.address('123 Oak Road')
        officioCheckoutPage.city('Vancouver')
        officioCheckoutPage.province('British Columbia')
        officioCheckoutPage.country('Canada')
        officioCheckoutPage.zip('H4R2W9')
        officioCheckoutPage.ccType('Visa')
        officioCheckoutPage.ccNumber('4520111122223333')
        officioCheckoutPage.ccExpMonth('01 - January')
        officioCheckoutPage.ccExpYear('2022')
        officioCheckoutPage.ccName('Joe Smith')
      
        officioCheckoutPage.NextClick()
    }) 

    it('should complete pro checkout form', () => {
        officioPackagesPage.ProSelectClick()
        officioPackagesPage.NextClick()
       
        officioCheckoutPage.salutation('Mr.')
        officioCheckoutPage.name('Joe')
        officioCheckoutPage.lastName('Smith')
        officioCheckoutPage.companyName('ACME')
        officioCheckoutPage.phone1('(604)777-888-0000')
        officioCheckoutPage.companyEmail('joe@smith.com')
        officioCheckoutPage.address('123 Oak Road')
        officioCheckoutPage.city('Vancouver')
        officioCheckoutPage.province('British Columbia')
        officioCheckoutPage.country('Canada')
        officioCheckoutPage.zip('H4R2W9')
        officioCheckoutPage.ccType('Visa')
        officioCheckoutPage.ccNumber('4520111122223333')
        officioCheckoutPage.ccExpMonth('01 - January')
        officioCheckoutPage.ccExpYear('2022')
        officioCheckoutPage.ccName('Joe Smith')
       
        officioCheckoutPage.NextClick()
    })

    it('should complete ultimate checkout form', () => {
        officioPackagesPage.UltimateSelectClick()
        officioPackagesPage.NextClick()
       
        officioCheckoutPage.salutation('Mr.')
        officioCheckoutPage.name('Joe')
        officioCheckoutPage.lastName('Smith')
        officioCheckoutPage.companyName('ACME')
        officioCheckoutPage.phone1('(604)777-888-0000')
        officioCheckoutPage.companyEmail('joe@smith.com')
        officioCheckoutPage.address('123 Oak Road')
        officioCheckoutPage.city('Vancouver')
        officioCheckoutPage.province('British Columbia')
        officioCheckoutPage.country('Canada')
        officioCheckoutPage.zip('H4R2W9')
        officioCheckoutPage.ccType('Visa')
        officioCheckoutPage.ccNumber('4520111122223333')
        officioCheckoutPage.ccExpMonth('01 - January')
        officioCheckoutPage.ccExpYear('2022')
        officioCheckoutPage.ccName('Joe Smith')

        officioCheckoutPage.NextClick()
    })

})

describe('validate invalid checkout form submission', () => {
    const officioHomePage = new OfficioHomePage
    const officioPackagesPage = new OfficioPackagesPage
    const officioCheckoutPage = new OfficioCheckoutPage
        
    beforeEach(() => {
        officioHomePage.Navigate()
        officioHomePage.SignUp()
            
        })
    
          
    it('should validate empty credit card required field', () => {
        officioPackagesPage.SoloSelectClick()
        officioPackagesPage.NextClick()
        officioCheckoutPage.NextClick()
        officioCheckoutPage.ccNumber_NullValidation()
        
    })
    
    it('should verify invalid credit card entry', () => {
        officioPackagesPage.SoloSelectClick()
        officioPackagesPage.NextClick()
        officioCheckoutPage.ccNumber('4520111122223333')
        officioPackagesPage.NextClick()
        officioCheckoutPage.ccNumber_InvalidValidation()
       
    })

}) 



