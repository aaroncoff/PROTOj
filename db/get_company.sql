SELECT * FROM companies WHERE compid || LOWER(name) LIKE '%' || LOWER($1) || '%';