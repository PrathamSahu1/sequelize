const express = require("express")
const router = express.Router()
const Usermethods = require('../controllers/userController')

//Create Data
router.post('/add', Usermethods.postUser)

//Read Data
//app.get('/get', Usermethods.addUser)

router.get('/get', Usermethods.getUsers)
router.get('/get/:id', Usermethods.getUser)


//Update Data
router.patch('/update/:id',Usermethods.updateUser)

//Delete Data
router.delete('/delete/:id',Usermethods.deleteUser)

module.exports = router;
