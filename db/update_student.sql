UPDATE students
SET given_name = $2, family_name = $3, university = $4, major = $5, email = $6
WHERE studentId = $1;