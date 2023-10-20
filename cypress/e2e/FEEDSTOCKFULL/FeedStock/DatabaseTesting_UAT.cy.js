describe("DB TEsting_UAT", function()  { 

  /* beforeEach(() => {
        //cy.ntlm(["TAR-HOSQL01DEV"], Cypress.env('username') , Cypress.env('password'));
        cy.queryDb(`Select * FROM [TFS].[CM_Deals]`)
          
       //   cy.visit("http://web04/TEST-TFSContractManagement/Pages/Deals")
         //done()
        })*/
        
it("select from query", function(){
    //cy.ntlm(["web04"], Cypress.env('username') , Cypress.env('password1'));
//cy.task('queryDb', 'Select * FROM [TFS].[CM_Deals]', {timeout:1000000}).then((result) => {
    cy.sqlServer("Select * FROM [TFS].[CM_Deals]").then(data => {
        console.log(data);
        console.log('row count', data.length);
    });

   // cy.log("First row validation").then(() => {

       // expect(result[0].Company).to.equal("TIN");
    });
}

)





//})


//})