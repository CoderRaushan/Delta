const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
main().then((res) => {
    console.log("connection success")
}).catch((err) => {
    console.log(err)
});
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:30
    },
    email:{
         type:String,
         required:true
    },
    age:
    {
        type:Number,
        required:false,
        min:[10,"age is too small less than 10 are not allowed"]
    },
    father:
    {
        type:String,
        default:"raushan"
    }
});

const User = mongoose.model("User", userSchema);

// const user1=new User({
//     name:"raushan1",
//     email:"raushan@123gmail.com",
//     age:20
// });
// user1.save().then((res)=>
// {
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// // insert Many
// User.insertMany(
//     [
//         {
//             name: "asdfs",
//             email: "rausadnn@gmai.com",
//             age: 45
//         },{
//             name: "sfdfs",
//             email: "rausanna@gmai.com",
//             age: 34
//         },{
//             name: "grgr",
//             email: "rausddann@gmai.com",
//             age: 42
//         }
//     ]).then((res)=>
//     {
//         console.log(res);
//     }).catch((err)=>
//     {
//         console.log(res);
//     });


// User.find({ age: { $gte: 44 } }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


// // findone 
// User.findOne({ age: { $gte: 44 } }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });




// search by id 
// User.find({ _id: '6670244621e1c9e32cd071dd' }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


// // search by id 
// User.findById('6670244621e1c9e32cd071dd').then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });



// 
// User.updateOne({name:"raushan"},{age:90}).then((res)=>
// {
//     console.log(res);
// }).catch((err)=>
// {
//   console.log(err);
// });

// afer update console the updated user info

User.findOneAndUpdate({ name: "raushan"}, { age:8 },{runValidators:true}).then((res) => {
    console.log(res); //runValidators:true means consider the set min age of a user 
}).catch((err) => {
    console.log(err.errors.age.properties.message);
});


// delete user

// User.deleteOne({_id:'6670244621e1c9e32cd071df'}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


// User.findOneAndDelete({_id:'6670244621e1c9e32cd071dd'},{new:true}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


