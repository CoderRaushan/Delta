// day 21
// for each function
arr2=[1,2,3,4,5,6];
arr2.forEach(element => {
    console.log(element);
});
// array object
student1=[
    {
    name:"raushan",
    age:20,
    marks:45
    },
   {
    name:"raushani",
    age:23,
    marks:75
   },
   {
    name:"ravi",
    age:35,
    marks:95
   }]
   student1.forEach((student1) =>{
    console.log(student1.age)
   });

//    map function
   let arr1=[1,2,3,4];
   let double=arr1.map((ele)=>{
    return ele*ele; //print double
   });
// make gpa of 
let gpa=student1.map((elem)=>
{
return elem.marks/10;//print gpa
});

// filter function
arr3=[1,2,3,4,5,6,7,8,9,10,11,12];
let ans=arr3.filter((ele)=>
{
    // return ele%2==0;
    // return ele%2==0;
    // return ele>3;
    return ele<5;
});

// every function
[2,4,6].every((ele)=>ele%2==0);//copy all every fun code and run in console browser
