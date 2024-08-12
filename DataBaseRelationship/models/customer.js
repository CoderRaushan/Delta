
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

const ordreschems=new Schema({
    item:String,
    price:Number
});

const customerSchema=new Schema({
    name:String,
    orders:[
      {
        type:Schema.Types.ObjectId,
        ref:"order"
      }
    ]
});

const order=mongoose.model("order",ordreschems);
const Customer=mongoose.model("Customer",customerSchema);
const addCustomer=async()=>
{
  let customer1=new Customer({
    name:"tejsh kumar",
  });
  let order1=await order.findOne({item:"samosa"});  
  let order2=await order.findOne({item:"cake"});  
  
  customer1.orders.push(order1);
  customer1.orders.push(order2);

  let res=await customer1.save();
  console.log(res);

  let res1=await Customer.find({}).populate("orders");
  console.log(res1[0]);
};
addCustomer();
// const addOrders=async()=>
// {
//     let res= await order.insertMany([
//         {
//             item:"samosa",
//             price:44
//         },
//         {
//             item:"cake",
//             price:300
//         },
//         {
//             item:"string",
//             price:20
//         }
//     ]);
//     console.log(res);
// };

// addOrders();
