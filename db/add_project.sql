INSERT INTO projects (company, sponsor, projname, student1, student2, student3, student4, student5, bio, user_id) 
VALUES (${company}, ${sponsor}, ${projname}, ${student1}, ${student2}, ${student3}, ${student4}, ${student5}, ${bio}, ${user_id})
RETURNING *;
