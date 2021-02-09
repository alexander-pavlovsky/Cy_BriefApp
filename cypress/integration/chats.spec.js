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

// send emoji on personal chat
        cy.get(".chat-input-send-icon-cmp > svg > circle").click({ force: true });

        // sent emoji should be visible on personal chat
        cy.get(".event-text__some-emoji").should("be.visible");

        // send image to personal chat
        cy.get("input[type=file]").attachFile("./testing-image.png").wait(500);

        // verify image upload percentage
        cy.get(".resource-item-type-a__size-percent").contains("100%");
        cy.get(".chat-input-send-icon-cmp > svg > circle").click({ force: true });

        // sent image should be visible on personal chat
        cy.get(".event-file-or-image-cmp").should("be.visible");

        // send file to personal chat
        cy.get("input[type=file]").attachFile("./testing-pdf.pdf").wait(500);

// verify file upload percentage
        cy.get(".resource-item-type-a__size-percent").contains("100%");
        cy.get(".chat-input-send-icon-cmp > svg > circle").click({ force: true });

        // sent file should be visible on personal chat
        cy.get('[class="file-data"]').contains('testing-pdf.pdf');

        // create new group chat
        cy.get(".create-btn-cmp__label").should("be.visible").click();
        cy.get('[class="list-item-button-cmp__text"]').first().click();

        // group chat name field should be visible
        cy.get(".input-box__input").type("brief group");

        // create button should be enabled once user type any text on group chat name
        cy.get(".user-search__input").type("tester");
        cy.get(".brief-btn-cmp__text").should("be.visible");

        // auto complete contact list should be visible
        cy.get('[class="user-role-list-item-cmp__name"]')
            .first()
            .should("be.visible");

        // related searched contact list should appear in autocomplete list
        cy.get('[class="user-role-list-item-cmp__name"]')
            .contains("tester",{matchCase:false})
            .first()
            .click();

        cy.get(".brief-btn-cmp__text").contains("Create").click();

        // group should be created along with sent status
        cy.get(".system-event > :nth-child(1)").should("be.visible");

        // emoji selection should be visible
        cy.get(".emoji-selector-button-cmp > .icon-cmp > svg")
            .should("be.visible")
            .click();
        cy.get('[class="emoji-mart-emoji emoji-mart-emoji-native"]')
            .first()
            .click();

        // send emoji on group chat
        cy.get(".chat-input-send-icon-cmp > svg > circle").click({ force: true });

        // sent emoji should be visible on group chat
        cy.get(".event-text__some-emoji").should("be.visible");

        // send image to group chat
        cy.get("input[type=file]").attachFile("./testing-image.png").wait(300);

        // verify image upload percentage
        cy.get(".resource-item-type-a__size-percent").contains("100%");
        cy.get(".chat-input-send-icon-cmp > svg > circle").click({ force: true });

        // sent image should be visible on group chat
        cy.get(".event-file-or-image-cmp").should("be.visible");

        // send file to group chat
        cy.get("input[type=file]").attachFile("./testing-pdf.pdf").wait(300);







    });
});
