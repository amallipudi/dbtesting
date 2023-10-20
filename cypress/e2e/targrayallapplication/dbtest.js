
describe('Example to Demonstrate SQL Database Testing in Cypress', () => {
    it('Verify THE DEAL NUMBER', function () {
        cy.task('log', `Select (*) FROM [TFS].[CM_Deals] WHERE DealNumber = "TFSS-0023"`).then((result) => {
            cy.log("First row validation").then((result) => {
           // expect(result[0].rowCount).to.equal(1)
        expect(result)
            })
        });
        });
        })