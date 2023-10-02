const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const app=express();
const cookieParser = require('cookie-parser');
const { error } = require('console');
// var corsOption={
//     origin:"http://localhost:3360"
// }

// app.use(cors(corsOption))

app.use(express.json())

app.use(express.urlencoded({urlencoded: true}))
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.options("*", cors());
const PORT = 3360;
app.listen(PORT, () => {
  console.log(`app listening at http://0.0.0.0:${PORT}.`);
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}.`);
//   });

const db=require("./app/model");
db.sequelize.sync({ force: true }).then(()=>{
    console.log("Synced db");
})
.catch((err) => {
    console.log("Failed to sync db: " + err.message);
});

require("./app/routes/tutorial.route")(app)
require("./app/routes/university.route")(app)

module.exports = app;