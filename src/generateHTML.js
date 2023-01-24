
function createHtml(employees) {
    let html = employeeTemplatePart1;
    //loops through employee and picks the correct employee type helper function to add to html
    employees.forEach(function (person) {
        console.log(person);
        switch (person.getRole()) {
            case "Manager":
                html += manager(person);
                break;
            case "Engineer":
                html += engineer(person);
                break;
            case "Intern":
                html += intern(person);
                break;
        }
    });

    return html + employeeTemplatePart2;
}

//base html for the page
const employeeTemplatePart1 = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Team Profile Generator</title><link rel="stylesheet" href="./styles.css" /></head><body><header><h1> Team Profile Generator</h1></header><div id = "employeeCards">'
const employeeTemplatePart2 = '</div></body></html>'

let manager = (data) => {
    return `
    <div class = "card">
    <div class = "cardHeader">
    <h5 class="name">${data.getName()}</h5>
    <h2 class="role">☕  ${data.getRole()}</h2>
    </div>
    <h4 class = "id"> ID: ${data.getId()}</h4>
    <h4 class = "email"> Email: ${data.getEmail()}</h4>
    <h4 class = "custom"> Office Number: ${data.getOfficeNumber()}</h4>
    </div>  
`;
}

let engineer = (data) => {
    return `
    <div class = "card">
    <div class = "cardHeader">
    <h5 class="name">${data.getName()}</h5>
    <h2 class="role">👓  ${data.getRole()}</h2>
    </div>
    <h4 class = "id"> ID: ${data.getId()}</h4>
    <h4 class = "email"> Email: ${data.getEmail()}</h4>
    <h4>  Github: <a href="${data.getGithub()}">${data.getGithub()}</a> <h4>
    </div>  
`;
}

let intern = (data) => {
    return `
    <div class = "card">
    <div class = "cardHeader">
    <h5 class="name">${data.getName()}</h5>
    <h2 class="role">🧑🏻‍🎓  ${data.getRole()}</h2>
    </div>
    <h4 class = "id"> ID: ${data.getId()}</h4>
    <h4 class = "email"> Email: ${data.getEmail()}</h4>
    <h4 class = "custom"> School: ${data.getSchool()}</h4>
    </div>  
`;
} 

//exports helper function
module.exports = createHtml;