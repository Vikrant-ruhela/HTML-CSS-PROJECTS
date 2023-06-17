const EventEmitter=require("events");

const eventEmitter = new EventEmitter();


console.log("The default maximum number of event listeners are:"+eventEmitter.getMaxListeners());
eventEmitter.setMaxListeners(5);
console.log("The updated maximun number of event listeners are:"+eventEmitter.getMaxListeners());