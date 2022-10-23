'use strict';



// 1.    STATE VARIABLES       //

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;



// 2.    REFRACTORING FUNCTION       //


const displayContent = function (classes, contents) {
  document.querySelector(classes).textContent = contents
}

const setInnerHTML = function (classes, contents) {
  document.querySelector(classes).innerHTML = ""
  document.querySelector(classes).innerHTML = contents
}

//** Can be used instead pure .innerHTML **//

// let ionIcon = document.createElement('ion-icon')
// iconUp.setAttribute("name", "name of SVG")
// document.querySelector(".svg-icon").innerHTML = ""
// document.querySelector(".svg-icon").appendChild(ionIcon)



// 3.    MAIN CODE       //

document.querySelector(".check").addEventListener("click", () => {

  const guess = Number(document.querySelector(".guess").value);



  // 3.1.   When there is no input

  if (!Number.isInteger(guess) || guess > 20 || guess < 1) {
    displayContent(".message .text", "Number must be interger in range of 1-20")


    //   //When guessed number is bigger than 20
    // } else if (guess > 20) {
    //   displayContent(".message .text", "Number must be interger in range of 1-20")

    //   //When guessed number is smaller than 1
    // } else if (guess < 1) {
    //   displayContent(".message .text", "Number must be interger in range of 1-20")



    // 3.2.   When the guess is wrong

  } else if (guess !== secretNumber) {

    if (score > 1) {

      if (guess > secretNumber) {

        displayContent(".message .text", "Too high!")
        setInnerHTML(".svg-icon", "<ion-icon name=\"arrow-up-outline\"></ion-icon>")

      } else {

        displayContent(".message .text", "Too low!")
        setInnerHTML(".svg-icon", "<ion-icon name=\"arrow-down-outline\"></ion-icon>")

      }

      score--;
      displayContent(".score", score)

    } else {

      displayContent(".number", secretNumber)
      displayContent(".score", 0);
      displayContent(".message .text", "You lost the game!... try again");

      document.querySelector("body").style.backgroundColor = "#fe2836";
      document.querySelector(".number").style.width = "30rem"

      setInnerHTML(".svg-icon", "<ion-icon name=\"sad-outline\"></ion-icon>")

    }



    // 3.2.   When the guess is correct and player Wins

  } else if (guess === secretNumber) {
    displayContent(".number", secretNumber)
    displayContent(".message .text", "Correct Number!");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem"

    setInnerHTML(".svg-icon", "<ion-icon name=\"happy-outline\"></ion-icon>")

    if (score > highScore) {
      highScore = score;
      displayContent(".highscore", highScore)
    }
  }
});



// 4. RESET TO DEFAULT STATE = clicked "Again" button

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayContent(".number", "?")
  displayContent(".message .text", "Start guessing...")
  displayContent(".score", score)
  document.querySelector(".guess").value = ""
  document.querySelector(".svg-icon").innerHTML = ""
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem"
})