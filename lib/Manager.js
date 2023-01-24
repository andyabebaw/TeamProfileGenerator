const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }

  printInfo() {
    super.printInfo();
    console.log(`office number: ${this.getOfficeNumber()}`);
  }
}


module.exports = Manager;