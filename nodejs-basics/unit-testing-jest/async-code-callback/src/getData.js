const getData = callback => {
  setTimeout(() => {
    const Data = 'data'
    callback(Data)
  }, 1000)
}

module.exports = getData
