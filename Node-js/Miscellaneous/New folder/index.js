const express=require("express");
const app=express();
const port=8085;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/register",(req,res)=>
{
    let {username,password}=req.query;
    res.send(`getting response,welcome ${username}`);
});
app.post("/register",(req,res)=>
{
    let {username,password}=(req.body);
    res.send(`posting response,welcome ${username} and password is:${password}`);
});
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
}); 