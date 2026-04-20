import mysql2 from 'mysql2';

const databaseconnection=()=>{
return mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Gedosaid12..',
        database: 'smallretailstore'
})
}

export const db=databaseconnection();
db.connect((err)=>{

if(err){
    console.error('Error connecting to database:', err);
}
else{
    console.log("everything is ok");
}
})