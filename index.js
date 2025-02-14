const express = require('express')
const User = require('./models/user')
const app = express()

// app.use(express.json())


const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

User.sync({ force: true });
// User.drop();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})