let form=document.querySelector("form");
form.addEventListener( "submit", function () {
    event.preventDefault();
// alert("button is clicked");
let name = document.querySelector('input');
console.log(name.value);
let outside=name.value;
console.log("this is stored value:",outside);
let pass =this.elements[1];
console.log("password is:", pass.value);
});
 

// change event

form.addEventListener( "change", function () {
let name1 = document.querySelector('input');
console.log("input changed:")
console.log("final value  is:", name1.value);
});
 
form.addEventListener( "input", function () {
    let name1 = document.querySelector('input');
    console.log("input changed:")
    console.log("final value  is:", name1.value);
    });