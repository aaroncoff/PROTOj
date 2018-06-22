UPDATE professors
SET firstName = $2, lastName = $3, university = $4, major = $5, email = $6
WHERE id = $1;

-- UPDATE people
-- SET first_name = $2, last_name = $3
-- WHERE id = $1;

