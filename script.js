var questions = ["Commonly used data types DO NOT include:", "The condition in an if/else statement is enclosed with _____.", "Arrays in Javascript cna be used to store _____.", "String values must be enclosed within _____ when beign assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is:"];
var firstChoices = ["strings", "booleans", "alerts", "numbers"];
var secondChoices = ["quotes", "curly brackets", "parenthesis", "square brackets"];
var thirdChoices = ["numbers and strings", "other arrays", "booleans", "all of the above"];
var fourthChoices = ["commas", "curly brackets", "quotes", "parenthesis"];
var fifthChoices = ["Javascript", "terminal / bash", "for loops", "console.log"];

var startBtn = document.querySelector("#start-btn");
var questionElement = document.querySelector("#question");

var questionIndex = 0;

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
        answerChoices.setAttribute("data-index", i)
        answerChoices.textContent = firstChoices[i];
        document.body.children[1].children[2].children[1].appendChild(answerChoices);
    }

}