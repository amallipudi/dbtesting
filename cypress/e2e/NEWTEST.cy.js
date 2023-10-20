describe('Azure Active Directory Authentication', () => {
 
       beforeEach(() => {
        cy.loginToAAD(Cypress.env('aad_username'), Cypress.env('aad_password'))
        cy.visit('https://targray-corp-uat.crm3.dynamics.com/main.aspx?appid=5a338062-8977-ed11-81ac-0022486df36c&pagetype=entitylist&etn=tar_strip&viewid=65e28876-255c-ed11-9562-000d3af4fee0&viewType=1039')
        Cypress.on('uncaught:exception', (err, runnable, promise) => {
          // when the exception originated from an unhandled promise
          // rejection, the promise is provided as a third argument
          // you can turn off failing the test in this case
          if (promise) {
            return false
          }
          // we still want to ensure there are no other unexpected
          // errors, so we let them fail the test
        })
      })
  it('verifies the user logged in has the correct name', () => {   
        cy.origin('https://targray-corp-uat.crm3.dynamics.com', () => {
cy.visit('https://targray-corp-uat.crm3.dynamics.com').wait(15000)
  //cy.get('#okButtonText_1').click().wait(5000)<button class="dayButton-512 dayIsToday-513 ms-CalendarDay-dayIsToday" aria-label="19, May, 2023" id="id__270" type="button" tabindex="-1" data-is-focusable="false"><span aria-hidden="true">19</span></button>
  cy.get('#sitemap-entity-NewSubArea_6ca46d39 > .pa-bd > .pa-fb > .pa-bt').click()
 cy.get('li[id="tar_deal|NoRelationship|HomePageGrid|Mscrm.NewRecordFromGrid11"]').click() 
 cy.get('input[id="id-8f08fd13-f728-4a2b-976d-1b464c210792-1-tar_gpcompany270bd3db-d9af-4782-9025-509e298dec0a-tar_gpcompany.fieldControl-LookupResultsDropdown_tar_gpcompany_0_textInputBox_with_filter_new"]').clear().type("TCD").get('ul[id="id-8f08fd13-f728-4a2b-976d-1b464c210792-1-tar_gpcompany270bd3db-d9af-4782-9025-509e298dec0a-tar_gpcompany.fieldControl-LookupResultsDropdown_tar_gpcompany_0_tab_0"]').click()
 cy.get('input[id="id-8f08fd13-f728-4a2b-976d-1b464c210792-5-tar_tradingrules270bd3db-d9af-4782-9025-509e298dec0a-tar_tradingrules.fieldControl-LookupResultsDropdown_tar_tradingrules_1_textInputBox_with_filter_new"]').clear().type('English Law').get('li[id="id-8f08fd13-f728-4a2b-976d-1b464c210792-5-tar_tradingrules270bd3db-d9af-4782-9025-509e298dec0a-tar_tradingrules.fieldControl-LookupResultsDropdown_tar_tradingrules_1_resultsContainer_0_0"]').click()
 cy.get('input[id="id-8f08fd13-f728-4a2b-976d-1b464c210792-6-tar_governinglaw270bd3db-d9af-4782-9025-509e298dec0a-tar_governinglaw.fieldControl-LookupResultsDropdown_tar_governinglaw_2_textInputBox_with_filter_new"]').clear().type('English Law').get('li[id="id-8f08fd13-f728-4a2b-976d-1b464c210792-6-tar_governinglaw270bd3db-d9af-4782-9025-509e298dec0a-tar_governinglaw.fieldControl-LookupResultsDropdown_tar_governinglaw_2_resultsContainer_0_0"]').click()
 cy.get('input[aria-label="Date of Agreement Date"]').clear()
cy.get('td[aria-current="date"]').click()
cy.get('div[id="id-8f08fd13-f728-4a2b-976d-1b464c210792-25-tar_broker270bd3db-d9af-4782-9025-509e298dec0a-tar_broker.fieldControl-Lookup_tar_broker_3_BasicContainer"]').clear().type("USTAR FIB{enter}").get('li[id="id-8f08fd13-f728-4a2b-976d-1b464c210792-25-tar_broker270bd3db-d9af-4782-9025-509e298dec0a-tar_broker.fieldControl-LookupResultsDropdown_tar_broker_3_resultsContainer_0_0"]').click()
cy.get('input[id="id-8f08fd13-f728-4a2b-976d-1b464c210792-37-tar_greatplancustomer270bd3db-d9af-4782-9025-509e298dec0a-tar_greatplancustomer.fieldControl-LookupResultsDropdown_tar_greatplancustomer_6_textInputBox_with_filter_new"]').clear().type("TAMISHNA SYNTHETICS LIMITED").get('li[id="id-8f08fd13-f728-4a2b-976d-1b464c210792-37-tar_greatplancustomer270bd3db-d9af-4782-9025-509e298dec0a-tar_greatplancustomer.fieldControl-LookupResultsDropdown_tar_greatplancustomer_6_resultsContainer_0_0"]').click()

Cypress.on('uncaught:exception', (err, runnable) => { 
  return false
  });
})

})

})