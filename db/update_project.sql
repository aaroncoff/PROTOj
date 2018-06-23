UPDATE projects
SET company = $2, sponsor = $3, student1 = $3, student2 = $4, student3 = $5, student4 = $6, student5 = $7
WHERE projname = $1; 


-- UPDATE people
-- SET first_name = $2, last_name = $3
-- WHERE id = $1;