class pricing
{
    visit()
    { 
        beforeEach(() => {
            cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
            cy.visit("http://web04/TEST-TFSContractManagement/Pages/Deals")
            })
    }
     
PricingType_radiobutton()
{
    const pty= cy.get('#cphContent_rblstStripPricingType > tbody > tr > :nth-child(1) > label')//pricing type variable
    pty.click()
}
Priceindex_dropdown()
{
    const pid= cy.get('.col-sm-2 > .form-line > .btn-group > .btn').click().get('.col-sm-2 > .form-line > .btn-group > .open > .bs-searchbox > .form-control')
      pid.type("argus{enter}")
}
PriceIndexCurrency_dropdown()
{
    const pic=  cy.get('#cphContent_divPricingRowFour > :nth-child(2) > .form-line > .btn-group > .btn > .filter-option').click().get('#cphContent_divPricingRowFour > :nth-child(2) > .form-line > .btn-group > .open > .bs-searchbox > .form-control')
      pic.type('USD{enter}')
}
Basis_input()
{
    const bas=cy.get('#cphContent_lblFuelPricingIndex').should('contain', 'Basis').get('#txtbxBasis')
    bas.type('1234567890123.12345').invoke('val').should('not.have.lengthOf', 21)  //basis
}
Basisuom_dropdown()
{
    const basuom=cy.get('#cphContent_Label1').should('contain', 'Basis UOM').get('#cphContent_divPricingRowFour > :nth-child(5) > .form-line > .btn-group > .btn').click().get('#cphContent_divPricingRowFour > :nth-child(5) > .form-line > .btn-group > .open > .bs-searchbox > .form-control')
       basuom.type("Truck{enter}")
}
PricingAt_dropdown()
{
    const prat=cy.get('#cphContent_lblPricingAt').should('contain', 'Pricing At').get('#cphContent_divPricingAt > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click().get('#cphContent_divPricingAt > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control')
    prat.type("Pricing{enter}")
}
PricingWindowStart_datepicker()
{
    const pws=cy.get('#txtPricingWindowStart')
    pws.type('2023-03-24').click({force: true})
}
PricingWindowEnd_datepicker()
{
    const pws=cy.get('#txtPricingWindowEnd')
    pws.type('2023-03-25').click({force: true})
}
HolidayConvention_dropdown()
{
    const hc=cy.get('#cphContent_lblHolidayConvention').should('contain', 'Holiday Convention').get('#cphContent_divPricingAt > :nth-child(3) > .form-line > .btn-group > .btn').click().get('#cphContent_divPricingAt > :nth-child(3) > .form-line > .btn-group > .open > .bs-searchbox > .form-control')
   hc.type("Skip{enter}") //Holiday Convention
}
AddPricing_button()
{
    const aps= cy.get('#lnkbtnAddPricing')
    aps.click()
}  
}
export default  pricing 