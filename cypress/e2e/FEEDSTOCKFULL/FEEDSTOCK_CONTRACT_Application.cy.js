describe('FEEDSTOCK CONTRACT Application', () => {
    beforeEach(() => {
      cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
      cy.visit("http://web04/TEST-TFSContractManagement/Pages/Deals")
    })
   // afterEach (() => {
     // cy.screenshot()
    
    //})
  it('FEEDSTOCK CONTRACT Application', () => {
    
    cy.get('#lnkbtnAdd').click(); // ADD NEW DEAL
     
    cy.get('.p-l-5 > .btn-group > .btn > .filter-option').click().wait(2000); // Great Plains Company
    cy.get('.p-l-5 > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a').click();

    cy.get('#cphContent_rblDealType > tbody > tr > :nth-child(1) > label').click().wait(2000); // deal type

   cy.get('#txtBxDealTitle').type("TESTING TARGRAY -FEEDSTOCK CONTRACT Application By ANANDA MALLIPUDI").wait(2000); // TITLE
   cy.get(':nth-child(3) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click();
   cy.get(':nth-child(3) > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a').click();

   cy.get(':nth-child(2) > :nth-child(3) > :nth-child(2) > .form-line > .btn-group > .btn > .filter-option').click();
   cy.get(':nth-child(2) > :nth-child(3) > :nth-child(2) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a').click();
   cy.get(':nth-child(3) > .form-line > .btn-group > .btn > .filter-option').click();// trading rules dropdown
   cy.get(':nth-child(3) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a > .text').click();
   cy.get('[style="margin-right: 2px;"] > .form-line > .btn-group > .btn').click();// quality survey dropdown
   cy.get('[style="margin-right: 2px;"] > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a').click();
  
   cy.get(':nth-child(5) > .form-line > .btn-group > .btn > .filter-option').click(); // quantity survey dropdown
   cy.get(':nth-child(5) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a > .text').click();

   cy.get(':nth-child(6) > .form-line > .btn-group > .btn > .filter-option').click();// method of transport
   cy.get(':nth-child(6) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a').click();

   cy.get(':nth-child(7) > .form-line > .btn-group > .btn > .filter-option').click();// insepection cost
   cy.get(':nth-child(7) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a > .text').click();

   cy.get('#tbxCounterpartyContract').type("testing targray testing targrayIFCs Discount Note Program was launched in June 2009 to complement IFCs Global MTN Program. The program provides an additional funding and liquidity management tool for IFC to support our trade finance and supply chain initiatives, and to expand the availability of short-term local currency finance. Our discount notes offer a high-quality, short-term investment opportunity in U.S. dollar and Chinese renminbi."); //counterparty contract

   cy.get('#tbxContractTerms').type(" Automation Test Contract Terms party contract There ar a few other things thThere are a few other things that you’ll want to iThere are a few other things that you’ll want to ijjknjknvd jkTHE PRESIDENT: Happy New Year, everybody. Before the New Year, I mentioned that I had given the charge to my Attorney General, FBI Director, Deputy Director at the ATF, and personnel at my White House to work together to see what more we could do to prevent a scourge of gun violence in this country.vvdfbgrtdjhyufjkuikliul,kiulkkjljI think everybody here is all too familiar with the statistics. We have tens of thousands of people every single year who are killed by guns. We have suicides that are committed by firearms at a rate that far exceeds other countries. We have a frequency of mass shootings that far exceeds other countries in frequencyAnd although it is my strong belief that for us to get our complete arm around the problem Congress needs to act, what I asked my team to do is to see what more we could do to strengthen our enforcement and prevent guns MY NAME IS ANANDA MOHAN MALLIPUDI-----Automation Test Counter party contract There are a few other things thAutomation Test Contract Terms party contract There are a few other things thThere are a few other things that you’ll want to iThere are a few other things that you’ll want to ijjknjknvd jkTHE PRESIDENT: Happy New Year, everybody. Before the New Year, I mentioned that I had given the charge to my Attorney General, FBI Director, Deputy Director at the ATF, and personnel at my White House to work together to see what more we could do to prevent a scourge of gun violence in this country.vvdfbgrtdjhyufjkuikliul,kiulkkjljI think everybody here is all too familiar with the statistics. We have tens of thousands of people every single year who are killed by guns. We have suicides that are committed by firearms at a rate that far exceeds other countries. We have a frequency of mass shootings that far exceeds other countries in frequencyAnd although it is my strong belief that for us to get our complete arm around the problem Congress needs to act, what I asked my team to do is to see what more we could do to strengthen our enforcement and prevent guns MY NAME IS ANANDA MOHAN MALLIPUDI-----Automation Test Counter party contract There are a few other things thAutomation Test Contract Terms party contract There are a few other things thThere are a few other things that you’ll want to iThere are a few other things that you’ll want to ijjknjknvd jkTHE PRESIDENT: Happy New Year, everybody. Before the New Year, I mentioned that I had given the charge to my Attorney General, FBI Director, Deputy Director at the ATF, and personnel at my White House to work together to see what more we could do to prevent a scourge of gun violence in this country.vvdfbgrtdjhyufjkuikliul,kiulkkjljI think everybody here is all too familiar with the statistics. We have tens of thousands of people every single year who are killed by guns. We have suicides that are committed by firearms at a rate that far exceeds other countries. We have a frequency of mass shootings that far exceeds other countries in frequencyAnd although it is my strong belief that for us to get our complete arm around the problem Congress needs to act, what I asked my team to do is to see what more we could do to strengthen our enforcement and prevent guns MY NAME IS GAURAV-----Automation Test Counter party contract There are a few other things thAutomation Test Contract Terms party contract There are a few other things thThere are a few other things that you’ll want to iThere are a few other things that you’ll want to ijjknjknvd jkTHE PRESIDENT: Happy New Year, everybody. Before the New Year, I mentioned that I had given the charge to my Attorney General, FBI Director, Deputy Director at the ATF, and personnel at my White House to work together to see what more we could do to prevent a scourge of gun violence in this country.vvdfbgrtdjhyufjkuikliul,kiulkkjljI think everybody here is all too familiar with the statistics. We have tens of thousands of people every single year who are killed by guns. We have suicides that are committed by firearms at a rate that far exceeds other countries. We have a frequency of mass shootings that far exceeds other countries in frequencyAnd although it is my strong belief that for us to get our complete arm around the problem Congress needs to act, what I asked my team to do is to see what more we could do to strengthen our enforcement and prevent guns MY NAME IS GAURAV-----Automation Test Counter party contract There are a few other things thAutomation Test Contract Terms party contract There are a few other things thThere are a few other things that you’ll want to iThere are a few other things that you’ll want to ijjknjknvd jkTHE PRESIDENT: Happy New Year, everybody. Before the New Year, I mentioned that I had given the charge to my Attorney General, FBI Director, Deputy Director at the ATF, and personnel at my White House to work together to see what more we could do to prevent a scourge of gun violence in this country.vvdfbgrtdjhyufjkuikliul,kiulkkjljI think everybody here is all too familiar with the statistics. We have tens of thousands of people every single year who are killed by guns. We have suicides that are committed by firearms at a rate that far exceeds other countries. We have a frequency of mass shootings that far exceeds other countries in frequencyAnd although it is my strong belief that for us to get our complete arm around the problem Congress needs to act, what I asked my team to do is to see what more we could do to strengthen our enforcement and prevent guns MY NAME IS--ANANDA-----Automation Test Counter party contract There are a few other things thAutomation Test Contract Terms party contract There are a few other things thThere are a few other things that you’ll want to iThere are a few other things that you’ll want to ijjknjknvd jkTHE PRESIDENT: Happy New Year, everybody. Before the New Year, I mentioned that I had given the charge to my Attorney General, FBI Director, Deputy Director at the ATF, and personnel at my White House to work together to see what more we could do to prevent a scourge of gun violence in this country.vvdfbgrtdjhyufjkuikliul,kiulkkjljI think everybody here is all too familiar with the statistics. We have tens of thousands of people every single year who are killed by guns. We have suicides that are committed by firearms at a rate that far exceeds other countries. We have a frequency of mass shootings that far exceeds other countries in frequencyAnd although it is my strong belief that for us to get our complete arm around the problem Congress needs to act, what I asked my team to do is to see what more we could do to strengthen our enforcement and prevent guns MY NAME IS ANANDA-----Automation Test Counter party contract There are a few other things thAutomation Test Contract Terms party contract There are a few other things thThere are a few other things that you’ll want to iThere are a few other things that you’ll want to ijjknjknvd jkTHE PRESIDENT: Happy New Year, everybody. Before the New Year, I mentioned that I had given the charge to my Attorney General, FBI Director, Deputy Director at the ATF, and personnel at my White House to work together to see what more we could do to prevent a scourge of gun violence in this country.vvdfbgrtdjhyufjkuikliul,kiulkkjljI think everybody here is all too familiar with the statistics. We have tens of thousands of people every single year who are killed by guns. We have suicides that are committed by firearms at a rate that far exceeds other countries. We have a frequency of mass shootings that far exceeds other countries in frequencyAnd although it is my strong belief that for us to get our complete arm around the problem Congress needs to act, what I asked my team to do is to see what more we could do to strengthen  MY NAME IS ANANDA MALLIPUDI-----Automation8000LENGTH OK");//Contract Terms

   cy.get('#txtBxDealNotes').type(" IFC Discount Note Program was launched in June 2009 to complement IFC lobal MTN Program. The program provides an additional funding and liquidity management tool for IFC to support our trade finance and supply chain initiatives, and to expand the availability of short-term local currency finance. Our discount notes offer a high-quality, short-term investment opportunity in U.S. dollar and Chinese renminbi.IFC Discount Note Program was launched in June 2009 to complement IFC lobal MTN Program. The program provides an additional funding and liquidity management tool for IFC to support our trade finance and supply chain initiatives, and to expand the availability of short-term local currency finance. Our discount notes offer a high-quality, short-term investment opportunity in U.S. dollar and Chinese renminbi.IFC Discount Note Program was launched in June 2009 to complement IFC lobal MTN Program. The program provides an additional funding and liquidity management tool fo--LENGTH IS 1000");//DEAL NOTES
   cy.get('#tbxSpecialClause').type("Companies may also evaluate product quality based on various perspectives that show how different groups perceive the usefulness of a product. Perspectives to consider when assessing product quality include customer perspectives, manufacturing perspectives, product-based and value-based perspectives and transcendental perspectives, which perceive a products value in relation to its cost. Using these perspectives, you can define product quality according to");//SPECIALCLUASE
   
   cy.get('#pnlDealDetails > :nth-child(3)')// BROKER
  cy.get('#cphContent_rblBroker_Applicable > tbody > tr > :nth-child(1) > label').click();// BROKER YES RADIO BUTTON
   //cy.get('#cphContent_rblBroker_Applicable > tbody > tr > :nth-child(2) > label')// BROKER NO RADIO BUTTON
   cy.get('#cphContent_BrokerDiv1 > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click(); // BROKER IF RADIO BUTTON YES MEANS
    cy.get('#cphContent_BrokerDiv1 > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > a > .text').click();
   
    cy.get('#cphContent_BrokerDiv1 > :nth-child(2)').click()
    cy.get('#txtBxBrokerFee').type(1234567890123.12677)   // broker fee
    cy.get('#cphContent_BrokerDiv1 > :nth-child(3) > .form-line > .btn-group').click().type('MT')//broker fee per
    cy.get(':nth-child(3) > .form-line > .btn-group > .open > .dropdown-menu > .active > a').click()
    
    cy.get('#cphContent_BrokerDiv1 > :nth-child(4) > .form-line > .btn-group').click().type('USD') // currency
    cy.get(':nth-child(4) > .form-line > .btn-group > .open > .dropdown-menu > .active > a').click();

  cy.get('#txtBxBrokerNotes').type('There are a few other things that you’ll want to iThere are a few other things that you’ll want to ijjknjknvd jkTHE PRESIDENT: Happy New Year, everybody. Before the New Year, I mentioned that I had given the charge to my Attorney General, FBI Director, Deputy Director at the ATF, and personnel at my White House to work together to see what more we could do to prevent a scourge of gun violence in this country.vvdfbgrtdjhyufjkuikliul,kiulkkjljI think everybody here is all too familiar with the statistics. We have tens of thousands of people every single year who are killed by guns. We have suicides that are committed by firearms at a rate that far exceeds other countries. We have a frequency of mass shootings that far exceeds other countries in frequencyAnd although it is my strong belief that for us to get our complete arm around the problem Congress needs to act, what I asked my team to do is to see what more we could do to strengthen our enforcement '); // Broker notes

   cy.get('#cphContent_pnlCustomer > fieldset.full-border > .row > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click();// GP CUSTOMER
   cy.get('#cphContent_pnlCustomer > fieldset.full-border > .row > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a').click();

    // Payment Terms Notes
   cy.wait(1000);
   // cy.get('#cphContent_rblCustomerPaymentTermsOverride > tbody > tr > :nth-child(1) > label')// Override Payment Terms
   cy.get('#cphContent_rblCustomerPaymentTermsOverride > tbody > tr > :nth-child(1) > label').click(); // Override Payment Terms Yes radio button 
  // cy.get('#cphContent_rblVendorPaymentTermsOverride > tbody > tr > :nth-child(2) > label')// Override Payment Terms no radio button 
  cy.get('#txtBxCustomerPaymentTermsOverrideNotes').type('ANANDA MOHAN MALLIPUDI There are a few other things that you’ll want to include on your invoice. Including an invoice number will allow you and the customer to track invoices chronologically. You’ll also want to provide your contact information. If there are any disputes, the customer knows who to contact, and you can resolve the problem quickly. You can also indicate where you want the client to send a payment receipt.vknd');
  // cy.get('#cphContent_pnlSupplier > fieldset.full-border > .row > :nth-child(1) > .form-line > .btn-group > .btn')// Great Plains Supplier
  // cy.get('#cphContent_rblVendorPaymentTermsOverride > tbody > tr > :nth-child(1) > label')// Override Payment Terms Yes radio button
   // cy.get('#cphContent_rblVendorPaymentTermsOverride > tbody > tr > :nth-child(2) > label')// Override Payment Terms no radio button 
   
   cy.get('#cphContent_pnlProduct > fieldset.full-border > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click();// Product
   cy.get('#cphContent_pnlProduct > fieldset.full-border > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > a > .text').click();
   
   cy.get('#tbxProductQuality').type('Companies may also evaluate product quality based on various perspectives that show how different groups perceive the usefulness of a product. Perspectives to consider when assessing product quality include customer perspectives, manufacturing perspectives, product-based and value-based perspectives and transcendental perspectives, which perceive a product value in relation to its cost. Using these perspectives, you can define product quality according to');//Product Quality
   
   cy.get('#lnkSaveDeal').click();// SAVE DEAL

   cy.get('#cphContent_pnlSustainability > fieldset.full-border > :nth-child(2) > .col-lg-3 > .form-line > .btn-group > .btn > .filter-option').click();//suystainibilty certificate   
   cy.get('#cphContent_pnlSustainability > fieldset.full-border > :nth-child(2) > .col-lg-3 > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("NIS{enter}");  
   cy.get('#cphContent_pnlSustainability > fieldset.full-border > :nth-child(3) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click();//POS delivery  
   cy.get('#cphContent_pnlSustainability > fieldset.full-border > :nth-child(3) > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a > .text').click();cy.wait(4000);
   cy.get(':nth-child(3) > .row > .col-lg-2 > .form-line > .btn-group > .btn > .filter-option').click();
   cy.get(':nth-child(3) > .row > .col-lg-2 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a > .text').click();
   cy.get('#cblCountries > tbody > tr > :nth-child(1) > label').click()
   cy.get('#cblCountries > tbody > tr > :nth-child(2) > label').click()
   cy.get('#cblCountries > tbody > tr > :nth-child(3) > label').click()
   cy.get('#cblCountries > tbody > tr > :nth-child(4) > label').click()
   cy.get('#cblCountries > tbody > tr > :nth-child(5) > label').click()
   cy.get('#cblCountries > tbody > tr > :nth-child(6) > label').click()
   
   cy.get('#tbxSustainabilityNotes').type('A contract term is defined as any provision or term that forms part of a contract. Each of these terms provides a contractual obligation and if this is breached, then it can lead to litigation.A contract is one of the most common things used within a business. They help to define any new relationship or agreement. They can be lengthy in some cases, hundreds of pages but typically have the simple aim of establishing terms and conditions for each party');
  


   cy.get('#lnkUpdateDeal').click()

   cy.get('#lnkbtnEditDetails > .far').click() // STRIP EDIT CLICK

   // STRIP PAGE
   cy.get('#txtStripStartDate').type('2023-03-24').click({force: true})
   cy.get('#txtStripEndDate').type('2023-03-25').click({force: true})

   cy.get('#txtTitleTansferLocation').type(' NEW DELHI INDIA') // TitleTansferLocation
   cy.get('#cphContent_divTitleTransferState > .form-line > .btn-group > .btn > .filter-option').click() // Title Transfer Location
   cy.get('#cphContent_divTitleTransferState > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Utah{enter}")
   cy.get('#txtVolQuantity').type('27895769') // Quantity
   cy.get(':nth-child(3) > :nth-child(4) > .form-line > .btn-group > .btn > .filter-option').click()// UNIT OF MEASUERE
   cy.get(':nth-child(3) > :nth-child(4) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Truck{enter}")

   cy.get(':nth-child(5) > .form-line > .btn-group > .btn > .filter-option').click()// TOLERANCE
   cy.get(':nth-child(5) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("+/- 2%{enter}")

   cy.get(':nth-child(1) > :nth-child(4) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click()// INCO TERMS
   cy.get(':nth-child(1) > :nth-child(4) > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type('CIF{enter}')

   cy.get('#txtIncoTermLocation').type('SOUTH AFRICA') // INCO TERMS CITY
   cy.get('#cphContent_divIncoTermState > .form-line > .btn-group > .btn > .filter-option').click() // INCO TERMS LOCATION
   cy.get('#cphContent_divIncoTermState > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type('Maine{enter}')

 cy.get('#cphContent_divSaletype > .col-lg-2 > .form-line > .btn-group > .btn > .filter-option').click()  // SALE TYPE
 cy.get('#cphContent_divSaletype > .col-lg-2 > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type('Tank{enter}')

 cy.get('#lnkUpdateStrip').click()

//pricing
cy.get('#cphContent_rblstStripPricingType > tbody > tr > :nth-child(1) > label').click()
cy.get('.col-sm-2 > .form-line > .btn-group > .btn').click() // price index
cy.get('.col-sm-2 > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("argus{enter}")

cy.get('#cphContent_divPricingRowFour > :nth-child(2) > .form-line > .btn-group > .btn > .filter-option').click() // Price Index Currency
cy.get('#cphContent_divPricingRowFour > :nth-child(2) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type('USD{enter}')
cy.get('#txtbxBasis').type('1234567890123.12345').click()  //basis
cy.get('#cphContent_divPricingRowFour > :nth-child(5) > .form-line > .btn-group > .btn').click()  // Basis uom
cy.get('#cphContent_divPricingRowFour > :nth-child(5) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Truck{enter}")
cy.get('#cphContent_divPricingAt > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click() //Pricing At
cy.get('#cphContent_divPricingAt > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Pricing{enter}")
cy.get('#txtPricingWindowStart').type('2023-03-24').click({force: true})
cy.get('#txtPricingWindowEnd').type('2023-03-25').click({force: true})


cy.get('#cphContent_divPricingAt > :nth-child(3) > .form-line > .btn-group > .btn').click() //Holiday Convention
cy.get('#cphContent_divPricingAt > :nth-child(3) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Skip{enter}")
cy.get('#lnkbtnAddPricing').click() //Add Pricing

//Add frieght details
cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click() //Transport Mode
cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Demurrage{enter}")
cy.get('#txtFreightCost').type('1234567890123.13784')//Freight Cost  ///
cy.get(':nth-child(4) > :nth-child(2) > :nth-child(3) > .form-line > .btn-group > .btn > .filter-option').click()//Freight Cost Currency
cy.get(':nth-child(4) > :nth-child(2) > :nth-child(3) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("USD{enter}")

cy.get(':nth-child(2) > :nth-child(4) > .form-line > .btn-group > .btn > .filter-option').click()//Unit of Measure
cy.get(':nth-child(2) > :nth-child(4) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("MT{enter}")
cy.get('#tbxFromLocation').type('india')//From Location
cy.get('#tbxToLocation').type('south africa')//To Location
cy.get('#cphContent_rblCarrierInvoiceTargray > tbody > tr > :nth-child(1) > label').click()//Carrier Invoices Targray
 
cy.get('#lnkbtnAddTransport').click()//Add frieght   // 
//ADD DOCUMENTS
cy.get('.col-lg-4 > .form-line > .btn-group > .btn > .filter-option').click()
cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > .waves-effect > .text').click()
//cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > .selected > .waves-effect > .text')
cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect > .text').click()
cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > .waves-effect > .text').click()  
cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect > .text').click ()
cy.get('#lnkbtnAddUpdateDocument').click()
cy.get(':nth-child(1) > :nth-child(2) > #txtDocumentCost').type("456{enter}")
cy.get(':nth-child(1) > :nth-child(3) > .btn-group > .btn').type("flat{enter}")
cy.get(':nth-child(1) > :nth-child(4) > .btn-group > .btn').type("usd{enter}")
cy.get(':nth-child(1) > :nth-child(5) > #lnkbtnDocumentSave > .fas').click()
cy.get('[data-notify="message"]').should('have.text','Document detail updated successfully.')

cy.get(':nth-child(2) > :nth-child(2) > #txtDocumentCost').type("789{enter}")
cy.get(':nth-child(2) > :nth-child(3) > .btn-group > .btn').type("cbm{enter}")
cy.get(':nth-child(2) > :nth-child(4) > .btn-group > .btn').type("try{enter}")
cy.get(':nth-child(2) > :nth-child(5) > #lnkbtnDocumentSave > .fas').click()
cy.get('[data-notify="message"]').should('have.text','Document detail updated successfully.')


cy.get(':nth-child(3) > :nth-child(2) > #txtDocumentCost').type("NA{enter}")
cy.get(':nth-child(3) > :nth-child(3) > .btn-group > .btn').type("MT{enter}")
cy.get(':nth-child(3) > :nth-child(4) > .btn-group > .btn').type("usd{enter}")
cy.get(':nth-child(3) > :nth-child(5) > #lnkbtnDocumentSave > .fas').click()
cy.get('[data-notify="message"]').should('have.text','Document detail updated successfully.')

cy.get(':nth-child(4) > :nth-child(2) > #txtDocumentCost').type("852{enter}")
cy.get(':nth-child(4) > :nth-child(3) > .btn-group > .btn').type("gallon{enter}")
cy.get(':nth-child(4) > :nth-child(4) > .btn-group > .btn').type("eur{enter}")
cy.get(':nth-child(4) > :nth-child(5) > #lnkbtnDocumentSave > .fas').click()
cy.get('[data-notify="message"]').should('have.text','Document detail updated successfully.')


cy.get('#cphContent_Back').click()
cy.get('#lnkUpdateDeal').click()
cy.get('[data-notify="message"]').should('have.text','Deal Updated successfully.')
// STRIP PAGE
cy.get(':nth-child(1) > :nth-child(11) > #lnkbtnDuplicate > .far').click()//clone strip
cy.get('#lnkBtnCloneStrip').click()//generate strip
cy.get('[data-notify="message"]').should('have.text','New strip created successfully.')

cy.get('#lnkbtnAddStrip').click()//add new strip click
// STRIP PAGE
cy.get('#txtStripStartDate').type('2023-04-05').click({force: true})
cy.get('#txtStripEndDate').type('2023-04-06').click({force: true})

cy.get('#txtTitleTansferLocation').type(' HYDRABAD  INDIA') // TitleTansferLocation
cy.get('#cphContent_divTitleTransferState > .form-line > .btn-group > .btn > .filter-option').click() // Title Transfer Location
cy.get('#cphContent_divTitleTransferState > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Utah{enter}")
cy.get('#txtVolQuantity').type('9977') // Quantity
cy.get(':nth-child(3) > :nth-child(4) > .form-line > .btn-group > .btn > .filter-option').click()// UNIT OF MEASUERE
cy.get(':nth-child(3) > :nth-child(4) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Truck{enter}")

cy.get(':nth-child(5) > .form-line > .btn-group > .btn > .filter-option').click()// TOLERANCE
cy.get(':nth-child(5) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("+/- 2%{enter}")

cy.get(':nth-child(1) > :nth-child(4) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click()// INCO TERMS
cy.get(':nth-child(1) > :nth-child(4) > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type('CIF{enter}')

cy.get('#txtIncoTermLocation').type('NORTH KOREIA') // INCO TERMS CITY
cy.get('#cphContent_divIncoTermState > .form-line > .btn-group > .btn > .filter-option').click() // INCO TERMS LOCATION
cy.get('#cphContent_divIncoTermState > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type('Maine{enter}')

cy.get('#cphContent_divSaletype > .col-lg-2 > .form-line > .btn-group > .btn > .filter-option').click()  // SALE TYPE
cy.get('#cphContent_divSaletype > .col-lg-2 > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type('Tank{enter}')

cy.get('#lnkSaveStrip').click()

//pricing
cy.get('#cphContent_rblstStripPricingType > tbody > tr > :nth-child(1) > label').click()
cy.get('.col-sm-2 > .form-line > .btn-group > .btn').click() // price index
cy.get('.col-sm-2 > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("argus{enter}")

cy.get('#cphContent_divPricingRowFour > :nth-child(2) > .form-line > .btn-group > .btn > .filter-option').click() // Price Index Currency
cy.get('#cphContent_divPricingRowFour > :nth-child(2) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type('USD{enter}')
cy.get('#txtbxBasis').type('1234567890123.16845').click()  //basis
cy.get('#cphContent_divPricingRowFour > :nth-child(5) > .form-line > .btn-group > .btn').click()  // Basis uom
cy.get('#cphContent_divPricingRowFour > :nth-child(5) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Truck{enter}")
cy.get('#cphContent_divPricingAt > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click() //Pricing At
cy.get('#cphContent_divPricingAt > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Pricing{enter}")
cy.get('#txtPricingWindowStart').type('2023-04-05').click({force: true})
cy.get('#txtPricingWindowEnd').type('2023-04-06').click({force: true})


cy.get('#cphContent_divPricingAt > :nth-child(3) > .form-line > .btn-group > .btn').click() //Holiday Convention
cy.get('#cphContent_divPricingAt > :nth-child(3) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Skip{enter}")
cy.get('#lnkbtnAddPricing').click() //Add Pricing

//Add frieght details
cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click() //Transport Mode
cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Demurrage{enter}")
cy.get('#txtFreightCost').type('123456789012.54321')//Freight Cost  ///
cy.get(':nth-child(4) > :nth-child(2) > :nth-child(3) > .form-line > .btn-group > .btn > .filter-option').click()//Freight Cost Currency
cy.get(':nth-child(4) > :nth-child(2) > :nth-child(3) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("USD{enter}")

cy.get(':nth-child(2) > :nth-child(4) > .form-line > .btn-group > .btn > .filter-option').click()//Unit of Measure
cy.get(':nth-child(2) > :nth-child(4) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("MT{enter}")
cy.get('#tbxFromLocation').type('HYDRABAD')//From Location
cy.get('#tbxToLocation').type('ANDHRA PRADESH')//To Location
cy.get('#cphContent_rblCarrierInvoiceTargray > tbody > tr > :nth-child(1) > label').click()//Carrier Invoices Targray

cy.get('#lnkbtnAddTransport').click()//Add frieght   // 
//ADD DOCUMENTS
cy.get('.col-lg-4 > .form-line > .btn-group > .btn > .filter-option').click()
cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > .waves-effect > .text').click()
//cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > .selected > .waves-effect > .text')
cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect > .text').click()
cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > .waves-effect > .text').click()  
cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect > .text').click ()
cy.get('#lnkbtnAddUpdateDocument').click()
cy.get(':nth-child(1) > :nth-child(2) > #txtDocumentCost').type("687{enter}")
cy.get(':nth-child(1) > :nth-child(3) > .btn-group > .btn').type("gallon{enter}")
cy.get(':nth-child(1) > :nth-child(4) > .btn-group > .btn').type("eur{enter}")
cy.get(':nth-child(1) > :nth-child(5) > #lnkbtnDocumentSave > .fas').click()
cy.get('[data-notify="message"]').should('have.text','Document detail updated successfully.')

cy.get(':nth-child(2) > :nth-child(2) > #txtDocumentCost').type("357{enter}")
cy.get(':nth-child(2) > :nth-child(3) > .btn-group > .btn').type("MT{enter}")
cy.get(':nth-child(2) > :nth-child(4) > .btn-group > .btn').type("usd{enter}")
cy.get(':nth-child(2) > :nth-child(5) > #lnkbtnDocumentSave > .fas').click()
cy.get('[data-notify="message"]').should('have.text','Document detail updated successfully.')


cy.get(':nth-child(3) > :nth-child(2) > #txtDocumentCost').type("NA{enter}")
cy.get(':nth-child(3) > :nth-child(3) > .btn-group > .btn').type("cbm{enter}")
cy.get(':nth-child(3) > :nth-child(4) > .btn-group > .btn').type("try{enter}")
cy.get(':nth-child(3) > :nth-child(5) > #lnkbtnDocumentSave > .fas').click()
cy.get('[data-notify="message"]').should('have.text','Document detail updated successfully.')

cy.get(':nth-child(4) > :nth-child(2) > #txtDocumentCost').type("951{enter}")
cy.get(':nth-child(4) > :nth-child(3) > .btn-group > .btn').type("flat{enter}")
cy.get(':nth-child(4) > :nth-child(4) > .btn-group > .btn').type("usd{enter}")
cy.get(':nth-child(4) > :nth-child(5) > #lnkbtnDocumentSave > .fas').click()
cy.get('[data-notify="message"]').should('have.text','Document detail updated successfully.')
cy.get('#cphContent_Back').click()
cy.get('#lnkUpdateDeal').click()
 //upload documents
 cy.get('#cphContent_pnlUploadDocuments > fieldset.full-border > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click()
 cy.get('#cphContent_pnlUploadDocuments > fieldset.full-border > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a').click()
 cy.get('#tbxDocumentNotes').type('Companies may also evaluate product quality based on various')
 cy.get('#cphContent_fuUploadDocuments').attachFile('TPTS-0405 (4).pdf')
 cy.get('#btnUpload').click()
cy.get('#lnkSubmitForPublishNotify').click()// SUBMIT FOR PUBLISH
cy.get('[data-notify="message"]').should('have.text','Deal submitted for publish successfully')

  } )
  
} )