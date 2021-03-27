/// <reference types="cypress" />


describe("Settings page ", () => {


    it("Verify settings page ", function () {
        cy.login();
        cy.get('[title="Settings"]').click();

        // Verify that 'Your plan'  is displayed on the Settings page
        cy.get('[class="tariff-plan-info-cmp__tariff-name"]').should("be.visible");

        // Verify that 'Status' is displayed on the Settings page
        cy.get('[class="tariff-plan-info-cmp__status-name"]').should("be.visible");







    });
});
