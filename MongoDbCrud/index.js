// require express
const express = require("express");
//make app of express to make them in use
const app = express();
//require path
const path = require("path");
const Chat = require("./models/chat.js");
const methodOvride=require('method-override');

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOvride("_method")); 

// require mongoose
const mongoose = require("mongoose");
const chat = require("./models/chat.js");
main().
    then(() => {
        console.log("connection successfull");
    }).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// let chat1=new Chat({
//     from:"ludhiana",
//     to:"bihar",
//     msg:"i am comming bihar",
//     created_at:new Date()
// });

// chat1.save().then((res)=>
// {
//     console.log(res);
// }).catch((err)=>
// {
//     console.log("data saved succesful");
// });








app.get("/", (req, res) => {
    res.send("good working ");
});

app.get("/chats", async (req, res) => {
    let chats = await Chat.find();//chat.find() ek async fun hai kyo ki ye database se data 
    // la raha hai to ye promise return krega (either result or error)
    // to iss func ke liye hame wait yani await karna prega aur 
    // jo call back hai usee async type ka bananna prega

    console.log(chats);
    res.render("index.ejs", { chats });
});
// create user route
app.get("/chats/newuser", (req, res) => {
    res.render("newuser.ejs");
});
// create user route
app.post("/chats", (req, res) => {
    let { from, msg, to } = req.body;
    let newuser = new Chat
        ({
            from: from,
            msg: msg,
            to: to,
            created_at: Date()
        });
    newuser.save().then((res, err) => 
    {
        console.log("user created successfullly");
    }).catch((err)=>
    {
        console.log("user is not created successfullly");
    });
    res.redirect("/chats");
});
// edit route
app.get("/chats/:id/edit",async(req,res)=>
{
  let {id}=req.params;
  let chat=await Chat.findById(id);
    res.render("edit.ejs",{chat});
});

// edit route
app.put("/chats/:id",async(req,res)=>
{
    let{msg:newmsg}=req.body;
    // console.log(newmsg);
    let {id}=req.params;
    await Chat.findByIdAndUpdate(id,{msg:newmsg},{runValidators:true,new:true});
    res.redirect("/chats")
});
// delete route
app.delete("/chats/:id",async(req,res)=>
{
    let {id}=req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

app.listen(9000, () => {
    console.log("working")
});