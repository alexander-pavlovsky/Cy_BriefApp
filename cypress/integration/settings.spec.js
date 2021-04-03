/// <reference types="cypress" />


describe("Settings page ", () => {


    it("Verify settings page ", function () {
        cy.login();
        cy.get('[title="Settings"]').click();

        // Verify that 'Your plan'  is displayed on the Settings page
        cy.get('[class="tariff-plan-info-cmp__tariff-name"]').should("be.visible");

        // Verify that 'Status' is displayed on the Settings page
        cy.get('[class="tariff-plan-info-cmp__status-name"]').should("be.visible");

        // Verify that user's name in displayed on the Settings page
        cy.get('[class="user-real-name-cmp__fullname"]').should("be.visible");

        // Verify that user's email in displayed on the Settings page
        cy.get(
            '[class="new-settings-line__text new-settings-line__text_selectable"]'
        ).should("be.visible");

        // Verify that the nickname is displayed on the Settings page
        cy.get('[class="new-settings-line__text"]').should("be.visible");

        // Verify that the profile link is displayed on the Settings page
        cy.get(
            '[class="new-settings-line__text new-settings-line__extra-text new-settings-line__extra-text_bold"]'
        ).contains("Copy Link");

        // Verify that self chat is present
        cy.get('[class="new-settings-line__text"]').contains("Self Chat");





    });
});
