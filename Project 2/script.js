const form = document.querySelector("form")
form.addEventListener("submit" , (eth)=> {
    eth.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector("#weight").value)
    const bmi = (parseFloat(weight / (height * height))).toFixed(2)
    const dam = document.querySelector("#results")
    dam.innerText = `${bmi}`
    const result = document.querySelector("#result")
    if( bmi < 18.6){
        result.innerHTML = "<span>Underweight</span>"
    }
    else if( bmi >  18.6 && bmi < 24.9){
        result.innerHTML = "<span>Normal</span>"
    }
    else if( bmi > 24.9){
        result.innerHTML = "<span>Overweight</span>"
    }
})
