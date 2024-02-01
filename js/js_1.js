console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
for(let i=0;i<10;i++)
{
console.log(i);
}
console.log("odd no:")
for(let i=1;i<=15;i++)
{
    if(i%2!=0)
    {
        console.log(i);
    }
}
console.log("even no:")

for(let i=1;i<=15;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}
// console.log("5 ka table:")
//let n=prompt("enter a no:");
// for(let i=1;i<=10;i++)
// {
//     console.log(i*n);
// }
for(let i=1;i<=5;i++)
{
    console.log(i,"times:")
    for (let j = 1; j<=5; j++) 
    {
        console.log(j);
    }
}
console.log("while loop:")
let i=1;
while(i<10)
{
console.log(i);
i++;
}

let arr=["mango","apple","banana","kela","litchi"];
for(let i=0;i<arr.length;i++)
{
console.log(i,arr[i]);  
}