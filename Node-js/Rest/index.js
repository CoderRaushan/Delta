const express=require("express");
const app=express();
let port=8086;
const path=require('path');
const { v4: uuidv4 } = require('uuid');
 // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const methodoveride=require('method-override');

app.use(express.urlencoded ({extended:true}));
app.use(methodoveride ('_method'));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=
[
{   id:uuidv4(),
    username:"raushan kumar",
    content:"honesty is the best policy"
},
{   id:uuidv4(),
    username:"rahul kumar",
    content:"honesty is the best policy"
}
,{   id:uuidv4(),
    username:"amitabh kumar",
    content:"honesty is the best policy"
}
];

app.get("/posts",(req,res)=>
{
res.render("index.ejs",{posts});
});


app.get("/posts/new",(req,res)=>
{
res.render("new.ejs");
});


app.post("/posts",(req,res)=>
{
let {username ,content}=req.body;
let id=uuidv4();
posts.push({id,username,content})
res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>
{
let {id}=req.params;
let post=posts.find((p)=>id===p.id); 
// console.log(post);
res.render("show.ejs",{post});
});


app.patch("/posts/:id",(req,res)=>
{
let {id}=req.params;
let newcontent=req.body.content;
let post=posts.find((p)=>id===p.id);
post.content=newcontent;
res.redirect("/posts");
});

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
     posts=posts.filter((p)=>id!==p.id);
     res.redirect("/posts");
});
 
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id==p.id);
    res.render("edit.ejs",{post});
});






app.listen(port,()=>
{
    console.log(`app is listining at port${port}`);
});