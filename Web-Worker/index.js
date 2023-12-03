const sumButton = document.querySelector("#sumBtn")
const bgButton = document.querySelector("#bgBtn")

sumButton.addEventListener("click",(event)=>{
    let sum = 0
    for(let i=0;i<10000000000;i++){
        sum += i
    }
    alert(`The total Sum is ${sum}`)
})

bgButton.addEventListener("click",event=>{
    if(document.body.style.background !== "green"){
        document.body.style.background = "green"
    }else{
        document.body.style.background = "orange"
    }
})