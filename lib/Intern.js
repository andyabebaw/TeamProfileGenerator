const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

    printInfo() {
        super.printInfo();
        console.log(`school: ${this.getSchool()}`);
    }
}

module.exports = Intern;