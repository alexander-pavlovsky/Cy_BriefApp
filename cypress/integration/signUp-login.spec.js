/// <reference types="cypress" />

describe("Sign up - login page ", () => {


    // login button should have href link
    it("login button should have link", () => {
        cy.visit("https://www.gobrief.com/");
        cy.get(".button-4").should("have.attr", "href");

        // "user should be redirected to login page and
        // Sign In button should be visible along with the header: 'Welcome to Brief' "
        it("login button verification", () => {
            cy.get(".button-4")
                .invoke("attr", "href")
                .then((href) => {
                    cy.visit(href);
                });

            cy.contains("Welcome to Brief").should("be.visible");

            cy.get(".primary-button").contains("Sign in");
        });

    });
});
