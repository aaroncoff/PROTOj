INSERT INTO projects (company, sponsfirstname, sponslastname, projname, student1, student2, student3, student4, student5, bio, user_id) 
VALUES (${company}, ${sponsfirstname}, ${sponslastname}, ${projname}, ${student1}, ${student2}, ${student3}, ${student4}, ${student5}, ${bio}, ${user_id})
RETURNING *;
