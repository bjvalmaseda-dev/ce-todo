describe("Todo App", () => {
  it("can be visited", () => {
    cy.visit("http://localhost:3000");
  });

  describe("Tasks", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
    it("a empty list is render create new task", () => {
      cy.contains("Type to add new task");
    });

    it("can be task added", () => {
      cy.contains("Type to add new task").as("addButton");
      cy.get("@addButton").click();
      cy.get('[placeholder="Type to add new task"]').type("New task");
      cy.get('button[type="submit"]').click();
      cy.contains("New task");
    });

    it("a task can be edited", () => {
      cy.contains("this is another note").click();
      //cy.get('[data-testid="test"]').type("Edited task");
      cy.get('button[type="submit"]').click();
    });

    it("a task can be delete", () => {
      cy.contains("this is another note").click();
      cy.contains("Remove").click();
      cy.get("li").should((tasks) => expect(tasks).to.have.length(1));
    });
  });
});
