describe('BIOUS MARKET DIFFRENTIAL DATA ENTRY APP', () => {
    beforeEach(() => {
        cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
        cy.visit("http://web04/TEST-USMarketDifferentialDataEntry/")
        cy.viewport(1536, 720)
    })
       it('BIOUS MARKET DIFFRENTIAL DATA ENTRY  for testing ', () => { 
     cy.get('img').should("be.visible")
        cy.title().should('eq','BIO US Market Differential Data Entry')

          cy.get(':nth-child(2) > :nth-child(7) > .btn-group > .btn').click()
         cy.get(':nth-child(2) > :nth-child(7) > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a > .text').click()
         cy.get(':nth-child(2) > :nth-child(8) > #txtMonth_1').type("123.5879{enter}")
         cy.get(':nth-child(2) > .text-center > label').click()  //copy all
         cy.get(':nth-child(3) > [style="width: 13%;"] > #dtpClosedDate > #txtClosedDate').clear().type('2023-03-28').click({force: true})
         cy.get(':nth-child(3) > :nth-child(7) > .btn-group > .btn').click()
         cy.get(':nth-child(3) > :nth-child(7) > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a').click()
          cy.get(':nth-child(3) > :nth-child(8) > #txtMonth_1').type("879.1356{enter}")
          cy.get(':nth-child(3) > .text-center > label').click()  //copy all
          cy.get(':nth-child(4) > [style="width: 13%;"] > #dtpClosedDate > #txtClosedDate').clear().type('2023-03-27').click({force: true})
          cy.get(':nth-child(4) > :nth-child(7) > .btn-group > .btn').click()
          cy.get(':nth-child(4) > :nth-child(7) > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a').click()
          cy.get(':nth-child(4) > :nth-child(8) > #txtMonth_1').type("793.6598{enter}")
          cy.get(':nth-child(4) > .text-center > label').click()  //copy all
          cy.get(':nth-child(5) > [style="width: 13%;"] > #dtpClosedDate > #txtClosedDate').clear().type('2023-03-30').click({force: true})
          cy.get(':nth-child(5) > :nth-child(7) > .btn-group > .btn').click()
          cy.get(':nth-child(5) > :nth-child(7) > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a').click()
          cy.get(':nth-child(5) > :nth-child(8) > #txtMonth_1').type("321.67854{enter}")
          cy.get(':nth-child(5) > .text-center > label').click()  //copy all
          cy.get(':nth-child(6) > [style="width: 13%;"] > #dtpClosedDate > #txtClosedDate').clear().type('2023-04-01').click({force: true})
          cy.get(':nth-child(6) > :nth-child(7) > .btn-group').click()
          cy.get(':nth-child(6) > :nth-child(7) > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a').click()
          cy.get(':nth-child(6) > :nth-child(8) > #txtMonth_1').type("654.5234{enter}")
          cy.get(':nth-child(6) > .text-center > label').click()  //copy all

          cy.get(':nth-child(7) > [style="width: 13%;"] > #dtpClosedDate > #txtClosedDate').clear().type('2023-04-02').click({force: true})
          cy.get(':nth-child(7) > :nth-child(7) > .btn-group').click()
          cy.get(':nth-child(7) > :nth-child(7) > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a').click()
          cy.get(':nth-child(7) > :nth-child(8) > #txtMonth_1').type("852.14587{enter}")
          cy.get(':nth-child(7) > .text-center > label').click()  //copy all
          cy.get('#lnkbuttonSave2').click() // save 
          cy.get('#success_alert').should('have.text','\n                x\n                Data Saved Successfully\n            ')

          cy.get('.col-lg-10 > :nth-child(2) > .btn-group > .btn').click()
          cy.get('.col-lg-10 > :nth-child(2) > .btn-group > .open > .bs-searchbox > .form-control').type("fowler{enter}")
          cy.get(':nth-child(3) > .btn-group > .btn').click()
          cy.get(':nth-child(3) > .btn-group > .open > .bs-searchbox > .form-control').type("ca{enter}")
          cy.get('#txtFilterCloseDate').type('2023-03-28').click({force: true})
          cy.get('#lnkFilter').click() 
          cy.wait(5000)

          cy.get('.col-lg-10 > :nth-child(2) > .btn-group > .btn').click()
          cy.get('.col-lg-10 > :nth-child(2) > .btn-group > .open > .bs-searchbox > .form-control').type("baker{enter}")
          cy.get(':nth-child(3) > .btn-group > .btn').click()
          cy.get(':nth-child(3) > .btn-group > .open > .bs-searchbox > .form-control').type("ca{enter}")
          cy.get('#txtFilterCloseDate').clear().type('2023-03-29').click({force: true})
          cy.get('#lnkFilter').click()
          cy.wait(4000)

          cy.get('.col-lg-10 > :nth-child(2) > .btn-group > .btn').click()
          cy.get('.col-lg-10 > :nth-child(2) > .btn-group > .open > .bs-searchbox > .form-control').type("stock{enter}")
          cy.get(':nth-child(3) > .btn-group > .btn').click()
          cy.get(':nth-child(3) > .btn-group > .open > .bs-searchbox > .form-control').type("ca{enter}")
          cy.get('#txtFilterCloseDate').clear().type('2023-03-27').click({force: true})
          cy.get('#lnkFilter').click()
          cy.wait(4000)

          cy.get('.col-lg-10 > :nth-child(2) > .btn-group > .btn').click()
          cy.get('.col-lg-10 > :nth-child(2) > .btn-group > .open > .bs-searchbox > .form-control').type("st pau{enter}")
          cy.get(':nth-child(3) > .btn-group > .btn').click()
          cy.get(':nth-child(3) > .btn-group > .open > .bs-searchbox > .form-control').type("mn{enter}")
          cy.get('#txtFilterCloseDate').clear().type('2023-03-30').click({force: true})
          cy.get('#lnkFilter').click() 
          cy.wait(4000)

          cy.get('.col-lg-10 > :nth-child(2) > .btn-group > .btn').click()
          cy.get('.col-lg-10 > :nth-child(2) > .btn-group > .open > .bs-searchbox > .form-control').type("gene{enter}")
          cy.get(':nth-child(3) > .btn-group > .btn').click()
          cy.get(':nth-child(3) > .btn-group > .open > .dropdown-menu > [data-original-index="0"] > a').click()
          cy.get('#txtFilterCloseDate').clear().type('2023-04-01').click({force: true})
          cy.get('#lnkFilter').click()
          cy.wait(4000)

          cy.get('.col-lg-10 > :nth-child(2) > .btn-group > .btn').click()
          cy.get('.col-lg-10 > :nth-child(2) > .btn-group > .open > .bs-searchbox > .form-control').type("generic tme{enter}")
          cy.get('#txtFilterCloseDate').clear().type('2023-04-02').click({force: true})
          cy.get('#lnkFilter').click()
          cy.wait(4000)

          cy.get('img').should("be.visible")
        cy.title().should('eq','BIO US Market Differential Data Entry')
          
          expect(true).to.equal(true)         
} )
} )