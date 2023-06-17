const fs= require("fs");

const data="Some advantages of Node.js include its ability to handle a large number of concurrent connections due to its event-driven, non-blocking I/O architecture. Its single-threaded nature simplifies development and improves scalability. Node.js allows for code reuse with its modular design and provides a vast ecosystem of libraries through NPM. It also offers seamless integration with front-end JavaScript frameworks, making it a popular choice for full-stack development. Additionally, its fast execution speed, lightweight footprint, and support for real-time applications contribute to its advantages.";

fs.appendFile("nodejs_architecture.txt",data,(err)=>{
    if (err) {
        console.log(err);
    }
console.log("Data is appended successfully");
})

fs.readFile("nodejs_architecture.txt",(err,data)=>{
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})
 