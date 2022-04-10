

let fib = function(n)
{
    if(n==1)
    {
        return 0
    }
    if(n==2)
    {
        return 1
    }
    else
    {
     return fib(n-1)+fib(n-2)  
    }
    
} 
let fibseries = function(m){
   let i=1,arr=[];
    while(i<=m)
    {
    arr.push(fib(i));
    i++;
    }
    return arr
    
    
}

let mycall = new Promise((resolve,reject)=>
{
    if(true)
    {
        resolve(fibseries(10))
    }
    else{
        reject("fail")
    }
})
console.log("Promise Task started")
mycall.then(result=>console.log(result)).catch(err=>console.log(err))
console.log("Promise Task ended");