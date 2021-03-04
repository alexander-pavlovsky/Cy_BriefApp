/// <reference types="cypress" />
describe("Contact", () => {

    it("Verify help page ", function () {
        cy.login();
        cy.get('[title="Help"]').click();

        // User should be redirected to Feedback & Support page after clicking on 'Help' link
        cy.get('[class="drop-down-plain-list-cmp__item-text"]')
            .contains("Support & Feedback")
            .click();
        cy.get('[class="usual-header-cmp__main-title"]').contains(
            "Brief Feedback & Support "
        );
// User should be able to use chat on the Feedback & Support page
        cy.get(".public-DraftStyleDefault-block").type("Help");
        cy.get(".chat-input-send-icon-cmp > svg > circle").click({ force: true });
        cy.get(".event-text").contains("Help");

        // User should be able to clear history on the Feedback & Support page
        cy.get(
            ".header-icon-with-popup > .base-header-icon-cmp > .icon-cmp"
        ).click();
        cy.contains("Clear History").click();
        cy.get(".maat-long-button_warning").click();
        cy.get(".event-text").should("not.exist");

        // Verify that emoji in the Feedback & Support chat are working
        // emoji selection should be visible on Feedback & Support chat
        cy.get(".emoji-selector-button-cmp > .icon-cmp > svg")
            .should("be.visible")
            .click();
        cy.get('[class="emoji-mart-emoji emoji-mart-emoji-native"]')
            .first()
            .click();

        // send emoji on Feedback & Support chat
        cy.get(".chat-input-send-icon-cmp > svg > circle").click({ force: true });

        // sent emoji should be visible on Feedback & Support chat
        cy.get(".event-text__some-emoji").should("be.visible");


    });
});

