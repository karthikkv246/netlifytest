const quizQuestions = [
    {
      question: "Pipe A can fill a tank in 6hrs together A and B can fill the tank in 4hrs then pipe B alone can fill the empty tank in?",
      options: ["12hrs", "3hrs", "10hrs", "6hrs"],
      answerIndex: 0,
    },
    {
      question: "Pipe A can fill a tank in 4hrs together A and B can fill the tank in 2hrs then pipe B alone can fill the empty tank in?",
      options: ["1hr", "2hr", "4hr", "3hr"],
      answerIndex: 2,
    },
    {
      question: "Pipe A can fill a tank in 6hrs together A and B can fill the tank in 4hrs then pipe B alone can fill the empty tank in?",
      options: ["12hrs", "3hrs", "10hrs", "6hrs"],
      answerIndex: 0,
    },
    {
      question: "Pipe A can fill a tank in 6hrs together A and B can fill the tank in 4hrs then pipe B alone can fill the empty tank in?",
      options: ["12hrs", "3hrs", "10hrs", "6hrs"],
      answerIndex: 0,
    },
    {
      question: "Pipe A can fill a tank in 6hrs together A and B can fill the tank in 4hrs then pipe B alone can fill the empty tank in?",
      options: ["12hrs", "3hrs", "10hrs", "6hrs"],
      answerIndex: 0,
    },
  ];
  
  const totalNumberOfQuestions = quizQuestions.length;
  let score = 0;
  let currentQuestionIndex = 0;
  
  const startButton = document.getElementById("start-button");
  const nextButton = document.getElementById("next-button");
  const questionCountDiv = document.getElementById("question-count");
  const scoreDiv = document.getElementById("score");
  
  const contentDiv = document.getElementsByClassName("content-div")[0];
  
  nextButton.style.visibility = "hidden";
  questionCountDiv.style.visibility = "hidden";
  scoreDiv.style.visibility = "hidden";
  
  startButton.addEventListener("click", startQuiz);
  nextButton.addEventListener("click", nextButtonHandler);
  
  function nextButtonHandler() {
    const userAnswer = document.querySelectorAll("[name='ans']:checked");
  
    if (userAnswer.length === 0) {
      contentDiv.style.backgroundColor = "maroon";
  
      return;
    }
  
    contentDiv.style.backgroundColor = "#333";
  
    calculateScore(userAnswer);
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex > totalNumberOfQuestions - 1) {
      //Last question has been reached. No more questions to display
  
      questionCountDiv.style.visibility = "hidden";
      scoreDiv.style.visibility = "hidden";
  
      contentDiv.innerHTML = `<div style="text-align:center;">You scored ${score} out of ${totalNumberOfQuestions}</div>`;
      nextButton.style.visibility = "hidden";
      return;
    }
  
    updateProgressBar();
  
    showQuestion();
  }
  
  function calculateScore(userAnswer) {
    quizQuestions[currentQuestionIndex].answerIndex;
  
    if (
      parseInt(userAnswer[0].value) ===
      quizQuestions[currentQuestionIndex].answerIndex
    ) {
      console.log("Correct Answer");
      score++;
    }
  }
  
  function startQuiz() {
    nextButton.style.visibility = "visible";
    questionCountDiv.style.visibility = "visible";
    scoreDiv.style.visibility = "visible";
    startButton.style.visibility = "hidden";
  
    updateProgressBar();
  
    showQuestion();
  }
  
  function showQuestion() {
    let questionHTML = `<div>${currentQuestionIndex + 1}) ${
      quizQuestions[currentQuestionIndex].question
    }</div>`;
  
    for (
      let index = 0;
      index < quizQuestions[currentQuestionIndex].options.length;
      index++
    ) {
      const option = quizQuestions[currentQuestionIndex].options[index];
  
      questionHTML =
        questionHTML +
        `<div>
                <input type="radio" name="ans" id="r${index}" value="${index}" />
                <label for="r${index}">${option}</label>
            </div>`;
    }
  
    contentDiv.innerHTML = questionHTML;
  }
  
  function updateProgressBar() {
    questionCountDiv.innerText = `Question ${
      currentQuestionIndex + 1
    }/${totalNumberOfQuestions}`;
  
    scoreDiv.innerText = `Score ${score}`;
  }