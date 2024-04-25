const randomHex = ()=>{
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let a=0; a<6; a++)
    {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
let interval
const changer = function(){
    document.body.style.backgroundColor = randomHex()
}
document.querySelector("#start").addEventListener("click", ()=> {
    document.querySelector("#start").setAttribute("disabled", '')
    document.querySelector("#stop").disabled= false
    interval = setInterval(()=> {changer()}, 1000)
})
document.querySelector("#stop").addEventListener("click", ()=> {
    clearInterval(interval)
    document.querySelector("#stop").setAttribute("disabled", '')
    document.querySelector("#start").disabled= false
    interval = NULL
    // document.body.style.backgroundColor = "#252525"
})