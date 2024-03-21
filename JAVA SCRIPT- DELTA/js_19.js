async function hello()
{
    console.log("hello world!");
    // throw("week connection ");
}
hello()
.then((result)=>
{
    console.log("result is good",result);
})
.catch((error)=>
{
    console.log("result is bad:",error);
});






