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


    });
});
