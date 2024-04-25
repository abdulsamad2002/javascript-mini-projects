const randomNum = parseInt(Math.random() * 100 + 1)

const sub = document.getElementById("subt")
const userInput = document.getElementById("guessField")
const guessSlot = document.querySelector(".guesses")
const result = document.querySelector(".lastResult")
const loworhigh = document.querySelector(".lowOrHi")
const para = document.createElement("p")
const butt = document.createElement("button")
const resultPara = document.querySelector(".resultParas")

let number = 1
let num = 10

sub.addEventListener("click", (eve)=>{
    eve.preventDefault()
    const chess = parseInt(userInput.value)
    validate(chess)
})

function validate(guess)
{
    if(isNaN(guess))
    {
        alert("Please enter a fucking valid number bro!")
    }
    else
    {
        if(number >= 10)
        {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNum}`)
            endGame()
        }
        else
        {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess)
{
    if(guess === randomNum)
    {
        displayMessage("You guessed it right bro!")
        endGame()
    } 
    else if(guess > randomNum )
    {
        displayMessage("Think of something smaller")
    }
    else if(guess < randomNum )
    {
        displayMessage("Think of something bigger")
    }
}

function displayGuess(guess)
{
    userInput.value= ""
    guessSlot.innerHTML += `${guess},`
    number++
    num--
    result.innerHTML = `${num}`
}

const displayMessage = (message) =>loworhigh.innerText = `${message}`

function endGame()
{
    userInput.value = ""
    userInput.setAttribute('disabled', '')
    sub.setAttribute('disabled', '')
    butt.innerText = `Start Newgame`
    butt.classList.add("buttock")
    resultPara.appendChild(butt)
    playGame = false
    newGame()
}

function newGame()
{
    const newButton = document.querySelector(".buttock")
    newButton.addEventListener("click", (eve) => {
        location.reload()
    })
}
