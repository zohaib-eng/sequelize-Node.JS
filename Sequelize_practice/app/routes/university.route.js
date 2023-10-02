const university=require("../controllers/university.controller");
const {universty}=require('../model');
const universityModel=require("../model/university.model");
var router=require("express").Router();

module.exports=app=>{
    router.post("/",university.create);


    app.use('/api/university',router);
}