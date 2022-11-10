const path = require('path')

const wayOrigin = path.join(__dirname, 'styles')
const wayCopy = path.join(__dirname, 'project-dist')

const fs = require('fs')

fs.readdir(wayOrigin, {withFileTypes: true}, (err, files) => {
  fs.access(path.join(wayCopy, 'bundle.css'), (err) => {
    if (!err) fs.unlink(path.join(wayCopy, 'bundle.css'), (err) => {
      if (err) throw new Error()
    }) 
  })
  if (!err) {
    files.map(file => {
      if (file.isFile() && file.name.slice(file.name.indexOf('.'), file.name.length) == '.css') {
        const readableStream = fs.createReadStream(path.join(wayOrigin, file.name), 'utf-8');
        readableStream.on('data', (data, err) => {
          if (!err) {
            fs.appendFile(path.join(wayCopy, 'bundle.css'), data, () => {})
          }
          else throw new Error()
        })
      }
    })
  }
  else throw new Error()
})
