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

// Other variables and constants
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timeLeft = 60; // Set your desired time


const questionsEl = document.getElementById('questions');
const timerEl = document.getElementById('time');
const choicesEl = document.getElementById('choices');
const submitBtn = document.getElementById('submit');
const startBtn = document.getElementById('start-btn');
const initialsEl = document.getElementById('initials');
const feedbackEl = document.getElementById('feedback');

// sound effects
const sfxRight = new Audio("/sfx/correct.wav");
const sfxWrong = new Audio("/sfx/wrong.wav");


// Add event listeners
document.getElementById("start-btn").addEventListener("click", startQuiz);

// Function to start the quiz
function startQuiz() {
  console.log("startQuiz");
  const startScreenEl = document.getElementById('start-screen');
  startScreenEl.classList.add('hide');

  questionsEl.classList.remove('hide');

  timerId = setInterval(clockTick, 1000);

  timerEl.textContent = time;

  getQuestion();
} 
  
function getQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const titleEl = document.getElementById('question-title');
  titleEl.textContent = currentQuestion.question;
  choicesEl.innerHTML = '';

  currentQuestion.choices.forEach((choice, index) => {
    const choiceNode = document.createElement('button');
    choiceNode.className = 'choice';
    choiceNode.value = choice;
    choiceNode.textContent = `${index + 1}. ${choice}`;
    choicesEl.appendChild(choiceNode);
  });
}

function questionClick(event) {
  const buttonEl = event.target;

  if (!buttonEl.classList.contains('choice')) {
    return;
  }

  if (buttonEl.value !== questions[currentQuestionIndex].correctAnswer) {
    time = Math.max(0, time - 15);
    timerEl.textContent = time;
    sfxWrong.play();
    feedbackEl.textContent = 'Wrong!';
  } else {
    sfxRight.play();
    feedbackEl.textContent = 'Correct!';
  }

  feedbackEl.classList.add('feedback');
  setTimeout(() => {
    feedbackEl.classList.remove('feedback');
  }, 1000);

  currentQuestionIndex++;

  if (time <= 0 || currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  clearInterval(timerId);
  const endScreenEl = document.getElementById('end-screen');
  endScreenEl.classList.remove('hide');
  const finalScoreEl = document.getElementById('final-score');
  finalScoreEl.textContent = time;
  questionsEl.classList.add('hide');
}

function clockTick() {
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  const initials = initialsEl.value.trim();

  if (initials !== '') {
    const highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
    const newScore = { score: time, initials };
    highscores.push(newScore);
    window.localStorage.setItem('highscores', JSON.stringify(highscores));
    window.location.href = 'highscores.html';
  }
}

function checkForEnter(event) {
  if (event.key === 'Enter') {
    saveHighscore();
  }
}

submitBtn.addEventListener('click', saveHighscore);
startBtn.addEventListener('click', startQuiz);
choicesEl.addEventListener('click', questionClick);
initialsEl.addEventListener('keyup', checkForEnter);