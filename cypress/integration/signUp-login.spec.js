/// <reference types="cypress" />

describe("Sign up - login page ", () => {


    // login button should have href link
    it("login button should have link", () => {
        cy.visit("https://www.gobrief.com/");
        cy.get(".button-4").should("have.attr", "href");


    });
});
