const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.json({"msg":`I am Homepage`});
})

app.get("/about",(req,res)=>{ 
    res.json({"msg":`I am about page`});
})

app.get("/contact",(req,res)=>{ 
    res.json({"email":`support@pwskills.com`});
})

app.listen(3000,()=>{
    console.log("Server started at port 3000");
})