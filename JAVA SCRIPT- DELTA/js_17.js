function savetodb(data) 
{
    return new Promise((resolve, reject) => 
    {
        let net = Math.floor(Math.random() * 10) + 1;
        if (net > 4) 
        {
            resolve("success:");
        }
        else 
        {
            reject("unsuccessfull:");
        }
    });
}
savetodb("raushan")
.then((Result)=>
{
    console.log('Data 1 saved to database', Result);
    return savetodb("ram");
})
.then((Result)=>
{
console.log('Data 2 saved to database', Result);
return savetodb("rani");
})
.then((Result)=>{
    console.log('Data 2 saved to database',  Result);
})
.catch((error)=>
{
    console.log("Failed to save data to the",error);
});


