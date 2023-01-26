const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');
// port
const PORT = process.env.PORT || 3001;

// prompt questions
const promptMessages = {
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
};


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
