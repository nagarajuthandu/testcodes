let mycall = new Promise((resolve,reject)=>
{
    if(true)
    {
        resolve("sucess")
    }
    else{
        reject("fail")
    }
})
console.log("Task started")
mycall.then(result=>console.log(result)).catch(err=>console.log(err))
console.log("Task ended")






