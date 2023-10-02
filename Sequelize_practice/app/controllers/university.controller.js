// const university=require("../controllers/university.controller")
const {university}=require('../model')
const db=require('../model')
const University=db.universty;
const Op=db.Sequelize.Op;



exports.create = (req, res) => {
    if(!req.body.name){
      res.status(400).send({
          message:"content cannot be empty."
      });
      return;
    }
  
    
    const university={
    name:req.body.name,
    department:req.body.department,
    }
  
    University.create(university).then(data=>{
      res.send(data);
    })
    .catch(err=>{
      res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
    });
  };