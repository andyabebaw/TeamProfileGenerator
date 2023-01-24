var fs = require('fs');
const generateHTML = require('./src/generateHTML');
const inquirer = require("inquirer");
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))


const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


let employees = []

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}

function init() {
    const managerInfoPrompts = [
        {
            name: "name",
            message: "What is the Manager's name?",
            type: 'input',
        },
        {
            name: "id",
            message: "What is the Manager's id number?",
            type: 'input',
        },
        {
            name: "email",
            message: "What is the Manager's email?",
            type: 'input',
        },
        {
            name: "officeNumber",
            message: "What is the Manager's office mumber?",
            type: 'input'
        }
    ]
    inquirer.prompt(managerInfoPrompts).then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        employees.push(manager)
    }).then(() => {

        var addAnotherEmployee = {
            name: "addEmployee",
            message: "Would you like to add an employee?",
            type: "loop",
            questions: [
                {
                    name: "employeeType",
                    message: "What is the employee's role?",
                    type: "list",
                    choices: ["Engineer", "Intern"]
                },
                {
                    name: "name",
                    message: "What is the employee's name?",
                    type: 'input',
                },
                {
                    name: "id",
                    message: "What is the employee's id number?",
                    type: 'input',
                },
                {
                    name: "email",
                    message: "What is the employee's email?",
                    type: 'input',
                },
                {
                    name: "githubLink",
                    message: "What is the employee's github link?",
                    type: 'input',
                    when: (employee) => employee.employeeType === 'Engineer'
                },
                {
                    name: "university",
                    message: "What is the employee's university?",
                    type: 'input',
                    when: (employee) => employee.employeeType === 'Intern'
                }
            ]
        }
        inquirer.prompt(addAnotherEmployee).then((response) => {
            response.addEmployee.forEach(person => {

                switch (person.employeeType) {
                    case "Engineer":
                        const engineer = new Engineer(person.name, person.id, person.email, person.githubLink)
                        employees.push(engineer)
                        break;

                    case "Intern":
                        const intern = new Intern(person.name, person.id, person.email, person.university)
                        employees.push(intern)
                        break;
                }
            }
            );
            
            console.log(employees)
            let html = generateHTML(employees);
            writeToFile("./dist/index.html" , html);
        })
    }

    )
}


// Function call to initialize app
init();

