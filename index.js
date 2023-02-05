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
            
        }
    })
}