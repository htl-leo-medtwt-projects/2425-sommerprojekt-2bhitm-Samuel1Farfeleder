
function toggleGloveSelection() {
    const gloveContainer = document.getElementById('gloveContainer');
    gloveContainer.style.display = gloveContainer.style.display === 'none' ? 'block' : 'none';
}
function selectGlove(element) {
    document.querySelectorAll('.glove-selection img').forEach(img => img.classList.remove('selected'));
    element.classList.add('selected');
}
function startGame() {
let name = document.getElementById('playerName');
    
     if (!name.value.trim()) {
      console.log("Enter a name")
      setTimeout(() => {
console.log("ok")
      }, 3000);
      return;
    }
    document.getElementById("StartScreen").style.display = "none";
    startTimer();
}
function showInfo() {
    document.getElementById("infoText").style.display = "block";
    document.getElementById("playerName").style.display = "none";
    document.getElementById("Info").style.display = "none";
    document.getElementById("Startbutton").style.display = "none";
    document.getElementById("glovSe").style.display = "none";

   



      }

      function closeInfo(){
        document.getElementById("infoText").style.display = "none";
    document.getElementById("playerName").style.display = "block";
    document.getElementById("Info").style.display = "block";
    document.getElementById("Startbutton").style.display = "block";
    document.getElementById("glovSe").style.display = "block";

        
      }
      function toggleGloveSelection(){
        document.getElementById("playerName").style.display = "none";
        document.getElementById("Info").style.display = "none";
        document.getElementById("Startbutton").style.display = "none";
        document.getElementById("glovSe").style.display = "none";
        document.getElementById("gloveContainer").style.display = "block";
        document.getElementById("selectedGloveContainer").style.display = "none";



      }
      function closeSel(){
        document.getElementById("playerName").style.display = "block";
        document.getElementById("Info").style.display = "block";
        document.getElementById("Startbutton").style.display = "block";
        document.getElementById("glovSe").style.display = "block";
        document.getElementById("gloveContainer").style.display = "none";
        document.getElementById("selectedGloveContainer").style.display = "block";



      }

      function selectGlove(element) {
        document.querySelectorAll('.glove-selection img').forEach(img => img.classList.remove('selected'));
        element.classList.add('selected');

        document.getElementById('selectedGloveContainer').style = "block";

        document.getElementById('selectedGlove').src = element.src;
        document.getElementById('imageHS').src = element.src;

    }
    document.addEventListener("DOMContentLoaded", function() {
      

      const image = document.getElementById("imageHS");
      const container = document.getElementById("container");
      let positionX = image.offsetLeft;
      const maxRight = container.clientWidth - image.clientWidth;
      const minLeft = 90;
      
      document.addEventListener("keydown", function(event) {
          if (event.key === "ArrowRight" && positionX < maxRight) {
              positionX += 10;
          } else if (event.key === "ArrowLeft" && positionX > minLeft) {
              positionX -= 10;
          }
          image.style.left = positionX + "px";
      });
  });

let gameTime = 3;
let timerInterval;

function updateTimerDisplay() {
  document.getElementById("timer").innerText = `Time: ${gameTime}`;
}

function startTimer() {
  timerInterval = setInterval(() => {
    gameTime--;
    updateTimerDisplay();

    if (gameTime === 0) {
      document.getElementById("ResetScreen").style.display = "block";
      document.getElementById("resetButton").style.display = "block";

      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timerInterval);
  

}
endGame();
function resetButton() {
  location.reload();
}

