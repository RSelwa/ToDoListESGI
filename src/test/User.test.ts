const { User } = require("../User");

describe("test user validity", () => {
  it("should have wrong email", () => {
    const user = new User("test", "test", "test", 13);
    expect(user.isValid()).toBe(false);
  });

  it("should have wrong lastname", () => {
    const user = new User("test", "test", "", 13);
    expect(user.isValid()).toBe(false);
  });

  it("should have wrong firstname", () => {
    const user = new User("test", "", "test", 13);
    expect(user.isValid()).toBe(false);
  });

  it("should have wrong age", () => {
    const user = new User("test", "test", "test", 10);
    expect(user.isValid()).toBe(false);
  });

  it("should be valid user", () => {
    const user = new User("test@test.fr", "test", "test", 13);
    expect(user.isValid()).toBe(true);
  });
});
