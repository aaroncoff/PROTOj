-- SELECT projects.OrderID, Customers.CustomerName, Orders.OrderDate
-- FROM Orders
-- INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;

-- SELECT projects.sponsor
-- FROM projects
-- INNER JOIN sponsors ON Orders.CustomerID=Customers.CustomerID;

-- ALTER TABLE projects
-- ADD FOREIGN KEY (sponsor) REFERENCES Persons(PersonID);

SELECT * FROM projects
INNER JOIN sponsors ON projects.user_id=sponsors.sponsid WHERE sponsors.sponsid = $1;