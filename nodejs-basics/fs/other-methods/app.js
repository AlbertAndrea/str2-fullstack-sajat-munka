const {
  unlinkWrapper,
  renamekWrapper,
  copyFilekWrapper,
  statWrapper,
  chmodWrapper
} = require('./utils')

//unlinkWrapper({ path: './szamarmese.txt' })

// renamekWrapper({
//   oldPath: './poets.txt',
//   newPath: './POETS.txt'
// })

// copyFilekWrapper({
//   src: './halaltanc-ballada.txt',
//   dest: './books/halaltanc-ballada.txt'
// })

// statWrapper({
//   path: './halaltanc-ballada.txt',
//   callback (err, stats) {
//     if (err) throw err
//     console.log(stats)
//   }
// })

chmodWrapper({
  path: './halaltanc-ballada.txt',
  mode: 744
})