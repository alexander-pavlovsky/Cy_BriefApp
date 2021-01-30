/// <reference types="cypress" />

describe("Chat page ", () => {

    // search contact field can be should be visible to user
    it("verify create new chat ", function () {
        cy.login();

        // create new chat should be visible to user
        cy.get(".create-btn-cmp__label").should("be.visible").click();

        // search user field should be visible to user
        cy.get(".user-search__input").should("be.visible");
        cy.get(".user-search__input").type("tester");

        // auto complete contact list should be visible
        cy.get('[class="user-role-list-item-cmp__name"]')
            .first()
            .should("be.visible");
        // related searched contact list should appear in autocomplete list
        cy.get('[class="user-role-list-item-cmp__name"]')
            .contains("tester",{matchCase:false})
            .first()
            .click();

        // type message text field should be visible
        cy.get(".public-DraftStyleDefault-block",{timeout:6000}).should("be.visible");

        // send button should be enabled when type any text on "type a message" field
        cy.get(".public-DraftStyleDefault-block").type("Hi");
        cy.get(".chat-input-send-icon-cmp > svg > circle")
            .should("be.visible")
            .click({ force: true });

        // message should sent with status on personal chat
        cy.get(".event-text").should("be.visible");
        cy.get(".event__status > .event-status > .icon-cmp > svg").should(
            "be.visible"
        );

        // emoji selection should be visible on personal chat
        cy.get(".emoji-selector-button-cmp > .icon-cmp > svg")
            .should("be.visible")
            .click();
        cy.get('[class="emoji-mart-emoji emoji-mart-emoji-native"]')
            .first()
            .click();


    });
});
