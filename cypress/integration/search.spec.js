/// <reference types="cypress" />


describe("Search page ", () => {

    it("Search ... ", function () {
        cy.login();
        cy.get('[title="Search"]').click();

        // search text field should be visible
        cy.get('[placeholder="Search …"]').type("Test");

        // When entering a person name user should be able to see all registered users with this name
        cy.get('[qa-mark="contacts_list_item_title"]').contains("Test").click();

        // When entering name in lower cases the same search results should appear as with upper cases
        cy.get('[placeholder="Search …"]').clear().type("test").wait(500);
        cy.get('[qa-mark="contacts_list_item_title"]').contains("test").click();

        // When pressing Enter button should not see the page refreshing
        cy.window().then((win) => (win.shouldNotReload = true));
        cy.get('[title="Search"]').type("{enter}");
        cy.window().should("have.prop", "shouldNotReload");

        // When entering random alphanumeric characters no search result should appear
        cy.get('[placeholder="Search …"]').clear().type("test!@#$%");
        cy.get('[class="empty-screen__actions"]').should("be.visible");


    });
});
