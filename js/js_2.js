let arr=[["ram","sita","mohan"],["pawan","keshaw","raushan"]];
for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr[i].length;j++)
    {
        console.log(`j=${j},${arr[i][j]}`);
    }
}   
let arr1=["ram","sita","mohan","pawan","keshaw","raushan"];
for(let name of arr1)
{
    console.log(name);
}
let arr3=["hi my name is raushan kumar singh "];
for(let char of "raushankumar")
{
    console.log(char);
}
console.log(`for of loop:`);
let arr4=[["ram","sita","mohan"],["pawan","keshaw","raushan"]];
for(names of arr4)
{
    for(name of names)
    {
        console.log(name);
    }
}