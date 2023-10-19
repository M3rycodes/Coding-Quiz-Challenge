
   
    const startQuizButton = document.getElementById("start-quiz");
    const questionElement = document.getElementById("question-screen");
    const startScreenElement = document.getElementById("start-screen");
    const endScreenElement = document.getElementById("end-screen");
    const nextButton = document.getElementById("next-btn");
    const restartButton = document.getElementById("restart-btn");
    const submitScoreButton = document.getElementById("submit-score");


//Define an array of quiz questions
const questions = [
  {
    question: "What does CSS stand for?",
    choices: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    correctAnswer: "Cascading Style Sheets"
  },
  {
    question: "What is the symbol for the jQuery library?",
    choices: ["$", "#", "&", "@"],
    correctAnswer: "$"
  },
  {
    question: "What is the name of the statement that is used to exit or end a loop?",
    choices: ["Break statement", "Falter statement", "Conditional statement", "Close statement"],
    correctAnswer: "Break statement"
  },
  {
    question: "In JavaScript, what element is used to store and manipulate text usually in multiples?",
    choices: ["Strings", "Arrays", "Function", "Variables"],
    correctAnswer: "Strings"
  },
  {
    question: "What is the default behavior called that is used to move declarations to the top of the current scope?",
    choices: ["Jumping", "Sorting", "Hoisting", "Arranging"],
    correctAnswer: "Hoisting"
  },
  {
    question: "How can you detect the client's browser name?",
    choices: ["navigator.appName", "client.navName", "browser.name"],
    correctAnswer: "navigator.appName"
    },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    choices: ["Math.round(7.25)", "rnd(7.25)", "round(7.25)", "Math.rnd(7.25)"],
    correctAnswer: "Math.round(7.25)"
  },
  {
    question: "What will the following code return: Boolean(10>9)?",
    choices: ["true", "false", "NaN"],
    correctAnswer: "true"
  },
  {
    question: "Is JavaScript case-sensitive?",
    choices: ["No", "Yes"],
    correctAnswer: "Yes"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onclick", "onmouseover", "onchange", "onmouseclick"],
    correctAnswer: "onclick"

  },
];

let currentQuestion = 0;
 function loadQuestion() {
  const question = questions[currentQuestion];
  questionText.textContent = question.question;
  choicesElement.innerHTML = "";
  question.choices.forEach((choices, index) => {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choices;
    choiceButton.classList.add("choice-button");
    choiceButton.addEventListener("click", () => checkAnswer(
      index));
    choicesElement.appendChild(choiceButton);
    );
  
 }

// Function to start the quiz


// Function to check the answer
function checkAnswer(choiceIndex) {
  const isCorrect = choiceIndex] === questions[current-Question].currentAnswer;
    if (isCorrect) {
      choicesElement.innerHTML = '<p> Correct!</p>'
    } else {
      choicesElement.innerHTML = '<p> Incorrect. Try again!</p>'
    }
  // Move to the next question
currentQuestion++;
  if (currentQuestion < questions.length) {
    nextButton.style.display = "block"
  } else {
    nextButton.style.DISPLAY = "none";
    endQuiz();
// Function to update the timer
function updateTimer() {
  time--;
  timeDisplay.textContent = time;
  if (time <= 0) {
    // Time's up, end the quiz
    endQuiz();
  }
}

// Function to end the quiz
function endQuiz() {
  // Stop the timer
  clearInterval(timerInterval);
  // Hide the question screen and show the end screen
  questionScreen.style.display = "none";
  endScreen.style.display = "block";
  // Display the final score
  finalScoreDisplay.textContent = score;
}

// Function to submit the score

