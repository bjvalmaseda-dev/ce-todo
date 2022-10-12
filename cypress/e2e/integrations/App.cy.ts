describe("Todo App", () => {
  it("can be visited", () => {
    cy.visit("http://localhost:3000");
  });

  describe("Task List", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
    it("a empty list is render create new task", () => {
      cy.contains("Type to add new task");
    });

    it("can be task added", () => {
      cy.contains("Type to add new task").as("addButton");
      cy.get("@addButton").click();
      cy.get("[placeholder=Type to add new task]");
    });
  });
});
