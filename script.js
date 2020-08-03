var questions = ["Commonly used data types DO NOT include:", "The condition in an if/else statement is enclosed with _____.", "Arrays in Javascript can be used to store _____.", "String values must be enclosed within _____ when beign assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is:"];
var firstChoices = ["strings", "booleans", "alerts", "numbers"];
var secondChoices = ["quotes", "curly brackets", "parenthesis", "square brackets"];
var thirdChoices = ["numbers and strings", "other arrays", "booleans", "all of the above"];
var fourthChoices = ["quotes", "curly brackets", "commas", "parenthesis"];
var fifthChoices = ["Javascript", "console.log", "for loops", "terminal / bash"];

var startBtn = document.querySelector("#start-btn");
var questionElement = document.querySelector("#question");
var answerBtnElement = document.querySelector("#answer-buttons");

var questionIndex = 0;
var score = 0;

startBtn.addEventListener("click", function(){
    startQuiz();
})

function startQuiz(){
    document.querySelector("#start-btn").setAttribute("class", "hidden");
    document.querySelector("#highscore-btn").setAttribute("class", "hidden");
    document.querySelector("#extra-text").setAttribute("class", "hidden");
    document.querySelector("#question-container").removeAttribute("class", "hidden");
    displayFirstQuestion();
}

function displayFirstQuestion(){
    questionElement.textContent = questions[questionIndex];
    for (var i = 0; i < firstChoices.length; i++){
        var answerChoices = document.createElement("button");
        answerChoices.setAttribute("class", "btn");
        answerChoices.textContent = firstChoices[i];
        document.body.children[1].children[2].children[1].appendChild(answerChoices);
        answerChoices.addEventListener("click", function(){
            if (event.target.textContent === "alerts"){
                score++;
            } else {
                if (score <= 0){
                    score = 0;
                } else {
                    score--;
                }
            }
            resetAnswers();
            displaySecondQuestion();
        });
    }
}

function resetAnswers(){
    while (answerBtnElement.firstChild){
        answerBtnElement.removeChild(answerBtnElement.firstChild);
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
                score++;
            } else {
                if (score <= 0){
                    score = 0;
                } else {
                    score--;
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
                score++;
            } else {
                if (score <= 0){
                    score = 0;
                } else {
                    score--;
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
                score++;
            } else {
                if (score <= 0){
                    score = 0;
                } else {
                    score--;
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
                score++;
            } else {
                if (score <= 0){
                    score = 0;
                } else {
                    score--;
                }
            }
            console.log(score);
        });
    }
}