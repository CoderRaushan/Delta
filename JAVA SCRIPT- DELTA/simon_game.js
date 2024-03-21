    let gameseq=[];
    let userseq=[];
    let btnc=["yellow","red","purple", "green"];  //button colors
    let started=false;
    let level=0;
    let h3=document.querySelector("h3");
 document.addEventListener("keypress",function(event)
 {
  if(started==false)
  {
    console.log("game is started:");
  }
  started=true;
  levelup()
 })
 function btnflash(btnh)
 {
  btnh.classList.add("flash");
  setTimeout(function()
  {
    btnh.classList.remove(" flash")
  },1000);
  }
    function levelup()
    {
        level++;
        h3.innerText=`Level:${level}`;
        btnflash();
        let randomidx=Math.floor(Math.random()*3);
        let radomcolor=btnc[randomidx];
        let ramdombtn=document.querySelector(`.${radomcolor}`);
        console.log(randomidx);
    }

    function btnpress()
    {
       let btn=this;
       btnflash(btn);
    }
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn)
{
  btn.addEventListener("click",btnpress)
  {

  }
}
//code is not running properly this's why i am leaving it 
//24 