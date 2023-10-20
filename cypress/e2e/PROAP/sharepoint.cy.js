 
describe('Azure Active Directory Authentication', () => {
    beforeEach(() => {
        cy.loginToAAD(Cypress.env('aad_username'), Cypress.env('aad_password'))
       
    })
       it('verifies the Length & Clear button', () => {
        cy.visit('https://targraytech.sharepoint.com/sites/SolarDS')
        cy.wait(3000)
        cy.visit('https://targraytech.sharepoint.com/sites/SolarDS')
        //cy.visit('https://targraytech.sharepoint.com/sites/BatteryDS/')
         
      //cy.visit('https://targraytech.sharepoint.com/sites/BatteryDS/Invoices/Forms/AllItems.aspx')
       //cy.reload()
       /*cy.pageRefreshed()
        //#row54-0 > div.ms-DetailsRow-fields.fields-157 > div:nth-child(4) > div
        //cy.contains('100319-96352.pdf').dblclick()
       //cy.contains('Invoices').click().wait(6000)
       //cy.get('#row424-0 > .ms-DetailsRow-fields > [data-automation-key="displayNameColumn_710"]').click()
       //cy.get('#row478-0 > div.ms-DetailsRow-fields.fields-168 > div:nth-child(2) > div > div.fieldRendererRendererWithCommands_9ab02edc > div.nameFieldWidthOnHover_9ab02edc > span > span > button').click()
      // cy.get('#row515-0 > div.ms-DetailsRow-fields.fields-164 > div:nth-child(2) > div > div.fieldRendererRendererWithCommands_9ab02edc > div.nameFieldWidthOnHover_9ab02edc > span > span > button').click()
      //cy.get('div[class="ms-DetailsHeader-cell ms-DetailsHeader-cellIsCheck cellIsCheck-116"]')
      //cy.get('#row473-0-checkbox').click()
      //.get('div[class="ms-Check root-130"]').click()*/
       
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        
    
    }) 
    })
    
    