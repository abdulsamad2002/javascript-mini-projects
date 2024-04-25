const item = document.getElementById("clock")
setInterval(() => {
    let date = new Date()
    let time = date.getTime()
    item.style.color = "black"
    item.style.fontFamily = "Orbitron"
    clock.textContent = `${date.toLocaleTimeString()}`
},1000)