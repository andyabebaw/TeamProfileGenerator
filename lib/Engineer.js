const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

    printInfo() {
        super.printInfo();
        console.log(`github: ${this.getGithub()}`);
    }
}

module.exports = Engineer;