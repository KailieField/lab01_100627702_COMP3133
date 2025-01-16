const fs = require('fs')

const zlib = require('zlib')


const readStream = fs.createReadStream('input_stream.txt')
const writeStream = fs.createWriteStream('output_stream.txt')

readStream.on('data', (chunk) => {
    console.log(chunk.toString())
})

readStream.on('end', () => {
    console.log('Data read stream end')
})

readStream.on('error', (err) =>{
    console.log(`error read stream ${err}`)
})

readStream.on('close', ()=> {
    console.log('read stream close')
})
writeStream.on('error', ()=> {
    console.log(`error write stream ${err}`)
})

writeStream.write("Hello")
writeStream.write("World")
writeStream.write("NodeJs")

//pipes
readStream.pipe(writeStream)
readStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('stream.gz'))