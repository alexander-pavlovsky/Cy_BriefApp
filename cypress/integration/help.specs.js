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

    });
});

