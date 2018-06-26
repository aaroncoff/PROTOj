........pg.dropped.1........	-				
company	character varying				
........pg.dropped.3........	-				
sponsor	character varying				
projname	character varying				
student1	character varying				
student2	character varying				
student3	character varying				
student4	character varying				
student5	character varying				
bio	character varying	


CREATE TABLE sponsors (
sponsid SERIAL PRIMARY KEY, 
email VARCHAR, 
given_name VARCHAR, 
family_name VARCHAR, 
picture VARCHAR, 
industry VARCHAR);

CREATE TABLE projects (
projid SERIAL PRIMARY KEY,
company VARCHAR,
sponsor VARCHAR,
projname VARCHAR,
student1 VARCHAR,				
student2 VARCHAR,			
student3 VARCHAR,			
student4 VARCHAR,				
student5 VARCHAR,
bio VARCHAR,
user_id INTEGER REFERENCES sponsors(sponsid),
industry VARCHAR);
