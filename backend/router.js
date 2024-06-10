const express =require("express");
const Router=express.Router();
const sqlbdconnect=require("./dbconnect");
// const db=require("./server");

Router.get("/",(req,res)=>{
    const userdta=[{
        name:"anith",
        id:"12"
    },
    
    {
        name:"satish",
        id:"15"
    }
];
res.send(userdta);
})
Router.get("/apifac",(req,res)=>{
    sqlbdconnect.query("select * from facdet",(err,rows)=>{
       
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
       }
    )
});

Router.get("/apiroom",(req,res)=>{
    sqlbdconnect.query("select * from roomdetails ",(err,rows)=>{
       
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
       }
    )
});


module.exports=Router;