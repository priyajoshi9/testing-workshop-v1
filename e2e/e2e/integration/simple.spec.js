describe("My First test", () => {
  it("it doesnt match", () => {
    expect(true).to.equal(true);
  });
});

// Writing unit tests
function add(a, b) {
  return a + b;
}

describe("Unit test for add func", () => {
  context("Math", function() {
    it("adds numbers", () => {
      const expected = 2 + 3;

      expect(add(2, 3)).to.eq(expected);
    });
  });
});
