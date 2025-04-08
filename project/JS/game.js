let audioMu = new Audio('../Audio/Musi.mp3')
let audioBoo = new Audio('../Audio/Boo.mp3')
let audioCheer = new Audio('../Audio/APPLAUS.mp3')
let audioGame = new Audio('../Audio/Gamemusic.mp3')





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

let gameTime = 30;
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
  audioBoo.pause();
  audioCheer.pause();
  audioMu.play();
  audioGame.pause();
 }
endGame();
function resetButton() {
  location.reload();
}
let score = 0;

function spawnBall() {
  const ball = document.createElement("img");
  ball.src = "../BILDER/ball.webp";
  ball.classList.add("flying-ball");
  ball.style.position = "absolute";
  ball.style.top = "-100px";
  ball.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
  ball.style.width = "50px";
  document.getElementById("container").appendChild(ball);

  let posY = 0;
  const speed = 3;
  const interval = setInterval(() => {
    posY += speed;
    ball.style.top = `${posY}px`;

    const ballRect = ball.getBoundingClientRect();
    const torbox = document.getElementById("torbox").getBoundingClientRect();
    const handschuh = document.getElementById("imageHS").getBoundingClientRect();

    if (
      ballRect.bottom >= torbox.top &&
      ballRect.left < torbox.right &&
      ballRect.right > torbox.left
    ) {
      gameTime = Math.max(0, gameTime - 10);
      updateTimerDisplay();
      ball.remove();
      audioBoo.play();
     clearInterval(interval);
    }

    else if (
      ballRect.bottom >= handschuh.top &&
      ballRect.top <= handschuh.bottom &&
      ballRect.left < handschuh.right &&
      ballRect.right > handschuh.left
    ) {
      gameTime += 5;
      updateTimerDisplay();
      audioCheer.play();
      score++;
      updateCounterDisplay();
      ball.remove();
      clearInterval(interval);
    }
    
    if (gameTime === 0) {
      document.getElementById("ResetScreen").style.display = "block";
      document.getElementById("resetButton").style.display = "block";

      endGame();
    }

    else if (posY > window.innerHeight) {
      ball.remove();
      clearInterval(interval);
    }
  }, 16);
}

function updateCounterDisplay() {
  document.getElementById("counter").innerText = score.toString().padStart(4, "0");
  document.getElementById("counter2").innerText = `Count: ${score}`;
}



function startGame() {
  let name = document.getElementById("playerName");
  audioMu.pause();
  audioGame.play();
  if (!name.value.trim()) {
    console.log("Enter a name");
    setTimeout(() => {
      console.log("ok");
    }, 3000);
    return;
  }

  document.getElementById("StartScreen").style.display = "none";
  startTimer();

  setInterval(spawnBall, 2000); 
}

function toggleSettings() {
  document.getElementById('settingsPopup').classList.toggle('active');
}

function setTheme(mode) {
  if (mode === 'dark') {
    document.body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
  }

  
  document.getElementById('settingsPopup').classList.remove('active');
}


window.onload = function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  }
};
function toggleSettings(){
  document.getElementById("playerName").style.display = "none";
  document.getElementById("Info").style.display = "none";
  document.getElementById("Startbutton").style.display = "none";
  document.getElementById("glovSe").style.display = "none";
  document.getElementById("gloveContainer").style.display = "none";
  document.getElementById("selectedGloveContainer").style.display = "none";
  document.getElementById("settingsPopup").style.display = "block";


  
}
function closeMode(){
  document.getElementById("playerName").style.display = "block";
  document.getElementById("Info").style.display = "block";
  document.getElementById("Startbutton").style.display = "block";
  document.getElementById("glovSe").style.display = "block";
  document.getElementById("settingsPopup").style.display = "blovk";


}
function audioMute() {
  audioMu.muted = true;
  audioBoo.muted = true;
  audioCheer.muted = true;
  audioGame.muted = true;
}


audioMu.play();
