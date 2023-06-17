const EventEmitter=require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("subscribe",(arg)=>{
    console.log(`Thanks for Subscribing to ${arg}`);
})
eventEmitter.emit("subscribe","College Wallah");
