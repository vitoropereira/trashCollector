import express from 'express'

const app = express()

app.get('/users', (request, response) => {
  console.log('listagem de usuários')

  response.json([
    'Hello world',
    "06559467481",
    "oi",
    "Oi de novo"
  ])
})

app.listen(3333)