const sql=require("mysql");
const sqlconnect=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"project",
    multipleStatements:true
});
sqlconnect.connect((err)=>{
    if(!err){
        console.log("db connected")
    }
    else{
        console.log("db not connected")
    }
})
module.exports=sqlconnect;