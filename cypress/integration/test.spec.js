/// <reference types="cypress" />

// Best Practice: A page object should not have any assertions

import { TestPage } from "../page-objects/test-page"

describe('Google page tests', () => {
    
    const testpage = new TestPage


    it('should go to google home', () => {
       testpage.navigate()
       
    })  
    
    it('should search text', () => {
        testpage.search('OK!')
        
                    
     })  
 
}) 