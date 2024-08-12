const express = require("express");
const mongoose=require("mongoose");
const {Schema}=mongoose;
main().then(()=>
{
    console.log("connection successfull");
}).catch(err => console.log(err));

async function main() 
{
  await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');
}

const userschema=new Schema({
    username:String,
    email:String,
});

const postschema=new Schema({
  content:String,
  likes:Number,
  user:{
    type:Schema.Types.ObjectId,
    ref:"User",
  }
});

const User=mongoose.model("User",userschema);
const Post=mongoose.model("Post",postschema);

const addData=async()=>
{
  let user1=new User({
    username:"Raushan_234",
    email:"raushankumar23082004@gmail.com"
  });

  let post1=new Post({
    content:"Hello Raushan",
    likes:4,
  });
  post1.user=user1;
  let res=await user1.save();
  let res2=await post1.save();
  console.log(res);
  console.log(res2);

};
addData();