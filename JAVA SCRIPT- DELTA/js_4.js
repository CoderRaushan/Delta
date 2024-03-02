// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]
// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6
// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25
// q1
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// target=prompt("enter target element to delete:")
// for(let i=0;i<arr.length;i++)
// {
//     if(target==arr[i])
//     {
//         arr.splice(i,1);
//     }
// }
//     console.log(arr);
 let a=287152;
 let c=0;
 let sum=0;
 while(Math.floor(a) !== 0)
 {
    let d=a%10;
    sum=sum+d;
    a = Math.floor(a / 10);
    c++;

 }
 console.log(sum);