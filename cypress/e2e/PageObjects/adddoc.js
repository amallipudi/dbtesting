class adddoc
{
    visit()
    { 
        beforeEach(() => {
            cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
            cy.visit("http://web04/TEST-TFSContractManagement/Pages/Deals")
            })
    }
ADDDOCUMENTS_button()
{
    const addds= cy.get('#cphContent_lblDocumentSection').should('contain', 'Documents').get('#cphContent_lblDocumentType').should('contain', 'Document Type').get('.col-lg-4 > .form-line > .btn-group > .btn > .filter-option').click().get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect > .text').click().get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > .waves-effect > .text').click().get('#lnkbtnAddUpdateDocument')
        addds.click()
} 
DocumentCost_input()
{
    const dcst=cy.get(':nth-child(1) > :nth-child(2) > #txtDocumentCost')
    dcst.type("456{enter}")
} 
duom_dropdown()
{
    const duom=cy.get(':nth-child(1) > :nth-child(3) > .btn-group > .btn')
    duom.type("flat{enter}")
} 
documentcostcurrency_dropdown()
{
    const docc=cy.get(':nth-child(1) > :nth-child(4) > .btn-group > .btn')
    docc.type("usd{enter}")
} 
DocumentSave_button()
{
    const dosav=cy.get(':nth-child(1) > :nth-child(5) > #lnkbtnDocumentSave > .fas')
    dosav.click().get('[data-notify="message"]').should('have.text','Document detail updated successfully.')
} 
DocumentCosts_input()
{
    const dcsts=cy.get(':nth-child(2) > :nth-child(2) > #txtDocumentCost')
    dcsts.type("789{enter}")
} 
duoms_dropdown()
{
    const duoms=cy.get(':nth-child(2) > :nth-child(3) > .btn-group > .btn')
    duoms.type("cbm{enter}")
} 
documentcostcurrencys_dropdown()
{
    const doccs=cy.get(':nth-child(2) > :nth-child(4) > .btn-group > .btn')
    doccs.type("try{enter}")
} 
DocumentSave2_button()
{
    const dosav=cy.get(':nth-child(2) > :nth-child(5) > #lnkbtnDocumentSave > .fas')
    dosav.click().get('[data-notify="message"]').should('have.text','Document detail updated successfully.')
} 
backtomdpage_button()
{
    const bmdp=cy.get('#cphContent_Back')
    bmdp.click()
} 
}
export default adddoc