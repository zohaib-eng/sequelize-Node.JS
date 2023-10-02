const tutorial=require("../controllers/tutorial.controllers");
const { tutorials } = require("../model");
const tutorialModel = require("../model/tutorial.model");
var router=require("express").Router();

module.exports=app=>{
    router.post("/",tutorial.create);

    router.put("/:id",tutorial.update);

    router.get("/:id",tutorial.findOne);

    router.delete("/:id", tutorial.delete);

    app.use('/api/tutorials',router);
}