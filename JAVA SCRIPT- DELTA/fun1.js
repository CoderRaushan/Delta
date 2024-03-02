function poem()
{
    console.log("twinkle twinkle little star,how i wonder what do are:");
}
//poem();

function roledice()
{
    console.log(Math.floor(Math.random()*6)+1);
}
// roledice();
function printInfo(name,age)
{
console.log(`${name}'s age is ${age}:`)
}
// printInfo("raushan",78);
// printInfo("raushan");
function avg(a,b,c)
{
 return ((a+b+c)/3);
}

console.log(avg(3,3,3));

// till 14 completed

const store = function(a,b){
 sum=a+b;
 return sum;
}
console.log(store(4,7));


// hight order function
const gemiini=function(pro,n)
{
    for(i=0;i<n;i++)
    {
        pro();
    }
   
}

let kyu=function()
{
    console.log("hello world");
}


gemiini(kyu,9);


// mehtods
const  calculator={
add: function(a,b)
{
    console.log(a+b) ;
},
sub: function(a,b)
{
    return a-b;
},
mul: function(a,b)
{
    return a*b;
},
divide: function(a,b)
{
    return a/b;
}
};
// we can also write like this 
const  calculatorr={
add(a,b)
{
    console.log(a+b) ;
},
sub(a,b)
{
    return a-b;
},
mul(a,b)
{
    return a*b;
},
divide(a,b)
{
    return a/b;
}
};

// this keyword 
const student=
{
    name:"raushan",
    age:4,
    eng:55,
    math:60,
    phy:66,
    getavg()
    {
       let avg=(this.eng+this.math+this.phy)/3;
        console.log(avg);
    }
}

// exception handling 
console.log("hi");
console.log("hi");
console.log("hi");
try
{
    console.log(a);
}
catch{
    console.log("error occur");
}

console.log("hello");
console.log("hello");
console.log("hello");

// arrow function
const load = (a,b)=>{
    sum=a+b;
    console.log(sum);
}

// settimeout function
console.log("hi i am founder of rausnoutes39");
setTimeout(() => {
    console.log("rausnotes39")
}, 4000);
console .log("welcome to");
// setinterval function

console.log("rausnotes39");
let id=setInterval(()=>{
    console.log("2 sec bad aayenge");
},2000);

// for stoping the setInterval
setTimeout(()=>{
clearInterval(id)
},10000);
// till day 20 completed

