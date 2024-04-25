const buttons = document.querySelectorAll(".button")
console.log(buttons)
buttons.forEach((l) => {
    console.log(l)
    l.addEventListener('click', (eve) => {
        console.log(eve)
        const iden = eve.target.id
        console.log(iden)
        switch(iden)
        {
            case "grey" :
                document.body.style.backgroundColor = "grey"
                document.body.style.color = "beige"
            break;
            case "red" :
                document.body.style.background = "red"
                document.body.style.color = "black"
            break;
            case "yellow" :
                document.body.style.background = "yellow"
                document.body.style.color = "black"
            break;
            case "blue" :
                document.body.style.background = "blue"
                document.body.style.color = "white"
            break;
            case "white" :
                document.body.style.background = "white"
                document.body.style.color = "#212121"
            break;
            case "magenta" :
                document.body.style.background = "magenta"
                document.body.style.color = "black"
            break;
        }
    })
})