const fs=require("fs");

fs.unlink("nodejs_architecture.txt",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("File deleted successfully");
})