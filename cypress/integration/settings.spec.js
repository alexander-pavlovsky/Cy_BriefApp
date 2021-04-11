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

        // Verify self chat functionality
        cy.get('[class="new-settings-line__text"]').contains("Self Chat").click();
        cy.get(".public-DraftStyleDefault-block").type("Hi");
        cy.get(".chat-input-send-icon-cmp > svg > circle").click({ force: true });
        cy.get(".event-text__text").contains("hi");

        // Verify that Notification is present on the Settings page
        cy.get('[title="Settings"]').click();
        cy.get('[class="new-settings-line__text"]')
            .contains("Notifications")
            .should("be.visible");

        // Verify that Sounds toggle is present
        cy.get('[class="new-settings-line__text"]')
            .contains("Sounds")
            .should("be.visible");

        // Verify that Message Send Key is present
        cy.get('[class="settings-cmp scrollable"]',{ensureScrollable:false}).scrollTo('bottom');
        cy.get('[class="new-settings-line__text"]')
            .contains("Message Send Key")
            .should("be.visible");

    });
});
