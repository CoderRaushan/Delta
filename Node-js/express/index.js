const exprss=require("express");
const app=exprss();
console.dir(app);
let port=3000;
app.listen(port,()=>
{
console.log(`app is listening on port:${port}`);
});

// it listen the request 
// app.use((req,res)=>{
//     console.log("request received:");
//     // res.send("this is a response");
//     let code="<h1>fruits</h1><ul><li>apple</li><li>red</li></ul>";
//     res.send(code);
// })
// it get differnt routes
app.get("/",((req,res)=>
{
    res.send("hello buddy,you contaced with root path:");
}));
// app.get("/apple",((req,res)=>
// {
//     res.send("you contaced with apple path:");
// }));
// app.get("/mango",((req,res)=>
// {
//     res.send("you contaced with mango path:");
// }));
// app.get("*",((req,res)=>
// {
//     res.send("request not found:");
// }));

// this is post 
// app.post("/",((req,res)=>
// {
//     res.send("you send a post request:");
// }));











// alone 
app.get("/",((req,res)=>
{
    res.send("hello buddy,you contaced with root path:");
}));
app.get("/:username/:id",(req,res)=>
{
let {username,id}=req.params;
let htmlstr=`<h1>welcome to the page of @${username}!`;// search with http://localhost:3000/raushankuamar/123
res.send(htmlstr);
});



app.get("/search",(req,res)=>
{
let {q}=req.query;
if(!q)
{
    res.send("nothing searched:");
}
let htmlstr=`<h1>there are the result for:${q}!`;// search with http://localhost:3000/search?q=mango
res.send(htmlstr);
});
