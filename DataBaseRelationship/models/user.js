
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

const useschema=new Schema({
    username:String,
    addresses:
    [
        {   _id:false,
            location:String,
            city:String,
        }
    ]
});

const user=mongoose.model("user",useschema);

const adduser=async()=>
{
    let user1=new user({
        username:"raushan",
        addresses:[
            {
                location:"221B Baker Street",
                city:"Ludhaiana"
            }
        ]
    });
    user1.addresses.push({
        location:"p32 Baker wallstreet",
        city:"Ludhaiana"
    });
    
   let res= await user1.save();
   console.log(res);
}
adduser();