//This section delcares the arrays for the questions and answers for each question
var questions = ["Commonly used data types DO NOT include:", "The condition in an if/else statement is enclosed with _____.", "Arrays in Javascript can be used to store _____.", "String values must be enclosed within _____ when beign assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is:"];
var firstChoices = ["strings", "booleans", "alerts", "numbers"];
var secondChoices = ["quotes", "curly brackets", "parenthesis", "square brackets"];
var thirdChoices = ["numbers and strings", "other arrays", "booleans", "all of the above"];
var fourthChoices = ["quotes", "curly brackets", "commas", "parenthesis"];
var fifthChoices = ["Javascript", "console.log", "for loops", "terminal / bash"];

//This section declares variables that point to the HTML elements
var startBtn = document.querySelector("#start-btn");
var questionElement = document.querySelector("#question");
var answerBtnElement = document.querySelector("#answer-buttons")
var timerElement = document.querySelector("#timer");
var extraTextElement = document.querySelector("#extra-text");
var titleElement = document.querySelector("#title");
var scoreBoardElement = document.querySelector("#score-container");
var highscoreBtn = document.querySelector("#highscore-btn");
var nameInput = document.querySelector("#fName");
var submitBtn = document.querySelector("#submit-btn");
var leaderboardElement = document.querySelector("#leaderboard");
var backBtn = document.querySelector("#back-btn");
var clearBtn = document.querySelector("#clear-btn");
var formElement = document.querySelector("#form");

//This section delcares variables that will be changes throughout the rest of the code
var questionIndex = 0;
var score = 0;
var secondsLeft = 50;
var timeInterval;

//These event listeners determine the functionality of the button clicks
startBtn.addEventListener("click", function(){
    startQuiz();
    setTimer();
});

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    var leaderboardInfo = {
        name: nameInput.value,
        points: score
    };
    if (leaderboardInfo.name === ""){
        return false;
    } else {
        localStorage.setItem("leaderboardInfo", JSON.stringify(leaderboardInfo));

        var newestScore = JSON.parse(localStorage.getItem("leaderboardInfo"));
        var scoreList = document.createElement("li");
        scoreList.textContent = leaderboardInfo.name + " - " + leaderboardInfo.points;
        document.body.children[1].children[5].children[0].appendChild(scoreList);
    }
    leaderboardPage();
});

highscoreBtn.addEventListener("click", function(){
leaderboardPage();
});

backBtn.addEventListener("click", function(){
    document.querySelector("#score-container").classList.add("hidden");
    document.querySelector("#highscore-btn").classList.remove("hidden");
    document.querySelector("#start-btn").classList.remove("hidden");
    document.querySelector("#extra-text").classList.remove("hidden");
    titleElement.textContent = "Coding Quiz Challenge";
    extraTextElement.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will reduce the timer by 10 seconds.";
});

clearBtn.addEventListener("click", function(){
    localStorage.clear();
    while (leaderboardElement.firstChild){
        leaderboardElement.removeChild(leaderboardElement.firstChild);
    }
});

//These functions determine the page layout
function startQuiz(){
    document.querySelector("#start-btn").classList.add("hidden");
    document.querySelector("#highscore-btn").classList.add("hidden");
    document.querySelector("#extra-text").classList.add("hidden");
    document.querySelector("#question-container").classList.remove("hidden");
    document.querySelector("#timer").classList.remove("hidden");
    displayFirstQuestion();
}

function displayFirstQuestion(){
    questionIndex = 0;
    questionElement.textContent = questions[questionIndex];
    for (var i = 0; i < firstChoices.length; i++){
        var answerChoices = document.createElement("button");
        answerChoices.setAttribute("class", "btn");
        answerChoices.textContent = firstChoices[i];
        document.body.children[1].children[2].children[1].appendChild(answerChoices);
        answerChoices.addEventListener("click", function(){
            if (event.target.textContent === "alerts"){
                score = score + 100;
            } else {
               secondsLeft = secondsLeft - 10;
                if (score <= 0){
                    score = 0;
                } else {
                    score = score - 25;
                }
            }
            resetAnswers();
            displaySecondQuestion();
        });
    }
}

function displaySecondQuestion(){
    questionIndex++;
    questionElement.textContent = questions[questionIndex];
    for (var i = 0; i < secondChoices.length; i++){
        var answerChoices = document.createElement("button");
        answerChoices.setAttribute("class", "btn");
        answerChoices.textContent = secondChoices[i];
        document.body.children[1].children[2].children[1].appendChild(answerChoices);
        answerChoices.addEventListener("click", function(){
            if (event.target.textContent === "parenthesis"){
                score = score + 100;
            } else {
               secondsLeft = secondsLeft - 10;
                if (score <= 0){
                    score = 0;
                } else {
                    score = score - 25;
                }
            }
            resetAnswers();
            displayThirdQuestion();
        });
    }
}

function displayThirdQuestion(){
    questionIndex++;
    questionElement.textContent = questions[questionIndex];
    for (var i = 0; i < thirdChoices.length; i++){
        var answerChoices = document.createElement("button");
        answerChoices.setAttribute("class", "btn");
        answerChoices.textContent = thirdChoices[i];
        document.body.children[1].children[2].children[1].appendChild(answerChoices);
        answerChoices.addEventListener("click", function(){
            if (event.target.textContent === "all of the above"){
                score = score + 100;
            } else {
               secondsLeft = secondsLeft - 10;
                if (score <= 0){
                    score = 0;
                } else {
                    score = score - 75;
                }
            }
            resetAnswers();
            displayFourthQuestion();
        });
    }
}

function displayFourthQuestion(){
    questionIndex++;
    questionElement.textContent = questions[questionIndex];
    for (var i = 0; i < fourthChoices.length; i++){
        var answerChoices = document.createElement("button");
        answerChoices.setAttribute("class", "btn");
        answerChoices.textContent = fourthChoices[i];
        document.body.children[1].children[2].children[1].appendChild(answerChoices);
        answerChoices.addEventListener("click", function(){
            if (event.target.textContent === "quotes"){
                score = score + 100;
            } else {
               secondsLeft = secondsLeft - 10;
                if (score <= 0){
                    score = 0;
                } else {
                    score = score - 25;
                }
            }
            resetAnswers();
            displayFifthQuestion();
        });
    }
}

function displayFifthQuestion(){
    questionIndex++;
    questionElement.textContent = questions[questionIndex];
    for (var i = 0; i < fifthChoices.length; i++){
        var answerChoices = document.createElement("button");
        answerChoices.setAttribute("class", "btn");
        answerChoices.textContent = fifthChoices[i];
        document.body.children[1].children[2].children[1].appendChild(answerChoices);
        answerChoices.addEventListener("click", function(){
            if (event.target.textContent === "console.log"){
                score = score + 100;
            } else {
                if (score <= 0){
                    score = 0;
                } else {
                    score = score - 25;
                }
            }
            recordNameScore();
            resetAnswers();
        });
    }
}

function recordNameScore(){
    document.querySelector("#question-container").classList.add("hidden");
    document.querySelector("#extra-text").classList.remove("hidden");
    document.querySelector("#form").classList.remove("hidden");
    document.querySelector("#timer").classList.add("hidden");
    extraTextElement.textContent = "Your final score is: " + score;
    clearInterval(timeInterval);
    formElement.reset();
}

function leaderboardPage(){
    document.querySelector("#score-container").classList.remove("hidden");
    document.querySelector("#highscore-btn").classList.add("hidden");
    document.querySelector("#start-btn").classList.add("hidden");
    document.querySelector("#extra-text").classList.add("hidden");
    document.querySelector("#form").classList.add("hidden");
    titleElement.textContent = "Highscore Leaderboard";
}

//This function creates the timer
function setTimer(){
    timeInterval = setInterval(function(){
        secondsLeft--;
        timerElement.textContent = "Time Remaining: " + secondsLeft;

        if (secondsLeft === 0){
            clearInterval(timeInterval);
            recordNameScore();
        }
    }, 1000);
}

//This function resets the answers between questions
function resetAnswers(){
    while (answerBtnElement.firstChild){
        answerBtnElement.removeChild(answerBtnElement.firstChild);
    }
}