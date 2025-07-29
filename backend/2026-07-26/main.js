const express = require('express')
const app = express()
const port = 3000

app.get('/test', (req, res) => {
  res.json({
    id: 1,
    name: 'test'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})