// let jsondata='{"fact":"The cat\s footpads absorb the shocks of the landing when the cat jumps.","length":71}';
// let validres=JSON.parse(jsondata);
// console.log(validres);




// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>
// {
// return res.json();
// }).then((data)=>
// {
// console.log("data-1:",data);
// return fetch(url);
// })
// .then((res)=>
// {
//     return res.json();
// })
// .then((data2)=>
// {
//     console.log("data-2",data2); 
// })
// .catch((err)=>
// {
//     console.error("Error:"+ err);
// });












// now let's do it using async and await 
let url1 = "https://catfact.ninja/fact";
async function get() {
    try {
        let res = await fetch(url1);
        let data3 = await res.json();
        console.log(data3.fact);

        let res2 = await fetch(url1);
        let data4 = await res2.json();
        console.log(data4);
    }
    catch (err) {
        console.log("Some error occured!", err);
    }
    console.log("bye");
}   
get()