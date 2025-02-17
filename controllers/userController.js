const {User} = require('../models/index')
const {Op} = require('sequelize')

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

const postAllUsers = async (req,res) => {
    const postData = req.body;
    const data = await User.bulkCreate(postData)
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

// get count of total records from DB
const countUsers = async (req,res) => {
  const count = await User.count('id')
  res.status(200).json({data:count})
}

// get records excluding specific id
const userExcludingId = async (req,res) => {
    const user = await User.findAll({
        where:{
            id:{
               [Op.ne]:req.params.id
        }
    }
    })
    res.status(200).json({data:user})
  }

// fetch top records
const topRecords = async (req,res) => {
    const user = await User.findAll({
        limit: 2
    })
    res.status(200).json({data:user})
  }

  // offset
  const skipTopRecords = async (req,res) => {
    const user = await User.findAll({
        offset: 2
    })
    res.status(200).json({data:user})
  }

  //salary between certain range
  const recordsInRange = async (req,res) => {
    const {firstSalary,secondSalary} = req.query;
    const user = await User.findAll({
        where:{
            salary:{
                [Op.between]: [firstSalary,secondSalary]
            }
        }
    })
    res.status(200).json({data:user})
  }
  



module.exports = {addUser,getUsers,getUser,postUser,updateUser,deleteUser,countUsers,userExcludingId,postAllUsers,topRecords,skipTopRecords,recordsInRange};
