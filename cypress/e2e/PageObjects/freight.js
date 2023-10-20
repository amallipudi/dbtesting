class freight
{
    visit()
    { 
        beforeEach(() => {
            cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
            cy.visit("http://web04/TEST-TFSContractManagement/Pages/Deals")
            })
    }
     
TransportMode_dropdown()
{
    const tm= cy.get('#cphContent_lblTransportMode').should('contain', 'Transport Mode').get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click().get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control')
    tm.type("Demurrage{enter}")
} 
FreightCost_input()
{
    const frc= cy.get('#cphContent_lblFreightCost').should('contain', 'Freight Cost').get('#txtFreightCost')
    frc.type('1234567890123.12345').invoke('val').should('not.have.lengthOf', 21)//Freight Cost
} 
FreightCostCurrency_dropdown()
{
    const fcc= cy.get('#cphContent_lblFreightCostCurrency').should('contain', 'Freight Cost Currency').get(':nth-child(4) > :nth-child(2) > :nth-child(3) > .form-line > .btn-group > .btn > .filter-option').click().get(':nth-child(4) > :nth-child(2) > :nth-child(3) > .form-line > .btn-group > .open > .bs-searchbox > .form-control')
       fcc.type("USD{enter}")
}
FreightCostPer_dropdown()
{
    const fcp= cy.get('#cphContent_lblFreightCostPer').should('contain', 'Unit of Measure').get(':nth-child(2) > :nth-child(4) > .form-line > .btn-group > .btn > .filter-option').click().get(':nth-child(2) > :nth-child(4) > .form-line > .btn-group > .open > .bs-searchbox > .form-control')
   fcp.type("MT{enter}")
} 
FromLocation_input()
{
    const fml=cy.get('#cphContent_lblFromLocation').should('contain', 'From Location').get('#tbxFromLocation')
    fml.type('india').invoke('val').should('not.have.lengthOf', 51)//From Location
} 
ToLocation_input()
{
    const tloc=cy.get('#cphContent_lblToLocation').should('contain', 'To Location').get('#tbxToLocation')
    tloc.type('south africa').invoke('val').should('not.have.lengthOf', 51)//To Location
} 
CarrierInvoiceTargray_radiobutton()
{
    const cit=cy.get('#cphContent_rblCarrierInvoiceTargray > tbody > tr > :nth-child(1) > label')
    cit.click()//Carrier Invoices Targray
} 
AddTransport_button()
{
    const addt= cy.get('#lnkbtnAddTransport')
   addt .click()//Add frieght
} 
}
export default freight