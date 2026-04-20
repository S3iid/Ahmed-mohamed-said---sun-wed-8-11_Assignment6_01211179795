import { db } from "../../database/connection.js";


export const addcategory = () => {
    db.query(`ALTER TABLE Products
ADD COLUMN Category VARCHAR(100);`, (err, result) => {

        if (err) {
            console.log("Error executing query", err);
        } else {
            console.log("Category added successfully", result);
        }

    })


}
export const removecategory = () => {
    db.query(`ALTER TABLE Products DROP COLUMN Category;`, (err, result) => {
        if (err) {
            console.log("Error executing query", err);
        } else {
            console.log("Category removed successfully", result);
        }
    });
};


export const addnotnull = () => {
(req, res) => {
    db.query(`ALTER TABLE Products 
MODIFY COLUMN ProductName VARCHAR(255) NOT NULL;`, (err, result) => {
        if (err) {
            console.log("Error executing query", err);
        } else {
            console.log("ProductName modified to NOT NULL successfully", result);
        }

    })

}}

export const updateprice=()=>{
    db.query(`UPDATE products SET Price = 25.00 WHERE ProductName = 'Bread'`, (err, result) => {

        if (err) {
            console.log("Error executing query", err);
        }
        else {
            console.log("Price updated successfully", result);
        }
})}
export const removeproduct =()=>{


    db.query(`DELETE FROM products WHERE ProductName = 'Eggs'`, (err, result) => {
        if (err) {
            console.log("Error executing query", err);
        }   
        else {
            console.log("Product removed successfully", result);
        }   
    })
}

export const gettotalquantity = () => {
db.query(`SELECT 
    p.ProductID,
    p.ProductName,
    SUM(s.Quantity) AS TotalQuantitySold
FROM Products p
JOIN Sales s ON p.ProductID = s.ProductID
GROUP BY p.ProductID, p.ProductName;`, (err, result) => {
    if (err) {
        console.log("Error executing query", err);
    } else {
        console.log("Total quantity calculated successfully", result);
    }
})
}
export const higheststock = () => {

    db.query(`SELECT TOP 1 
    ProductID,
    ProductName,
    Stock
FROM Products
ORDER BY Stock DESC;`, (err, result) => {
        if (err) {
            console.log("Error executing query", err);
        } else {
            console.log("Product with highest stock quantity retrieved successfully", result);
        }
    })
}

export const productsneversold = () => {
db.query(`SELECT p.*
FROM Products p
LEFT JOIN Sales s ON p.ProductID = s.ProductID
WHERE s.ProductID IS NULL;`, (err, result) => {
    if (err) {
        console.log("Error executing query", err);
    } else {
        console.log("Products never sold retrieved successfully", result);
    }   })


}
