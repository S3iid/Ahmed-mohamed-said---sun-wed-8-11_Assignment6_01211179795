import {db} from "../../database/connection.js";


export const addcategory = () => {
db.query(`ALTER TABLE Products
ADD COLUMN Category VARCHAR(100);`,(err,result)=>{

if(err){
    console.log("Error executing query", err);
}else{
    console.log("Category added successfully", result);
}

})


}