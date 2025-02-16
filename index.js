const express = require('express')
// const User = require('./models/user')
// const Contact = require('./models/contact')
require('./models/index')

const userHandler = require('./routes/user.routes')

const app = express()
const port = 3000

app.use(express.json())
app.use('/api/user',userHandler)


app.get('/', (req, res) => {
  res.send('Hello World!')
})



// User.sync({ force: true });
// // User.drop();
// Contact.sync({force:true})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})