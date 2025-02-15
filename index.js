const express = require('express')
// const User = require('./models/user')
// const Contact = require('./models/contact')
require('./models/index')
const {addUser} = require('./controllers/userController')

const app = express()

// app.use(express.json())


const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/add', addUser)


// User.sync({ force: true });
// // User.drop();
// Contact.sync({force:true})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})