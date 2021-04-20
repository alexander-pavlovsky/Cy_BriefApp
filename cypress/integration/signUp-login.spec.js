/// <reference types="cypress" />

describe("Sign up - login page ", () => {


    // login button should have href link
    it("login button should have link", () => {
        cy.visit("https://www.gobrief.com/");
        cy.get(".button-4").should("have.attr", "href");
    });

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

    // user should be redirected to create account page with the header 'Let's get you on Brief'
    it("create account button verification ", () => {
        cy.get(".secondary-button").click({ force: true });

        cy.contains("Let’s get you on Brief").should("be.visible");
    });

    // login button should have href link
    it("try for free button should have link", () => {
        cy.visit("https://www.gobrief.com/");

        cy.get(".button-5").should("have.attr", "href");
    });

    // user should be redirected to login page and
    // Sign In button should be visible along with the header: 'Welcome to Brief'
    it("try for free button verification", () => {
        cy.get(".button-5")
            .invoke("attr", "href")
            .then((href) => {
                cy.visit(href);
            });




    });
});
