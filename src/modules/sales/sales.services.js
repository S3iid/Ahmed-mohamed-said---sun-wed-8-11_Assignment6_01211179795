import { db } from "../../database/connection.js";

export const getallsales = (req, res) => {

db.query(`SELECT 
    s.SaleID,
    p.ProductName,
    s.Quantity,
    s.SaleDate
FROM Sales s
JOIN Products p ON s.ProductID = p.ProductID;`, (err, result) => {
    if (err) {
        console.log("Error executing query", err);
    } else {
        res.json({ message: "All sales retrieved successfully", result });
    }})

}