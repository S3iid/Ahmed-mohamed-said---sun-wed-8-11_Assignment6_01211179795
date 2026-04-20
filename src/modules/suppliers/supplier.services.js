import { db } from "../../database/connection.js"; // ✅ add this

export const changetype = (req, res) => { 
    db.query(`ALTER TABLE Products MODIFY COLUMN Price VARCHAR(15);`, (err, result) => {
        if (err) {
            console.log("Error executing query", err);
        } else {
            res.json({ message: "Price type changed successfully", result }); // ✅ send response
        }
    });
};
export  const addsupplier = (req, res) => {
    db.query(`INSERT INTO suppliers(SupplierName,ContactNumber)values('FreshFoods', '01001234567')`, [req.body.SupplierName, req.body.ContactNumber], (err, result) => {
        if (err) {
            console.log("Error executing query", err);
        }
        else {
            res.json({ message: "SupplierName added successfully", result }); // ✅ send response
        }

    })}
export const addproductsgivenfreshfood = (req, res) => {
    db.query(`INSERT INTO Products (ProductName, Price, StockQuantity, SupplierID) 
    VALUES ('Milk', 15.00, 50, (SELECT SupplierID FROM supplier WHERE SupplierName = 'FreshFoods'))`, 
    (err, result) => {
        if (err) return console.log("Error inserting Milk", err);
        console.log("Milk added successfully");
    });

    db.query(`INSERT INTO Products (ProductName, Price, StockQuantity, SupplierID) 
    VALUES ('Bread', 10.00, 30, (SELECT SupplierID FROM supplier WHERE SupplierName = 'FreshFoods'))`, 
    (err, result) => {
        if (err) return console.log("Error inserting Bread", err);
        console.log("Bread added successfully");
    });

    db.query(`INSERT INTO Products (ProductName, Price, StockQuantity, SupplierID) 
    VALUES ('Eggs', 20.00, 40, (SELECT SupplierID FROM supplier WHERE SupplierName = 'FreshFoods'))`, 
    (err, result) => {
        if (err) return console.log("Error inserting Eggs", err);
        console.log("Eggs added successfully");
    });

    res.json({ message: "Products added successfully" });
};


export const supplierswithF = () => {
db.query(`SELECT *
FROM Suppliers
WHERE SupplierName LIKE 'F%';`, (err, result) => {
    if (err) {
        console.log("Error executing query", err);
    } else {
        console.log("Suppliers with names starting with 'F' retrieved successfully", result);
  }
  })  


}
