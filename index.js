// Dependencies
const mysq12 = require('mysq12')
const inquirer = require('inquirer')
const console = require('console.table')

// SQL Connection
const connection = mysq12.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '(I Forgot. Will Replace With Actual Password Later',
    database: 'employeesDB'
})

// This function begins the prompts
function begin() {
    inquirer.prompt([{
        type: 'list',
        name: 'begin',
        message: 'Please select what you would like to do',
        choices: [
            'View departments',
            'View employees',
            'View roles',
            'Update employee roles',
            'Add a department',
            'Add an employee',
            'Add a role',
            'Delete a department',
            'Delete an employee',
            'Delete a role',
            'Exit'
        ]
    }])

    .then((res)=>{
        console.log(res.begin);
        switch(res.begin){
            case 'View departments':
                viewDepartments();
                break;
            case 'View employees':
                viewEmployees();
                break;
            case 'View roles':
                viewRoles();
                break;
            case 'Update employee roles':
                updateRoles();
                break;
            case 'Add a department':
                addDepartments();
                break;
            case 'Add an employee':
                addEmployees();
                break;
            case 'Add a role':
                addRoles();
                break;
            case 'Delete a department':
                deleteDepartments();
                break;
            case 'Delete an employee':
                deleteEmployees();
                break;
            case 'Delete a role':
                deleteRoles();
                break;
            case 'Exit':
                connection.end();
                break;
        }
    });
};

// View Functions
function viewDepartments() {
    connection.query ('SELECT * FROM departments;', 
        function (err, data) {
        if (err) throw err;
        console.table(data);
        start();
    });
}

function viewEmployees() {
    connection.query ("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;", 
    function (err, data) {
    if (err) throw err;
    console.table(data);
    start();
});
}

function viewRoles() {
    connection.query ('SELECT * FROM roles;', 
    function (err, data) {
    if (err) throw err;
    console.table(data);
    start();
});
}