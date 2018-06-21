SELECT companies.industry
FROM  companies
INNER JOIN students on companies.industry = students.major;