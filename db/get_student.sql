SELECT * FROM students WHERE StudentID || LOWER(FirstName) || LOWER(LastName) || LOWER(University) || LOWER(Major) || LOWER(Email) LIKE '%' || LOWER($1) || '%';