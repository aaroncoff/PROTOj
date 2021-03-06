-- SELECT * FROM projects WHERE LOWER(company) || LOWER(sponsor) || LOWER(projname) || LOWER(student1) || LOWER(student2) || LOWER(student3) || LOWER(student4) || LOWER(student5) || LOWER(bio) || LOWER(industry) LIKE '%' || LOWER($1) || '%';

-- SELECT * FROM projects WHERE LOWER(company) LIKE CONCAT('%',$1,'%') OR LOWER(projname) LIKE CONCAT('%',$1,'%');

SELECT * FROM projects WHERE LOWER(company) LIKE CONCAT('%',LOWER($1),'%') OR LOWER(projname) LIKE CONCAT('%',LOWER($1),'%');