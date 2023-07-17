// CREATE SERVER
const express = require("express");
const app = express();
const _PORT = "3001";
const cors = require("cors")
app.use(cors())
app.use(express.json())

// Connect to DB
const   username = "bippo",
        password = "matik12345",
        database = "mern-new"

const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://${username}:${password}@cluster1.wofue0i.mongodb.net/${database}`,{ useNewUrlParser: true , useUnifiedTopology: true })

// USER MODEL
const UserModel = require("./models/Users");

app.post("/createUser", async(req,res)=>{
    const newUser = new UserModel(req.body);
    await newUser.save()

    // res.json(req.body);
})

app.get("/create", async(req,res)=>{

    res.send("hello")
})

app.use(express.static('../client/build'))
app.get("*", async(req,res)=>{

  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(process.env.PORT || _PORT, () => {
  console.log("hello word,ok!!!!!!!!!!!!");
});
