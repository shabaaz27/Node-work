const fs = require('fs');
const crypto = require('crypto')
const strat = Date.now()

process.env.UV_THREADPOOL_SIZE = 2;

setTimeout(()=>console.log('Timer 1 finished'))
setImmediate(()=>console.log('Immediate1 finished'))


fs.readFile('test.txt',()=>{
    console.log('IO finsihed')
    setTimeout(()=>console.log('Timer 2 finished'))
    setTimeout(()=>console.log('Timer 3 finished'),3000)

    setImmediate(()=>console.log('Immediate2 finished'))


    process.nextTick(()=>console.log('Process Next Tick'))

    crypto.pbkdf2Sync('password','salt',100000,1024,'sha512',()=>{
        console.log(Date.now()-strat,"password1 encrypt")
    })
    crypto.pbkdf2('password','salt',100000,1024,'sha512',()=>{
        console.log(Date.now()-strat,"password2 encrypt")
    })
    crypto.pbkdf2('password','salt',100000,1024,'sha512',()=>{
        console.log(Date.now()-strat,"password3 encrypt")
    })
    crypto.pbkdf2('password','salt',100000,1024,'sha512',()=>{
        console.log(Date.now()-strat,"password4 encrypt")
    })
})

console.log("normal")