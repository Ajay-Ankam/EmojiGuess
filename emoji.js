const emojiDetails = [
  { description: "Smiling face with sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Party popper", emoji: "🎉" },
  // Add more emoji descriptions here
];

  let currentEmojiIndex = 0;
  let score = 0;
  let seconds = 30;
  let timer;
  // 

 
  // 
  const timerElement = document.getElementById("timer");
  const guessInput = document.getElementById("guess-input"); 
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");

  function displayEmoji() {
    const descriptionElement = document.getElementById("description");
    descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
    timerElement.textContent = `Time left: ${seconds}s`;
  }

  function checkGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();

    if (guess === correctEmoji) {
      resultElement.textContent = "Correct!";
      score++;
    } else {
      resultElement.textContent = "Wrong!";
    }
    console.log(score);
    scoreElement.textContent = `Score: ${score}`;
    guessInput.value = "";
    guessInput.focus();
    nextEmoji();
  }

  function nextEmoji() {
    currentEmojiIndex++;
    setTimeout(() => {resultElement.textContent = "";}, 1000);
    if (currentEmojiIndex === emojiDetails.length) {
      currentEmojiIndex = 0;
      score=0;
    }

    displayEmoji();
  }

  document
    .getElementById("guess-input")
    .addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        checkGuess();
      }
    });

    // displayEmoji();  or below DOMContentLoaded event

  document.addEventListener("DOMContentLoaded", () => {
    displayEmoji();
    startTimer();
  });
  
  function startTimer(){
    timer = setInterval(() => {
      seconds--;
     timerElement.textContent = `Time left: ${seconds}s`;
     if(seconds <= 0) {
      endGame();
     }
    }, 1000);
  }
  
// Existing code...

// document.getElementById("restart-button").addEventListener("click", resetGame);
const restartButton = document.getElementById("restart-button");

restartButton.addEventListener("click", resetGame);

function resetGame() {
  currentEmojiIndex = 0;
  score = 0;
  seconds = 30;
  
  // Reset UI elements
  guessInput.disabled = false;
  guessInput.value = "";
  resultElement.textContent = "";
  scoreElement.textContent = `Score: ${score}`;
  timerElement.textContent = `Time left: ${seconds}s`;
  document.getElementById("restart-button").style.display = "none";

  // Restart the game
  displayEmoji(); 
  startTimer();
}

function endGame() { 
  clearInterval(timer);
  guessInput.disabled = true;
  timerElement.textContent = "";
  document.getElementById("restart-button").style.display = "block"; // Show the restart button
}

// Existing code...


  // function endGame() { 
  //   clearInterval(timer);
  //   guessInput.disabled = true;
  //   timerElement.textContent = "";
  // }

