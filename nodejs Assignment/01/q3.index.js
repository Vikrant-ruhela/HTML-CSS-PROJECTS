const fs= require("fs");

fs.readFile("nodejs_architecture.txt",(err,data)=>{
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})