describe("Todo App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.request("DELETE", "http://localhost:3001/api/testing/_clean");
  });

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
      const task = { content: "Task to edit" };
      cy.request("POST", "http://localhost:3001/api/tasks", task);

      cy.visit("http://localhost:3000");
      cy.contains(task.content).click();
      cy.get(`input[value="${task.content}"]`).clear().type("Edited task");
      cy.get('button[type="submit"]').click();
    });

    it("a task can be delete", () => {
      const task = { content: "Task to delete" };
      cy.request("POST", "http://localhost:3001/api/tasks", task);

      cy.visit("http://localhost:3000");
      cy.contains(task.content).click();
      cy.contains("Remove").click();
      //cy.get("li").should((tasks) => expect(tasks).to.have.length(1));
    });
  });
});
