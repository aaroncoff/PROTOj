UPDATE companies
SET name = $2, industry = $3
WHERE compId = $1; 


-- UPDATE people
-- SET first_name = $2, last_name = $3
-- WHERE id = $1;