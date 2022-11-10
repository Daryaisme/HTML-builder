const fs = require('fs')
const path = require('path')

const way = path.join(__dirname, 'text.txt')
const readableStream = fs.createReadStream(way, 'utf-8');

readableStream.on('data', (data, error) => {
  if (error) throw new Error()
  console.log(data)
})
readableStream.on('end', () => {})
