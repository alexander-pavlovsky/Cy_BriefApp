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

        cy.contains("Welcome to Brief").should("be.visible");
    });

    // Next button should be disabled
    it("verify that user can enter valid email only ", () => {
        cy.visit("https://webx.gobrief.com/#/login");

        cy.get(".secondary-button").click({ force: true });

        cy.get(".text-input").type("pasok-a@inbox");

        cy.get(".primary-button").should("not.be.enabled");
    });

    // Next button should be enabled on valid email input
    it("verify that user can enter email only  ", () => {
        cy.visit("https://webx.gobrief.com/#/login");

        cy.get(".secondary-button").click({ force: true });

        cy.get(".text-input__input").clear().type("gobrief001@gmail.com");

        cy.get(".primary-button").should("be.visible");
    });

    // error message should show on invalid code
    it("verify that user should not register with invalid code ", () => {

        cy.visit("https://webx.gobrief.com/#/login");

        cy.get(".secondary-button").click({ force: true });

        cy.get(".text-input__input").clear().type("gobrief001@gmail.com");

        cy.get(".primary-button").should("be.visible");

        cy.get(".primary-button").click().wait(500);

        cy.get('[placeholder="Enter code"]').should("be.visible");

        cy.get('[placeholder="Enter code"]').type("12345{enter}", { delay: 500 });

        cy.get('[class="auth-error-message-cmp"]').should("be.visible");
    });

    // should navigate back to update email
    it("verify edit button ", () => {
        cy.visit("https://webx.gobrief.com/#/login");

        cy.get(".secondary-button").click({ force: true });

        cy.get(".text-input__input").clear().type("gobrief001@gmail.com");

        cy.get(".primary-button").should("be.visible").click().wait(500);

        cy.get(".text-input__action").click();

        cy.get(".text-input__input").should("have.value", "gobrief001@gmail.com");





    });
});
