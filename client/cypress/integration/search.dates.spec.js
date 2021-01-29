import React from "react";

describe("Room search end to end", () => {
  it("Searching for rooms will display available ones, and navigate to /booking", () => {
    cy.visit("/");
    cy.get(".p-button-icon-only").click();
    cy.get(".p-datepicker-next").click();
    cy.get(
      ".p-datepicker-calendar tbody tr:nth-child(1) td:nth-child(2)"
    ).click();
    cy.get(
      ".p-datepicker-calendar tbody tr:nth-child(2) td:nth-child(3)"
    ).click();
    cy.get("#search-form-submit-button").click();
    cy.contains("Available Rooms");
    cy.url().should("include", "/booking");
    cy.contains("BOOKING SYSTEM");
    cy.contains("Luxury");
  });
});
