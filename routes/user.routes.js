const express = require("express")
const router = express.Router()
const Usermethods = require('../controllers/userController')

//Create Data
router.post('/add', Usermethods.postUser)
router.post('/addAll', Usermethods.postAllUsers)

//Read Data
//app.get('/get', Usermethods.addUser)

router.get('/get', Usermethods.getUsers)
router.get('/get/:id', Usermethods.getUser)


//Update Data
router.patch('/update/:id',Usermethods.updateUser)

//Delete Data
router.delete('/delete/:id',Usermethods.deleteUser)

//Query
router.get('/countusers',Usermethods.countUsers)
router.get('/userexcludingid/:id',Usermethods.userExcludingId)
router.get('/topRecords/:records',Usermethods.topRecords)
router.get('/skipTopRecords/:records',Usermethods.skipTopRecords)
router.get('/recordsInRange',Usermethods.recordsInRange)




module.exports = router;
