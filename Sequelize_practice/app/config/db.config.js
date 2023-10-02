module.exports={
    HOST:"localhost",
    USER:"root",
    PASSWORD:"",
    DB:"Tutorial",
    dialect:"mysql",
    port: 3306,
    debug: false,
    pool:{
        max:5,
        min:0,
        aquire:30000,
        idle:10000
    }
};