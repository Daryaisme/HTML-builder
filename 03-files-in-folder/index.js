const path = require('path')
const way = path.join(__dirname, 'secret-folder')

const fs = require('fs')
fs.readdir(way, {withFileTypes : true}, (err, files) => {
  if (!err) {
    files.map(file => {
      if (file.isFile()) {
        newWay = path.join(__dirname, 'secret-folder', file.name)
        fs.stat(newWay, {withFileTypes : true}, (err, stats) => {
          if (!err) {
            console.log(file.name.slice(0, file.name.indexOf('.')), '-', file.name.slice(file.name.indexOf('.') + 1, file.name.length), '-', stats.size, 'bytes')
          }
        })
      }
    })
  }
})
