const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing an name that is a 'number' property when called with the 'new' keyword", () => {
      const obj = new Employee("Andy", 1, "andyabebaw1@gmail.com");

      expect(typeof obj.getName() === 'string').toEqual(true);
    });

    it("should return an object containing an ID that matches what was inputed when constructed", () => {
      const obj = new Employee("Andy", 1, "andyabebaw1@gmail.com");

      expect(obj.getName() === "Andy").toEqual(true);
  });

    it("should return an object containing an id that is a 'number' property when called with the 'new' keyword", () => {
      const obj = new Employee("Andy", 1, "andyabebaw1@gmail.com");

      expect(typeof obj.getId() === 'number').toEqual(true);
    });

    it("should return an object containing an ID that matches what was inputed when constructed", () => {
      const obj = new Employee("Andy", 1, "andyabebaw1@gmail.com");

      expect(obj.getId() === 1).toEqual(true);
  });

    it("should return an object containing an email that is a 'number' property when called with the 'new' keyword", () => {
      const obj = new Employee("Andy", 1, "andyabebaw1@gmail.com");

      expect(typeof obj.getEmail() === 'string').toEqual(true);
    });

    it("should return an object containing an email that matches what was inputed when constructed", () => {
      const obj = new Employee("Andy", 1, "andyabebaw1@gmail.com");

      expect(obj.getEmail() === "andyabebaw1@gmail.com").toEqual(true);
  });

    it("should return an object containing an role that is a 'string' property when called with the 'new' keyword", () => {
      const obj = new Employee("Andy", 1, "andyabebaw1@gmail.com");

      expect(typeof obj.getRole() === 'string').toEqual(true);
    });

    it("should return an object containing an role that is 'Employee'", () => {
      const obj = new Employee("Andy", 1, "andyabebaw1@gmail.com");

      expect(obj.getRole() === 'Employee').toEqual(true);
    });
  });
});
