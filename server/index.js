const express = require("express");    // express est du backend
const app = express();                  //app de backend
app.use(express.json()); // to fix json post from body
const db = require("./models");         //base de donne


const postRouter =require("./routes/posts");
app.use("/posts", postRouter);      // utiliser router 
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");     //print port server
    });
});
// const express = require("express");
// const app = express(); 
// const cors = require("cors"); 
// app.use(express.json());
// app.use(cors());
// const db = require("./models"); 
// // Routers
// const postRouter =require("./routes/posts");
// app.use("/posts", postRouter);
// db.sequelize.sync().then(() => {
// app.listen (3001, () => {
// console.log("Server running on port 3001");
// });
// });