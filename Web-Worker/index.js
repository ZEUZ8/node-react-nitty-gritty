const worker = new Worker('worker.js')
const sumButton = document.querySelector("#sumBtn")
const bgButton = document.querySelector("#bgBtn")


/*when we click the calculate button, the main thread will block since the calculating a 
cpu-intensive work so the background changing or any other work will be blocke because of this */

// sumButton.addEventListener("click",(event)=>{
//     let sum = 0
//     for(let i=0;i<10000000000;i++){
//         sum += i
//     }
//     alert(`The total Sum is ${sum}`)
// })


//so let's implementh solution the multithread by creating wokers and passing the function to them 
sumButton.addEventListener("click",(event)=>{
    worker.postMessage("name")
})

//getting the result from the worker ans showing it in the alert
worker.onmessage = function(message){
    alert(`The total Sum is ${message?.data}`)
}

bgButton.addEventListener("click",event=>{
    if(document.body.style.background !== "green"){
        document.body.style.background = "green"
    }else{
        document.body.style.background = "orange"
    }
})