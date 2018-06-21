UPDATE students
SET firstName = $2, lastName = $3, university = $4, major = $5, email = $6
WHERE studentId = $1;