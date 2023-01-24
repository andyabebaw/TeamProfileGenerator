const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an object containing an office number that is a 'number' property when called with the 'new' keyword", () => {
            const obj = new Manager("Andy", 1, "andyabebaw1@gmail.com", 24);

            expect(typeof obj.getOfficeNumber() === 'number').toEqual(true);
        });

        it("should return an object containing an office number that matches what was inputed when constructed", () => {
            const obj = new Manager("Andy", 1, "andyabebaw1@gmail.com", 24);

            expect(obj.getOfficeNumber() === 24).toEqual(true);
        });

        it("should return an object containing an role that is a 'string' property when called with the 'new' keyword", () => {
            const obj = new Manager("Andy", 1, "andyabebaw1@gmail.com", 24);

            expect(typeof obj.getRole() === 'string').toEqual(true);
        });

        it("should return an object containing an role that is 'Manager'", () => {
            const obj = new Manager("Andy", 1, "andyabebaw1@gmail.com", 24);

            expect(obj.getRole() === 'Manager').toEqual(true);
        });
    });
});
