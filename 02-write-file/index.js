const path = require('path')
const way = path.join(__dirname, 'text.txt')

const fs = require('fs')
const recordedStream = fs.createWriteStream(way)

const { stdout, stdin } = require('process')
const readline = require('readline').createInterface(stdin, stdout)

console.log('Введите текст для записи в файл')

readline.on('line', (data) => {
  if (data.toLowerCase() !== 'exit') {
    recordedStream.write(data)
    console.log('Что-нибудь еще?')
  }
  else {
    console.log('Пока!')
    recordedStream.close()
    readline.close()
  }
})

readline.on('SIGINT', () => {
  console.log('Пока!')
  recordedStream.close()
  readline.close()
})
