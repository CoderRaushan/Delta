function getnum()
{
    return new Promise((reslove,failure)=>
    {
       setTimeout(() => 
       {
        let num=Math.floor(Math.random()*10)+1;
        console.log(num);
        reslove();
       }, 1000);
    }
)};
  async function demo()
  {
   await   getnum();
    await  getnum();
    await  getnum();
    await  getnum();
    await  getnum();
    await  getnum();
    await  getnum();
    getnum();
  }