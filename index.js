// This file is for staritng server when we are using array or a file as database

import express from "express";
const app = express();

// importing and using bodypraser
import bodyParser from "body-parser"; 
app.use(bodyParser.json()); // bodyparser convert obj to json or json to obj for you

// importing router
import userRoutes from "./routes/user.js";
import bookRoutes from "./routes/book.js";

const PORT = 8888;

// Defining main end points

app.get("/",(req, res)=>{
    res.send("welcome to homepage");
})

// Router will be used to handle all API,s
// userRoutes will be used to handle all user type API's
//for all endpts with prefix "/user" use  userRoutes bz we are
// handling them in userRoutes
app.use("/user",userRoutes);


 //bookRoutes will be used to handle all book type API's
 app.use("/book",bookRoutes);

// starting app
app.listen(PORT,()=>{
    console.log(`server is running at http://127.0.0.1:${PORT}`);
})

