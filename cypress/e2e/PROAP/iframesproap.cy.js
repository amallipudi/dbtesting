import 'cypress-iframe';
describe('Azure Active Directory Authentication', () => {
    beforeEach(() => {
    cy.loginToAAD(Cypress.env('aad_username'), Cypress.env('aad_password'))
   cy.visit('https://apps.powerapps.com/play/e/c4135715-1e02-e817-846b-2768f08b1ff3/a/551edba9-59da-47de-81f2-d581a759c521?tenantId=26422a3a-c74b-4d07-9e29-8d6ecf66fa8d#')
   // cy.visit('https://apps.powerapps.com/')
   cy.wait(38000)
    })

   it.only('verifies the user logged in has the correct name', () => {
    // cy.get('#fullscreen-app-host').its('0.contentDocument.body')
    // .then(cy.wrap)
    cy.get('#fullscreen-app-host')
             .should('be.visible')
             .then(($iframe) => {
                 const $body = $iframe.contents().find('body')
        
         cy.wrap($body)
         .find('#publishedCanvas > div > div.screen-animation.animated > div > div > div:nth-child(23) > div > div > div > div > input').type('654897')
        })
 it.only('verifies the user logged in has the correct name', () => {
  // cy.get('#fullscreen-app-host').its('0.contentDocument.body')
  // .then(cy.wrap)
  cy.get('#fullscreen-app-host')
           .should('be.visible')
           .then(($iframe) => {
               const $body = $iframe.contents().find('body')
      
       cy.wrap($body)
  
  //.find('#publishedCanvas > div > div.screen-animation.animated > div > div > div:nth-child(8)').click()
 // .find('#appmagic-dropdownFlyoutdropdown_siena_2fd25d313d1afb > div').find('.dropdown_siena_2fd25d313d1afb appmagic-dropdownList[id="appmagic-dropdownFlyoutdropdown_siena_2fd25d313d1afb_2"]').click()
 // body > div.drop.drop-element.drop-enabled.drop-abutted.drop-abutted-left.drop-element-attached-top.drop-element-attached-left.drop-target-attached-bottom.drop-target-attached-left.drop-open.drop-open-transitionend.drop-after-open
 
  //.get('#appmagic-dropdownFlyoutdropdown_siena_9317369dbe73 > div').click()
  //.find(' #appmagic-dropdownFlyoutdropdown_siena_a4a68433f44942d > div')
  //.find('.item1 appmagic-dropdownListItem').click()
  //.find('#appmagic-dropdownFlyoutdropdown_siena_130d5407145d95').find('.item1 appmagic-dropdownListItem[id="appmagic-dropdownFlyoutdropdown_siena_30121b745001cdc3_1"]').click()
  //.find('#appmagic-dropdownFlyoutdropdown_siena_5575ac85559992b_14').click()
  .find('#publishedCanvas > div > div.screen-animation.animated > div > div > div:nth-child(18) > div > div > div > div > input').type('654897')
  
           })
  it.only('verifies the user logged in has the correct name', () => {
  cy.get('#fullscreen-app-host')
  .should('be.visible')
  .then(($iframe) => {
      const $body = $iframe.contents().find('body')

cy.wrap($body)
   .find('#publishedCanvas > div > div.screen-animation.animated > div > div > div:nth-child(24) > div > div > div > div > input').type('appp-1000403-1')
 
        })
         
      // #appmagic-dropdownFlyoutdropdown_siena_2fd25d313d1afb > div
      // #appmagic-dropdownFlyoutdropdown_siena_2fd25d313d1afb_1
      // #publishedCanvas > div > div.screen-animation.animated > div > div > div:nth-child(8)
      // #publishedCanvas > div > div.screen-animation.animated > div > div > div:nth-child(8) > div
      // #publishedCanvas > div > div.screen-animation.animated > div > div > div:nth-child(8) > div > div
      // #publishedCanvas > div > div.screen-animation.animated > div > div > div:nth-child(8) > div > div > div
       
      // #appmagic-dropdownFlyoutdropdown_siena_a4a68433f44942d > div
      // #appmagic-dropdownFlyoutdropdown_siena_a4a68433f44942d_0
 })
})
})
})