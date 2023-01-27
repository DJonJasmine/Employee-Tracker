const inquirer = require('inquirer');
const db = require('../db/connection');
require('console.table');
// port
const PORT = process.env.PORT || 3001;


// prompt questions
const promptMessages = () => {
  return inquirer.prompt ([
    {
      viewAllEmployees: 'View All Employees',
      viewByDepartment: 'View All Employees By Department',
      viewByRole: 'View All Employees By Role',
      viewByManager: 'View All Employees By Manager',
      addEmployee: 'Add An Employee',
      addRole: 'Add Role',
      updateEmployee: 'Update An Employee',
      updateEmployeeRole: 'Update An Employee Role',
      updateEmployeeManager: 'Update  Employee Manager',
      removeEmployee: 'Remove An Employee',
      removeEmployeeRole: 'Remove An Employee Role',
      removeEmployeeManager: 'Remove An Employee Manager',
      removeDepartment: 'Remove An Department',
      exit: 'Exit'
    }
    
  ]).then((data) => {
    switch (data.selection) {
        case 'View All Employees':
            viewAllEmployees();
            break;

        case 'View All Employees By Department':
            viewByDepartment();
            break;
            
        case 'View All Employees By Role':
            viewByRole();
            break;
        
        case 'View All Employees By Manager':
            viewByManager();
            break;
    
        case 'Add An Employee':
            addEmployee();
            break;
        
        case 'Add Role':
            addRole();
            break;
            
        case 'Update An Employee':
            updateEmployee();
            break;
       
        case 'Update An Employee Role':
            updateEmployeeRole();
            break;
        
        case 'Update An Employee Manager':
              updateEmployeeManager();
              break;
              
        case 'Remove An Employee':
              removeEmployee();
              break;
                
        case 'Remove An Employee Role':
              removeEmployeeRole();
              break;

        case 'Remove An Employee Manager':
              removeEmployeeManager();
              break;
                    
        case 'Remove An Department':
              removeDepartment();
              break;
                      
        case 'Exit':
              process.exit();
            
            
    }
}) 
};
promptMessages();

const viewAllEmployees = () => {
  db.query(`
  SELECT department.department_name AS department,
  role.job_title AS job title,
  role.salary AS salary,
  employee.id,
  employee.first_name,
  employee.last_name,
  employee.manager_id, 
  CONCAT (manager.first_name, '', manager.last_name) AS manager 
  FROM employee
  LEFT JOIN role ON employee.role_id = role.id
  LEFT JOIN department ON role.department_id = department.id
  LEFT JOIN employee manager ON employee.manager_id = manager.id;`,

  function (err, results) {
      console.table(results);
      console.log(`\n`);
      promptMessages();
    })
}

const viewByDepartment = () => {
    db.query(`SELECT * FROM department`, 
    function (err, results) {
        console.table(results);
        console.log(`\n`);
        promptMessages(); 
    })
}

const viewByRole = () => {
    db.query(`SELECT * FROM role`, 
    function (err, results) {
        console.table(results);
        console.log(`\n`);
        promptMessages(); 
    })
}    

const addEmployee = () => {
    db.query(`SELECT * FROM department`, 
    function (err, results) {
        console.table(results);
        console.log(`\n`);
        promptMessages(); 
    })
}