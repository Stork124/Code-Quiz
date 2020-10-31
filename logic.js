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



 // QUIZ QUESTIONS

 let questions = [
     {
        question: 'Whatis used to declare an array?',
        choices: ['parentheses ()', 'greater / less than <>', 'square brackets []', 'curly braces {}'],
        answer: 'square brackets []'
    },
    {
        question: 'a for loop is used to ____?',
        choices: ['iterate through an array / object', 'count up an d down', 'spell the word for', 'do nothing'],
        answer: 'iterate through an array / object',
    },
    {
        question: 'what does API stand for?',
        choices: ['Always Pass Intonation', 'Advanced Programming Interface', 'Adapted Processor Information', 'Application Programming Interface'],
        answer: 'Application Programming Interface'
    }

 ]