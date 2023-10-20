class stripinfo
{
    visit()
    { 
        beforeEach(() => {
            cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
            cy.visit("http://web04/TEST-TFSContractManagement/Pages/Deals")
            })
    }
     
StripStartDate_datepicker()
{
    const ssd=cy.get('#cphContent_lblStripStartDate').should('contain', 'Start Date').get('#txtStripStartDate')
    ssd.type('2023-04-24').click({force: true}) 
}
StripEndDate_datepicker()
{
    const sed=cy.get('#cphContent_lblStripEndDate').should('contain', 'End Date').get('#txtStripEndDate')
    sed.type('2023-04-25').click({force: true})
}
titleTansferLocation_input()
{
    const ttl=cy.get('#cphContent_lbltitleTansferLocation').should('contain', 'Title Transfer City').get('#txtTitleTansferLocation')
    ttl.type(' NEW DELHI INDIA').invoke('val').should('not.have.lengthOf', 101) // TitleTansferLocation
}
TitleTransferState_dropdown()
{
    const tts=cy.get('#cphContent_lblTitleTransferState').should('contain', 'Title Transfer Location').get('#cphContent_divTitleTransferState > .form-line > .btn-group > .btn > .filter-option').click() // Title Transfer Location.get('#cphContent_divTitleTransferState > .form-line > .btn-group > .open > .bs-searchbox > .form-control')
    tts.get('#cphContent_divTitleTransferState > .form-line > .btn-group > .open > .bs-searchbox > .form-control').click().type("Utah{enter}")
}
Quantity_input()
{
    const qty=cy.get('#cphContent_lblVolQuanity').should('contain', 'Quantity').get('#txtVolQuantity')
    qty.type('27895769') // Quantity
}
UnitOfMeasure_dropdown()
{
    const uom=cy.get('#cphContent_lblUOM').should('contain', 'Unit Of Measure').get(':nth-child(3) > :nth-child(4) > .form-line > .btn-group > .btn > .filter-option').click().get(':nth-child(3) > :nth-child(4) > .form-line > .btn-group > .open > .bs-searchbox > .form-control')
    uom.type("Truck{enter}")
}
Tolerance_dropdown()
{
    const tlr=cy.get('#cphContent_lblTolerance').should('contain', 'Tolerance').get(':nth-child(5) > .form-line > .btn-group > .btn > .filter-option').click().get(':nth-child(5) > .form-line > .btn-group > .open > .bs-searchbox > .form-control')
    tlr.type("+/- 2%{enter}")
}
IncoTerms_dropdown()
{
    const ins=cy.get('#cphContent_lblIncoTerm').should('contain', 'Inco Terms').get(':nth-child(1) > :nth-child(4) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click().get(':nth-child(1) > :nth-child(4) > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control')
    ins.type('CIF{enter}')
}
IncoTermLocation_input()
{
    const itl=cy.get('#cphContent_lblIncoTermLocation').should('contain', 'Inco Term City').get('#txtIncoTermLocation')
    itl.type('SOUTH AFRICA')
}
IncoTermState_dropdown()
{
    const its=cy.get('#cphContent_lblIncoTermState').should('contain', 'Inco Terms Location').get('#cphContent_divIncoTermState > .form-line > .btn-group > .btn > .filter-option').click().get('#cphContent_divIncoTermState > .form-line > .btn-group > .open > .bs-searchbox > .form-control')
    its.type('Maine{enter}')
}
Saletype_dropdown()
{
    const stp=cy.get('#cphContent_divSaletype > .col-lg-2 > .form-line > .btn-group > .btn > .filter-option').click().get('#cphContent_divSaletype > .col-lg-2 > .form-line > .btn-group > .open > .bs-searchbox > .form-control')
   stp .type('Tank{enter}')
}
UpdateStrip_button()
{
    const ups=cy.get('#lnkUpdateStrip')
    ups.click()
} 
} 
export default stripinfo