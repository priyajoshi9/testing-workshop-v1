describe("Testing the cypress example application", () => {
  it("Vist the TODO application", () => {
    cy.visit("http://todomvc.com/examples/react/");
  });

  it("Checking if the type exists", () => {
    cy.visit("http://todomvc.com/examples/react/");
    cy.contains("todos");
  });

  it("Add todo to todo-list", () => {
    cy.get(".new-todo").type("Adding first todo{enter}");
    cy.get(".new-todo").type("Adding second todo{enter}");
    cy.get(".todo-list li")
      .eq(0)
      .find("label")
      .should("contain", "Adding first todo");
  });

  it("Should mark first item as complete", () => {
    cy.get(".todo-list li")
      .eq(0)
      .find(".toggle")
      .check();

    cy.get(".todo-list li")
      .eq(0)
      .should("have.class", "completed");
  });

  it("should unmark the selected item", () => {
    cy.get(".todo-list li")
      .eq(0)
      .find(".toggle")
      .uncheck();

    cy.get(".todo-list li")
      .eq(0)
      .should("not.have.class", "completed");
  });
});
