module.exports=(sequelize,Sequelize)=>{
    const University=sequelize.define("university",{
        name:{
            type:Sequelize.STRING,
        },
        department:{
            type:Sequelize.STRING
        }
    });

    return University;
};