let body = document.querySelector('body');
//GRAB START BUTTON
let sartButton = document.querySelector('#startButton');
//GRAB START SCREEN HTML
let startScreen = document.querySelector('.container');
// GRAB COUNTER HTML FOR TIMER
let counterEl = document.querySelector('#counter');
let time = 60

// TIMER FUNCTION

let timer = function timeLeft(){
    let timeRemaining = setInterval(() => {
        time--;
        counterEl.textContent = time;

        if (time === 0){
            clearInterval(timeRemaining);
            //GAME OVER MESSAGE / SHOWSCORE
        }

    }, 1000);
}



//HIDE START SCREEN WHEN START BUTTON IS CLICKED
let startQuiz = startButton.addEventListener('click', function(){
                    startScreen.setAttribute('class', 'hide');
                });
                startButton.addEventListener('click', timer)
                









/*playing with timer and start button
//grab button
let startCountDown = document.querySelector('#startButton');
//grab document element to place counter
let counter = document.querySelector('#counter')


var countdown = function(num) {
    for (var i = 60; i > 0; i--) {
      counter.innerHTML = i;
    }
  };


startCountDown.addEventListener('click', countdown)

*/



/*
//variables

let startButton = document.querySelector('#startButtn');



// countdown timer, currently not attatched to start button

function startCountdown(seconds){
    let counter = seconds;
    
    const interval = setInterval(() => {
        console.log(counter);
        counter--;
    }, 1000);
}

startButton.addEventListener('click', startCountdown);



 // grab the button
 //let startButton = document.querySelector('button')
 // grab paragraph
 let counterDisplay = document.querySelector('#counter')
 // define counter
 let counter = 60
 //display counter
 counterDisplay.innerHTML = counter
 // create countdown from 60 - 0
 function countDown() {
     
     let timerId = setInterval(function() {
         decreaseCounter(timerId)
     }, 1000);
     //console.log(“contdown Called”)
 }
 function decreaseCounter(timerId) {
     counter--;
     counterDisplay.innerHTML = counter;
     
     // check if counter is 0 to clear interval
     if (counter === 0) {
         clearInterval(timerId);

     }
 }
 //define quiz start
 function quizStart(){
     alert('Begin Quiz')
 }
 // start timer when button is clicked
 startBtn.addEventListener('click', countDown);
 startBtn.addEventListener('click', quizStart);
 */



 