describe("NY Times Article Item UI Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display article titles on the page", () => {
    cy.get("h2").should("exist");
  });

  it("should expand article details when clicked", () => {
    cy.get("h2").first().click();

    cy.get("p").contains("This is a test abstract.").should("be.visible");
    cy.get("a").contains("Read Full article here").should("be.visible");
  });

  it("should collapse article details when clicked again", () => {
    cy.get("h2").first().click();
    cy.get("p").contains("This is a test abstract.").should("be.visible");

    cy.get("h2").first().click();
    cy.get("p").contains("This is a test abstract.").should("not.exist");
  });

  it("should have a working 'Read Full article here' link", () => {
    cy.get("h2").first().click();

    cy.get("a")
      .contains("Read Full article here")
      .should("have.attr", "href")
      .and("include", "https://");
  });
});
