describe("template spec", () => {
  it("should show the login form", () => {
    cy.visit("localhost:3000");
    cy.get("input[name=username]").should("exist");
    cy.get("input[name=password]").should("exist");
    cy.get("button[type=submit]").should("exist");
  });
});
