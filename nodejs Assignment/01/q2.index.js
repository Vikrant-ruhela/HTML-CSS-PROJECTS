const fs=require("fs");

const data="Node.js is an event-driven, server-side JavaScript runtime environment built on the V8 engine. Its single-threaded architecture with an event loop enables non-blocking I/O and efficient handling of concurrent requests. With a modular design, built-in modules, and NPM, Node.js empowers developers to create scalable and high-performance applications."
fs.writeFile("nodejs_architecture.txt",data,(err)=>{
    if(err)
    {
        console.log(err);
    }
    console.log("Information about nodejs architecture added successfully.");

})