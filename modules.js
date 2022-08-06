console.log(arguments)
console.log(require("module").wrapper)

//module.exports
const Cal = require('./test-module1')
const calulator = new Cal()

console.log(calulator.multiply(5,5))


// exports
const {add,multiply,divide} = require('./test-module2')
console.log(multiply(5,5));

//caching
require('./test-module3')()
require('./test-module3')()
require('./test-module3')()