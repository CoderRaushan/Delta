const num=prompt("Enter max number:");
const random=Math.floor(Math.random()*num)+1;
let guess=prompt("guess the number:");
while(true)
{
    if(guess=="quit")
    {
        console.log("user quit:");
        break;
    }
     if(guess==random)
    {
        console.log("congrass!! you won,ramdom no was:",random);
        break;
    }
    else if(guess<random)
    {
        guess=prompt("hint:your guess was small,please try again!:");
    }
    else  
    {
        guess=prompt("hint:your guess was large,please try again!:");
    }
}   