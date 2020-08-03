var startBtn = document.querySelector("#start-btn");
var nextBtn = document.querySelector("#next-btn");
var scoreBtn = document.querySelector("#highScore-btn");
var timerElement = document.querySelector("#timer");
var titleElement = document.querySelector("#title");
var extraTextElement = document.querySelector("#extra-text");
var questionContainer = document.querySelector("#question-container");
var questionElement = document.querySelector("#question");
var formElement = document.querySelector("#form");
var backBtn = document.querySelector("#back-btn");
var clearBtn = document.querySelector("#clear-btn");
var leaderboardElement = document.querySelector("#leaderboard");
var answerButtonsElement = document.querySelector("#answer-buttons");
var submitBtn = document.querySelector("#submit-btn");
var choices = document.querySelectorAll(".answer-text");

var score = 0;
var currentQuestion;


var questionPool = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correct: 2
    },
    {
        question: "The condition in an if/else statement is enclosed with _____.",
        answers: ["parenthesis", "curly brackets", "quotes", "square brackets"],
        correct: 0
    },
    {
        question: "Arrays in Javascript cna be used to store _____.",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: 3
    },
    {
        question: "String values must be enclosed within _____ when beign assigned to variables.",
        answers: ["commas", "quotes", "curly brackets", "parenthesis"],
        correct: 1
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["Javascript", "terminal / bash", "for loops", "console.log"],
        correct: 3
    }
]

function startQuiz(){

}

function nextQuestion(){

}

function displayQuestion(){

}

function setTimer(){

}

function checkAnswer(){

}

