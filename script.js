const quizData = [
  {
    question: "How do you typically access websites?",
    options: ["Desktop", "SmartPhone", "Laptop", "Tablet"],
  },
  {
    question: "How do you typically access websites?",
    options: ["Desktop", "SmartPhone", "Laptop", "Tablet"],
  },
  {
    question: "How do you typically access websites?",
    options: ["Desktop", "SmartPhone", "Laptop", "Tablet"],
  },
  {
    question: "How do you typically access websites?",
    options: ["Desktop", "SmartPhone", "Laptop", "Tablet"],
  },
  {
    question: "How do you typically access websites?",
    options: ["Desktop", "SmartPhone", "Laptop", "Tablet"],
  },
  {
    question: "How do you typically access websites?",
    options: ["Desktop", "SmartPhone", "Laptop", "Tablet"],
  },
  {
    question: "How do you typically access websites?",
    options: ["Desktop", "SmartPhone", "Laptop", "Tablet"],
  },
  {
    question: "How do you typically access websites?",
    options: ["Desktop", "SmartPhone", "Laptop", "Tablet"],
  },
  {
    question: "How do you typically access websites?",
    options: ["Desktop", "SmartPhone", "Laptop", "Tablet"],
  },
  {
    question: "How do you typically access websites?",
    options: ["Desktop", "SmartPhone", "Laptop", "Tablet"],
  },
];

// DOM elements
const quizElement = document.getElementById("quiz");
const progressElement = document.getElementById("progress");
const numberElement = document.getElementById("number");
const questionElement = document.getElementById("question");
const optionContainerElement = document.getElementById("option_container");
const nextButton = document.getElementById("next-btn");

// Variables to keep track of quiz progress
let currentQuestion = 0;
// Function to handle option selection

// Function to render the quiz
function renderQuiz() {
  const currentQuizData = quizData[currentQuestion];
  const { question, options } = currentQuizData;

  numberElement.innerText = `${currentQuestion + 1}/${quizData.length}`;
  questionElement.innerText = question;

  optionContainerElement.innerHTML = options
    .map(
      (option, index) => `
        <div class="option_box">
          <div class="opt_text">${index + 1}. ${option}</div>
        </div>
      `
    )
    .join("");

  const optionBoxes = Array.from(document.getElementsByClassName("option_box"));
  optionBoxes.forEach((optionBox) => {
    optionBox.addEventListener("click", selectOption);
  });
}

function selectOption(event) {
  console.log(event.target);
  const selectedOption = event.target;
  const optionBoxes = Array.from(document.getElementsByClassName("option_box"));

  // Deselect all option boxes
  optionBoxes.forEach((optionBox) => {
    if (optionBox !== selectedOption) {
      optionBox.classList.remove("selected_option");
    }
  });

  selectedOption.classList.toggle("selected_option");
}

// Function to handle the next button click
function nextQuestion() {
  const selectedOptions = Array.from(
    document.getElementsByClassName("selected")
  ).map((option) => option.querySelector(".opt_text").innerText);

  // Do something with the selected options here

  currentQuestion++;

  if (currentQuestion >= quizData.length) {
    updateProgressBar();
    showQuizResults();
  } else {
    renderQuiz();
    updateProgressBar();
  }
}

// Function to show the quiz results
function showQuizResults() {
  document.getElementById("main_cont").innerHTML = `
    <h1 style="
      font-weight: 700;
      font-size: 20px;
      line-height: 142%;
      text-align: center;
      color: #2664fe;
      "
    >
    Thank you !</h1>
    
  `;
}

// Function to update the progress bar
function updateProgressBar() {
  const progressPercentage = (currentQuestion / quizData.length) * 100;
  progressElement.style.width = `${progressPercentage}%`;
}

// Event listener for the next button click
nextButton.addEventListener("click", nextQuestion);

// Initialize the quiz
renderQuiz();
updateProgressBar();
