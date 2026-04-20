import express from "express";
import { db } from "./database/connection.js";
import productrouter from './modules/products/products.controller.js';
import supplierrouter from './modules/suppliers/supplier.controller.js';
 export const bootstrap = () => {


    const app = express();
    app.use(express.json());
    app.use(productrouter);
    app.use(supplierrouter);
    

    app.get(`/healthcheck`, (req, res) => {

        db.query("select 1+1 as result", (err, result) => {
            if (err) {
                console.log("Error executing query", err);
            } else {
                res.json({ message: "server is healthy", result });
            }

        })

    })


    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    })

}