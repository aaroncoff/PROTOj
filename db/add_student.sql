INSERT INTO students (email, given_name, family_name, picture) VALUES ($1, $2, $3, $4)
RETURNING *;