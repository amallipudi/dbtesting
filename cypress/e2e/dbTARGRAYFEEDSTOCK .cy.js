
describe('Example to Demonstrate SQL Database Testing in Cypress', () => {
    // beforeEach(() => {
    //     cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
    //     cy.visit("http://web04/")
    //     })
it('Verify THE DEAL NUMBER', function () {
     
    cy.task("queryTestDb","select * from TFS.CM_Deals Where Dealnumber='TFSS-0023'").then((result) => {
      
    expect(result);
    console.log(result)
        })
        cy.task('queryTestDb', `SELECT Company FROM  TFS.CM_Deals Where Dealnumber="TFSS-0023"`).then((result) => {
            expect(result.Company.to.equal('2')
       
        )})
    });
}
)    
    