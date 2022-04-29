const os = require('os')

console.log('Platform: ', os.platform())
console.log('arch: ', os.arch())
console.log('OS version: ', os.version())
console.log('OS build number: ', os.release())
console.log('Processor: ', os.cpus()[0].model)
console.log('Total memory size: ', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), 'GB')
console.log('Free memory size: ', (os.freemem() / 1024 / 1024 / 1024).toFixed(2), 'GB')
console.log('Username', os.userInfo().username)
console.log('IP address', os.networkInterfaces())
