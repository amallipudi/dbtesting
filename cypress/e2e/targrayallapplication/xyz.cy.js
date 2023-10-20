describe('Azure Active Directory Authentication', () => {
beforeEach(() => {
    cy.loginToAAD(Cypress.env('aad_username'), Cypress.env('aad_password'))
})
 it('verifies the Length & button', () => {
      cy.visit('https://targraytech.sharepoint.com/sites/BatteryDS/Invoices/Forms/AllItems.aspx')
      //cy.get('div[data-list-index="0"]').contains('').click()
      cy.get('span[id="header55-displayNameColumn_710-name"]').contains('Name').should("be.visible")
      cy.get('div[data-list-index="0"]').contains('TTI').should("be.visible")
      cy.get('div[data-list-index="0"]').contains('Battery').should("be.visible")
      cy.get('div[data-list-index="0"]').contains('100203').should("be.visible")
      cy.get('div[data-list-index="0"]').contains('3 SOEURS').should("be.visible")
      cy.get('div[data-list-index="0"]').contains('SI-306201').invoke('val').should('not.have.lengthOf', 21) 
      cy.get('div[data-list-index="0"]').contains('5/29/2023').invoke('val').should('not.have.lengthOf', 21) 
      cy.get('div[data-list-index="0"]').contains('SO-255455').invoke('val').should('not.have.lengthOf', 21) 
      cy.get('div[data-list-index="0"]').contains('BROKERAGE').invoke('val').should('not.have.lengthOf', 21) 
      cy.get('div[data-list-index="6"]').contains('11474-ANANDA 1234587A.docx').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
}) 
})