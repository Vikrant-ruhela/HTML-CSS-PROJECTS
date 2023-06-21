const express=require("express");

const app=express();
let random= Math.floor(Math.random()*100)

app.get("/random",(req,res)=>{
    res.json({"random":random});
})

app.listen(3000,()=>{
    console.log('server is started at port 3000');
})