class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }

    printInfo() {
        console.log(`name: ${this.getName()}`);
        console.log(`role: ${this.getRole()}`);
        console.log(`id: ${this.getId()}`);
        console.log(`email: ${this.getEmail()}`);
    }
}

module.exports = Employee;
