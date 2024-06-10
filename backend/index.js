const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const Routerpath=require("./router");
const app=express();
const port=7000;


app.use(bodyParser.json());
app.use(cors());
app.use("/",Routerpath)
app.use("/apifac",Routerpath)
app.listen(port,()=>console.log("server running on port 7000"))