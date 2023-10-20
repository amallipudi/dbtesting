class home_managedealpage
{
    visit()
    { 
        beforeEach(() => {
            cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
            cy.visit("http://web04/TEST-TFSContractManagement/Pages/Deals")
            })
    }
    addnewdeal_button()
    {
    const b=cy.get('img').should("be.visible").get('#lnkbtnAdd').should('not.be.disabled').get('#lnkbtnAdd')
    b.click().title().should('eq','Feedstock Contract Management | Manage Deal')
}
gpclick_button()
{ 
    const gp= cy.get('.p-l-5 > .btn-group > .btn > .filter-option').click().get('.p-l-5 > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a')// Great Plains Company
      gp.click().get('#cphContent_ltrDpCompany').should('contain', 'Great Plains Company:').get('.p-l-5 > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a').should('not.be.disabled').get('#cphContent_ltrDpCompany').should('contain', 'Great Plains Company:')
}
dealt_radiobutton()
{
    const dt= cy.get('#cphContent_lblDealtype').should('contain', 'Deal Type').get('#cphContent_rblDealType > tbody > tr > :nth-child(1) > label').should("be.visible").get('#cphContent_lblDealTitle').should('contain', 'Title').get('#cphContent_rblDealType > tbody > tr > :nth-child(1) > label').should('have.lengthOf', 1).get('#cphContent_rblDealType > tbody > tr > :nth-child(1) > label')// deal type
   dt.click().wait(2000); 
}
title_input()
{
    const tl= cy.get('#txtBxDealTitle')
 tl.type("TESTING TARGRAY -FEEDSTOCK CONTRACT Application By ANANDA MALLIPUDI").invoke('val').should('not.have.lengthOf', 102) // TITLE
}
country_dropdown()
{
    const coun= cy.get(':nth-child(3) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click().get(':nth-child(3) > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a')
 coun.click().get('#cphContent_lblCountry').should('contain', 'Country');//country
}
Governinglaw_dropdown()
{
    const gl= cy.get(':nth-child(2) > :nth-child(3) > :nth-child(2) > .form-line > .btn-group > .btn > .filter-option').click().get(':nth-child(2) > :nth-child(3) > :nth-child(2) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a')
gl.click().get('#cphContent_lblGoverningLaw').should('contain', 'Governing Law')
}
tradingrules_dropdown()
{
    const tr= cy.get(':nth-child(3) > .form-line > .btn-group > .btn > .filter-option').click().get(':nth-child(3) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a > .text')
tr.click().get('#cphContent_lblTradingRules').should('contain', 'Trading Rules');
}
qualitysurvey_dropdown()
{
    const qs= cy.get('[style="margin-right: 2px;"] > .form-line > .btn-group > .btn').click().get('[style="margin-right: 2px;"] > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a')
qs.click().get('#cphContent_lblQuality').should('contain', 'Quality Survey');
}
quantitysurvey_dropdown()
{
    const qns= cy.get(':nth-child(5) > .form-line > .btn-group > .btn > .filter-option').click().get(':nth-child(5) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a > .text')
qns .click().get('#cphContent_lblQuantity').should('contain', 'Quantity Survey');
}
methodoftransport_dropdown()
{
    const mot= cy.get(':nth-child(6) > .form-line > .btn-group > .btn > .filter-option').click().get(':nth-child(6) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a')
mot.click().get('#cphContent_lblMethodTransport').should('contain', 'Method of Transport');
}
insepectioncost_dropdown()
{
    const ic= cy.get(':nth-child(7) > .form-line > .btn-group > .btn > .filter-option').click().get(':nth-child(7) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a > .text')
ic.click().get('#cphContent_lblInspectionCost').should('contain', 'Inspection Cost');
}
counterpartycontract_input()
{
    const cc= cy.get('#tbxCounterpartyContract')
    cc.type("testing targray testing targrayIFCs Discoun ").invoke('val').should('not.have.lengthOf', 102).get('#cphContent_lblCounterpartyContract').should('contain', 'Counterparty Contract');
}
ContractTerms_input()
{
    const ct= cy.get('#tbxContractTerms')
    ct.type(" Automation Test Contract Terms party contract There a").invoke('val').should('not.have.lengthOf', 102);
}
DEALNOTES_input()
{
    const dn=  cy.get('#txtBxDealNotes')
    dn.type(" IFC Discount Note Program was launched i ").invoke('val').should('not.have.lengthOf', 102).get(':nth-child(4) > :nth-child(2) > .form-label').should('contain', 'Deal Notes');
}
SPECIALCLUASE_input()
{
    const scu=  cy.get('#tbxSpecialClause')
    scu.type("Companies may also evaluate product quality b ").invoke('val').should('not.have.lengthOf', 102).get(':nth-child(5) > .col-lg-6 > .form-label').should('contain', 'Special Clause')
}
BROKER_radiobutton()
{
    const br=  cy.get('#pnlDealDetails > :nth-child(3)').get('#cphContent_rblBroker_Applicable > tbody > tr > :nth-child(1) > label')
br .click().get('#cphContent_lblBrokerSection').should('contain', 'Broker');// BROKER YES RADIO BUTTON //cy.get('#cphContent_rblBroker_Applicable > tbody > tr > :nth-child(2) > label')// BROKER NO RADIO BUTTON
}
BROKER2_dropdown()
{
    const bbr=  cy.get('#cphContent_BrokerDiv1 > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click().get('#cphContent_BrokerDiv1 > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > a > .text').click().get('#cphContent_BrokerDiv1 > :nth-child(2)')
  bbr.click()
}
brokerfee_input()
{
    const bfe=   cy.get('#txtBxBrokerFee')
    bfe.type(1234567890123.12677).invoke('val').should('not.have.lengthOf', 102)  
}
brokerfeeper_dropdown()
{
    const bfp=cy.get('#cphContent_BrokerDiv1 > :nth-child(3) > .form-line > .btn-group').click()
    bfp.type('MT').get(':nth-child(3) > .form-line > .btn-group > .open > .dropdown-menu > .active > a').click()
}
currency_dropdown()
{
    const cur= cy.get('#cphContent_BrokerDiv1 > :nth-child(4) > .form-line > .btn-group').click()
cur.type('USD').get(':nth-child(4) > .form-line > .btn-group > .open > .dropdown-menu > .active > a').click(); // currency
}
bokernotes_input()
{
    const bn= cy.get('#txtBxBrokerNotes')
    bn.type('There are a few other things that youll want to iThere are a few other things that y').invoke('val').should('not.have.lengthOf', 102)
}
GPCUSTOMER_dropdown()
{
    const gpc=  cy.get('#cphContent_pnlCustomer > fieldset.full-border > .row > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click().get('#cphContent_pnlCustomer > fieldset.full-border > .row > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a')
 gpc.click().get('#cphContent_lblGPCustomer').should('contain',  'Great Plains Customer');
}
OverridePaymentbutton_radiobutton()
{
    const opb=cy.get('#cphContent_rblCustomerPaymentTermsOverride > tbody > tr > :nth-child(1) > label')
    opb.click(); // Override Payment Terms Yes radio button 
   
}
OverridePaymentnotes_input()
{
    const opn=cy.get('#txtBxCustomerPaymentTermsOverrideNotes')
    opn.type('ANANDA MOHAN MALLIPUDI There are a few other things that y').invoke('val').should('not.have.lengthOf', 102)
}
 Productclick_dropdown()
{
    const product=cy.get('#cphContent_pnlProduct > fieldset.full-border > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click().get('#cphContent_pnlProduct > fieldset.full-border > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > a > .text')
    product.click();// Product
}
ProductQuality_input()
{
    const productquality=cy.get('#tbxProductQuality')
    productquality.type('Companies may also evaluate product quality based on various perspectives ').invoke('val').should('not.have.lengthOf', 102);//Product Quality
}
SAVEDEAL_button()
{
    const sd=cy.get('#lnkSaveDeal')
    sd.click().get('[data-notify="message"]').should('have.text','Deal saved successfully')
}
suystainibiltycertificate_dropdown()
{
    const sc=cy.get('#cphContent_pnlSustainability > fieldset.full-border > :nth-child(2) > .col-lg-3 > .form-line > .btn-group > .btn > .filter-option')
    sc.click() 
}
POSdelivery_dropdown()
{
    const pos=cy.get('#cphContent_pnlSustainability > fieldset.full-border > :nth-child(2) > .col-lg-3 > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("NIS{enter}").get('#cphContent_pnlSustainability > fieldset.full-border > :nth-child(3) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option') 
    pos.click() 
}
Counting_dropdown()
{
    const ct=cy.get('#cphContent_pnlSustainability > fieldset.full-border > :nth-child(3) > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a > .text')
           ct.click().wait(4000);
}
Countriess_checkbox()
{
    const css=cy.get(':nth-child(3) > .row > .col-lg-2 > .form-line > .btn-group > .btn > .filter-option').click().get(':nth-child(3) > .row > .col-lg-2 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a > .text').click();
    css.get('#cblCountries > tbody > tr > :nth-child(1) > label').click().get('#cblCountries > tbody > tr > :nth-child(2) > label').click().get('#cblCountries > tbody > tr > :nth-child(3) > label').click().get('#cblCountries > tbody > tr > :nth-child(4) > label').click().get('#cblCountries > tbody > tr > :nth-child(5) > label').click().get('#cblCountries > tbody > tr > :nth-child(6) > label').click()
}
SustainabilityNotes_input()
{
    const sn=cy.get('#tbxSustainabilityNotes')
    sn.type('A contract term is defined as any provision or term that  ').invoke('val').should('not.have.lengthOf', 1001)
}
UpdateDeal_button()
{
    const ud=cy.get('#lnkUpdateDeal')
    ud.click().get('[data-notify="message"]').should('have.text','Deal Updated successfully.').get('#btnUpload').should('not.be.enabled');
}
EditStripDetails_button()
{
    const esd=cy.get('#lnkbtnEditDetails > .far')
    esd.click() // STRIP EDIT CLICK
}
UploadDocuments_dropdown()
{
    const upds=cy.get('#cphContent_pnlUploadDocuments > fieldset.full-border > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .btn').get('#cphContent_pnlUploadDocuments > fieldset.full-border > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click().get('#cphContent_pnlUploadDocuments > fieldset.full-border > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a')
    upds.click()
} 
DocumentNotes_input()
{
    const dns=cy.get('#tbxDocumentNotes')
    dns.type('Companies may also evaluate product quality based on various').invoke('val').should('not.have.lengthOf', 1001)
} 
fuUploadDocuments_button()
{
    const fud=cy.get('#cphContent_fuUploadDocuments')
    fud.attachFile('TPTS-0405 (4).pdf')
} 
btnUpload_button()
{
    const bupl=cy.get('#btnUpload')
    bupl.click().get('[data-notify="message"]').should('have.text','Document uploaded successfully.')
} 
lnkUpdateDeal_button()
{
    const lupd=cy.get('#lnkUpdateDeal')
    lupd.click().get('[data-notify="message"]').should('have.text','Deal Updated successfully.')
} 
SubmitForPublishNotify_button()
{
    const spub=cy.get('#lnkSubmitForPublishNotify')
    spub.click().get('[data-notify="message"]').should('have.text','Deal submitted for publish successfully')// SUBMIT FOR PUBLISH
} 
}
export default home_managedealpage