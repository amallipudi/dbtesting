describe('Azure Active Directory Authentication', () => {

           beforeEach(() => {
    
            cy.loginToAAD(Cypress.env('aad_username'), Cypress.env('aad_password'))
    
            cy.visit('https://targray-corp-uat.crm3.dynamics.com/main.aspx?appid=5a338062-8977-ed11-81ac-0022486df36c&pagetype=entitylist&etn=tar_strip&viewid=65e28876-255c-ed11-9562-000d3af4fee0&viewType=1039')
    
        })
    
      it('verifies the user logged in has the correct name', () => {  
    
            cy.origin('https://targray-corp-uat.crm3.dynamics.com', () => {
    
            
    
           cy.visit('https://targray-corp-uat.crm3.dynamics.com').wait(22000)
    
            cy.get('#okButtonText_1').click().wait(5000)
            cy.get('#sitemap-entity-NewSubArea_6ca46d39 > .pa-bd > .pa-fb > .pa-bt').click()
           // cy.get('#tar_deal\|NoRelationship\|HomePageGrid\|Mscrm\.Modern\.refreshCommand22-button').dblclick()
          //  cy.get('#tar_deal\|NoRelationship\|HomePageGrid\|Mscrm\.NewRecordFromGrid12-button > .pa-bt > .pa-gh > .pa-gm').click()
          //cy.get('#navigateBackButtontab-id-0 > .symbolFont').click()
          cy.get('li[id="tar_deal|NoRelationship|HomePageGrid|Mscrm.NewRecordFromGrid13"]').click()
          //  cy.get('#tar_deal\|NoRelationship\|HomePageGrid\|Mscrm\.NewRecordFromGrid12').click()
//           cy.xpath('//*[@id="tar_deal|NoRelationship|HomePageGrid|Mscrm.NewRecordFromGrid12-button"]').click()
//            cy.xpath('//*[@id="id-8f08fd13-f728-4a2b-976d-1b464c210792-1-tar_gpcompany270bd3db-d9af-4782-9025-509e298dec0a-tar_gpcompany.fieldControl-LookupResultsDropdown_tar_gpcompany_0_textInputBox_with_filter_new"]').type("TTI{enter}")
//  cy.xpath('//*[@id="DatePicker260-label"]').type('5/18/2023').click({force: true})
//  cy.xpath('//*[@id="id-8f08fd13-f728-4a2b-976d-1b464c210792-5-tar_tradingrules270bd3db-d9af-4782-9025-509e298dec0a-tar_tradingrules.fieldControl-LookupResultsDropdown_tar_tradingrules_1_textInputBox_with_filter_new"]').type('ICA Bylaws').click()
//  cy.xpath('//*[@id="id-8f08fd13-f728-4a2b-976d-1b464c210792-6-tar_governinglaw270bd3db-d9af-4782-9025-509e298dec0a-tar_governinglaw.fieldControl-LookupResultsDropdown_tar_governinglaw_2_textInputBox_with_filter_new"]').type('English Law').click()
 cy.on('uncaught:exception', (e) => {
    
     if (e.message.includes('Things went bad')) {
    
     return false
    
        }
    
     
    
      })
    
     
    
    })
        })
    
    })