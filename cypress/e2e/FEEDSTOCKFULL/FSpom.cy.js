/// <reference types="cypress"/>
import home_managedealpage from "../PageObjects/home_managedealpag";
import stripinfo from "../PageObjects/stripinfo";
import pricing from "../PageObjects/pricing";
import freight from "../PageObjects/freight";
import adddoc from "../PageObjects/adddoc";
describe('Test Suite', function(){
    beforeEach(() => {
        cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
        cy.visit("http://web04/TEST-TFSContractManagement/Pages/Deals")
        })
    it('addnewdealclick',function(){
        const md=new home_managedealpage 
        const si=new stripinfo
        const pr=new pricing
        const ft=new freight
        const ad=new adddoc

        md.addnewdeal_button()
        md.gpclick_button()
        md.dealt_radiobutton()
        md.title_input()
        md.country_dropdown()
        md.Governinglaw_dropdown()
        md.tradingrules_dropdown()
        md.qualitysurvey_dropdown()
        md.quantitysurvey_dropdown()
        md.methodoftransport_dropdown()
        md.insepectioncost_dropdown()
        md.counterpartycontract_input()
        md.ContractTerms_input()
        md.DEALNOTES_input()
        md.SPECIALCLUASE_input()
        md.BROKER_radiobutton()
        md.BROKER2_dropdown()
        md.brokerfee_input()
        md.brokerfeeper_dropdown()
        md.currency_dropdown()
        md.bokernotes_input()
        md.GPCUSTOMER_dropdown()
        md.OverridePaymentbutton_radiobutton()
        md.OverridePaymentnotes_input()
        md.ProductQuality_input()
        md.Productclick_dropdown()
        md.SAVEDEAL_button()
        md.suystainibiltycertificate_dropdown()
        md.POSdelivery_dropdown()
        md.Counting_dropdown()
        md.Countriess_checkbox()
        md.SustainabilityNotes_input()
        md.UpdateDeal_button()
        md.EditStripDetails_button()

        si.StripStartDate_datepicker()
        si.StripEndDate_datepicker()
        si.titleTansferLocation_input()
        si.TitleTransferState_dropdown()
        si.Quantity_input()
        si.UnitOfMeasure_dropdown()
        si.Tolerance_dropdown()
        si.IncoTerms_dropdown()
        si.IncoTermLocation_input()
        si.IncoTermState_dropdown()
        si.Saletype_dropdown()
        si.UpdateStrip_button()

        pr.PricingType_radiobutton()
        pr.Priceindex_dropdown()
        pr.PriceIndexCurrency_dropdown()
        pr.Basis_input()
        pr.Basisuom_dropdown()
        pr.PricingAt_dropdown()
        pr.PricingWindowStart_datepicker()
        pr.PricingWindowEnd_datepicker()
        pr.HolidayConvention_dropdown()
        pr.AddPricing_button()

        ft.TransportMode_dropdown()
        ft.FreightCost_input()
        ft.FreightCostCurrency_dropdown()
        ft.FreightCostPer_dropdown()
        ft.FromLocation_input()
        ft.ToLocation_input()
        ft.CarrierInvoiceTargray_radiobutton()
        ft.AddTransport_button()

        ad.ADDDOCUMENTS_button()
        ad.DocumentCost_input()
        ad.duom_dropdown()
        ad.documentcostcurrency_dropdown()
        ad.DocumentSave_button()
        ad.DocumentCosts_input()
        ad.duoms_dropdown()
        ad.documentcostcurrencys_dropdown()
        ad.DocumentSave2_button()
        ad.backtomdpage_button()

        md.UploadDocuments_dropdown()
        md.DocumentNotes_input()
        md.fuUploadDocuments_button()
        md.btnUpload_button()
        md.lnkUpdateDeal_button()
        md.SubmitForPublishNotify_button()

    })
})