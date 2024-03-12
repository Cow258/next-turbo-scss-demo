const glob = require('glob')

const xGlob = (pattern, options = {}) => {
  return new Promise((resolve, reject) => {
    glob(pattern, options, (err, files) => {
      if (err) {
        reject(err)
      } else {
        resolve(files)
      }
    })
  })
}

module.exports = xGlob
