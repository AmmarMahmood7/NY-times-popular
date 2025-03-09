describe("NY Times Article Item UI Tests", () => {
  beforeEach(() => {
    cy.visit("/"); // Ensure your app is running before testing
  });

  it("should display article titles on the page", () => {
    cy.get("h2").should("exist"); // Ensure article titles are rendered
  });

  it("should expand article details when clicked", () => {
    cy.get("h2").first().click(); // Click first article title

    cy.get("p").contains("This is a test abstract.").should("be.visible"); // Verify abstract is shown
    cy.get("a").contains("Read Full article here").should("be.visible"); // Check link appears
  });

  it("should collapse article details when clicked again", () => {
    cy.get("h2").first().click(); // Click to expand
    cy.get("p").contains("This is a test abstract.").should("be.visible");

    cy.get("h2").first().click(); // Click again to collapse
    cy.get("p").contains("This is a test abstract.").should("not.exist"); // Ensure abstract disappears
  });

  it("should have a working 'Read Full article here' link", () => {
    cy.get("h2").first().click(); // Expand the article

    cy.get("a")
      .contains("Read Full article here")
      .should("have.attr", "href")
      .and("include", "https://"); // Ensure the link is correct
  });
});
