const {User} = require('../models/index')

const addUser = async (req,res) => {
  
const pratham = await User.create({firstName:"Pratham",lastName:"Sahu"});

res.status(200).json(pratham.toJSON());

}

const getUsers = async (req,res) => {
  const data = await User.findAll({})
  res.status(200).json({data:data})

}

const getUser = async (req,res) => {
    const data = await User.findOne({
        where:{
            id:req.params.id
        }
    })
    res.status(200).json({data:data})
  
}

const postUser = async (req,res) => {
    const postData = req.body;
    const data = await User.create(postData)
    res.status(200).json({data:data})
  
}

const updateUser = async (req,res) => {
  const updatedData = req.body;
  const data = await User.update(updatedData,{
    where:{
        id:req.params.id
    }
  })
  res.status(200).json({data:data})
}

const deleteUser = async (req,res) => {
  const data = await User.destroy({
    where:{
        id:req.params.id
    }
  })
  res.status(200).json({data:data})
}




module.exports = {addUser,getUsers,getUser,postUser,updateUser,deleteUser};
