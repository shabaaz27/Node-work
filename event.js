const EventEmitter = require("events");
const http = require('http')


class Sales extends EventEmitter{
    constructor(){
        super();
    }
}


const myEmitter = new Sales()

myEmitter.on('newSale',()=>{
    console.log('There was a new Sale')
})

myEmitter.on('newSale',()=>{
    console.log('Costumer name: Shabaaz')
})

myEmitter.on('newSale',(stock)=>{
    console.log('There was a new Sale',stock, `left in stock`)
})

myEmitter.emit("newSale",8)


///
const server = http.createServer()

server.on('request',(req,res)=>{
    console.log(`Request Received`)
    res.end('Requestreceived')
})

server.on('request',(req,res)=>{
    console.log(`Request Received`)
    console.log('Next Request')
})

server.on('close',()=>{
    console.log(`closed server`)
    
})


server.listen(8000,'127.0.0.1',()=>{
    console.log('waiting for request');
})