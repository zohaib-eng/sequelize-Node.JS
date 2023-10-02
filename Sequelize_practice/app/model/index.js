const dbConfig=require('../config/db.config');

const Sequelize=require('sequelize');
// const { DB } = require('../config/db.config');
const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    operatorsAliases:false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
      }
});

const db={};

db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.tutorials=require("../model/tutorial.model")(sequelize,Sequelize);
db.universty=require("../model/university.model")(sequelize,Sequelize);

db.universty.hasMany(db.universty,{as:"name"});
db.universty.belongsTo(db.tutorials,{
    foreignKey:"tutorialsId",
    as:"tutorials"
})


module.exports=db;