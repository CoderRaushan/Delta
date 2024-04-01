const figlet=require("figlet");        
figlet("jay jaiswal jhaat ka baal", function (err, data) 
{
    if (err) 
    {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
});