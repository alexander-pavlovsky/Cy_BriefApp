/// <reference types=" Cypress" />

it.only('google test', function (){
    cy.visit('https://www.google.com/')
    cy.xpath('//input[@title=\'Search\']').type('Automation Step by Step{enter}')
   /* cy.xpath('//h3[normalize-space()=\'Automation Step by ' +
        'Step: NevLearninger Stop Learning ...\']').click()*/
    cy.xpath('//input[@id=\'gbqfbb\']').click()
})




