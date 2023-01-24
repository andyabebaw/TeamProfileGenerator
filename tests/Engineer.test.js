const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object containing a github that is a 'string' property when called with the 'new' keyword", () => {
            const obj = new Engineer("Andy", 1, "andyabebaw1@gmail.com", "https://github.com/andyabebaw");

            expect(typeof obj.getGithub() === 'string').toEqual(true);
        });

        it("should return an object containing a github that matches what was inputed when constructed", () => {
            const obj = new Engineer("Andy", 1, "andyabebaw1@gmail.com", "https://github.com/andyabebaw");

            expect(obj.getGithub() === "https://github.com/andyabebaw").toEqual(true);
        });

        it("should return an object containing an role that is a 'string' property when called with the 'new' keyword", () => {
            const obj = new Engineer("Andy", 1, "andyabebaw1@gmail.com", "https://github.com/andyabebaw");

            expect(typeof obj.getRole() === 'string').toEqual(true);
        });

        it("should return an object containing an role that is 'Engineer'", () => {
            const obj = new Engineer("Andy", 1, "andyabebaw1@gmail.com", "https://github.com/andyabebaw");

            expect(obj.getRole() === 'Engineer').toEqual(true);
        });
    });
});
