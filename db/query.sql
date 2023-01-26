SELECT
department.department_name AS department,
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
LEFT JOIN employee manager ON employee.manager_id = manager.id
