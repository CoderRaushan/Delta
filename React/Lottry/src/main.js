function TickerNoGenerate(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}


function Sum(arr) {
    // return arr.reduce((sum,curval)=>sum+curval,0);
    let n=arr.length;
    let s=0;
    for(let i=0;i<n;i++)
    {
       s+=arr[i];
    }
    return s;
}


export { TickerNoGenerate, Sum };