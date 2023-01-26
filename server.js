const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');
// port
const PORT = process.env.PORT || 3001;

// connection to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'staff_db'
  },
  console.log(`Connected to the staff_db database.`)
);

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
              exit();
              break;
            
    }
}) 
};



