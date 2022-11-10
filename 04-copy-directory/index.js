const fs = require('fs')
const path = require('path')

const wayOrigin = path.join(__dirname, 'files')
const wayCopy = path.join(__dirname, 'files-copy')

function copyDir () {
  fs.readdir(wayCopy, {withFileTypes: true}, (err, files) => {
    if(!err) {
      files.map(file => {
        fs.unlink(path.join(wayCopy, file.name), (err) => {
          if (err) throw new Error()
        })
      })
    }
    else {
      fs.mkdir(wayCopy, { recursive: true }, (err) => {
        if (err) throw new Error()
      })
    }
  })
  
  fs.readdir(wayOrigin, {withFileTypes : true}, (err, files) => {
    if (!err) {
      files.map(file => {
        if(file.isFile()) {
          fs.copyFile(path.join(wayOrigin, file.name), path.join(wayCopy, file.name), (err) => {
            if (err) throw new Error()
          })
        }
        else throw new Error()
      })
    }
    else throw new Error()
  })
}

copyDir()
