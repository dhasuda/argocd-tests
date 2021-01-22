import express from 'express'

export const PORT = 8080

// Testing

const app = express()
app.use(express.json())

app.post('/', async (_, res) => {
  res.statusCode = 200
  res.send('Hello, world!')
})

app.listen(PORT)
console.log('Listening to port', PORT)
