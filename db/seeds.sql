INSERT INTO department (department_name)
VALUES  ('Operations'),
        ('Analystics'),
        ('Marketing'),
        ('Executive');

INSERT INTO role (title, salary, department_id)
VALUES ('General Manager', 80000, 1),
       ('Team Lead Analyst', 70000, 1),
       ('Sales Representative', 35000, 1),
       ('Team Analyst', 75000, 2),
       ('Media Manager', 65000, 2),
       ('Media Specialist', 30000, 2),
       ('HR Manager', 70000, 3),
       ('HR Representative', 25000, 3),
       ('CEO', 45000000, 4);
       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Freedy', 'Kruger', 1, NULL),
       ('Leather', 'Face', 2, 1),
       ('Hannibal', 'Lecter', 3, 1),
       ('Jason', 'Voorhees', 4, NULL),
       ('John', 'Kramer', 5, 4),
       ('Michael', 'Meyers', 6, 4),
       ('Penny', 'Wise', 7, NULL),
       ('Norman', 'Bates', 8, 7);
       