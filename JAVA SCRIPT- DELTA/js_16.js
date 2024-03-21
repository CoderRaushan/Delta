function savetodb(data,successfull,failer)
{
    let internet=Math.floor(Math.random()*10+1);
    if(internet>4)
    {
        successfull();
    }
    else
    {
        failer();
    }
}
savetodb("rausahn",()=>
{
    console.log("your data is successfully saved to database:"); 
    savetodb("choti",()=>
{
    console.log("your data is successfully saved to database:"); 
},()=>{
    console.log("week connection:your data is not saved to database:");
});
},()=>{
    console.log("week connection:your data is not saved to database:");
    savetodb("ghoti",()=>
{
    console.log("your data is successfully saved to database:"); 
},()=>{
    console.log("week connection:your data is not saved to database:");
});
});