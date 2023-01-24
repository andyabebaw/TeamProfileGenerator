const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object containing a school that is a 'string' property when called with the 'new' keyword", () => {
            const obj = new Intern("Andy", 1, "andyabebaw1@gmail.com", "WashU");

            expect(typeof obj.getSchool() === 'string').toEqual(true);
        });

        it("should return an object containing a school that matches what was inputed when constructed", () => {
            const obj = new Intern("Andy", 1, "andyabebaw1@gmail.com", "WashU");

            expect(obj.getSchool() === "WashU").toEqual(true);
        });

        it("should return an object containing an role that is a 'string' property when called with the 'new' keyword", () => {
            const obj = new Intern("Andy", 1, "andyabebaw1@gmail.com", "WashU");

            expect(typeof obj.getRole() === 'string').toEqual(true);
        });

        it("should return an object containing an role that is 'Intern'", () => {
            const obj = new Intern("Andy", 1, "andyabebaw1@gmail.com", "WashU");

            expect(obj.getRole() === 'Intern').toEqual(true);
        });
    });
});
