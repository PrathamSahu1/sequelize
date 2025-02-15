const {User} = require('../models/index')

const addUser = async (req,res) => {
  
const pratham = await User.create({firstName:"Pratham",lastName:"Sahu"});

res.status(200).json(pratham.toJSON());

}

module.exports = {addUser};
