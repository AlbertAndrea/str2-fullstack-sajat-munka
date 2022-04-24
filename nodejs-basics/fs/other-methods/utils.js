const { unlink, rename, copyFile, stat, chmod } = require('fs')

const fileHandlerCallback = (err) => {
  if (err) throw err
  console.log('file process successfulS')
}

const unlinkWrapper = ({ path, callback = fileHandlerCallback } = {}) => {
  unlink(path, callback)
}

const renamekWrapper = ({ oldPath, newPath, callback = fileHandlerCallback } = {}) => {
  rename(oldPath, newPath, callback)
}

const copyFilekWrapper = ({ src, dest, callback = fileHandlerCallback } = {}) => {
  copyFile(src, dest, callback)
}

const statWrapper = ({ path, callback = fileHandlerCallback } = {}) => {
  stat(path, callback)
}

// a tulajdonos
// a csoport többi tagja
// egyéb userek
//READ: 4, WRITE: 2, EXECUTE: 1
//777
//pl 754  (5=4+1, 4=4)

const chmodWrapper = ({ path, mode, callback = fileHandlerCallback } = {}) => {
  chmod(path, mode, callback)
}

module.exports = {
  unlinkWrapper,
  renamekWrapper,
  copyFilekWrapper,
  statWrapper,
  chmodWrapper
}
