/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  // https://on.cypress.io/interacting-with-elements

  it(".click() - click on a DOM element", () => {
    // https://on.cypress.io/click
    cy.get(".btn-1").click();
    cy.get(".btn-2").click();
    cy.get(".btn-3").click();
  });
});
