let audioMu = new Audio('../Audio/Musi.mp3');
let audioBoo = new Audio('../Audio/Boo.mp3');
let audioCheer = new Audio('../Audio/APPLAUS.mp3');
let audioGame = new Audio('../Audio/Gamemusic.mp3');

let gloveSpeed = 10; // Standardgeschwindigkeit
let gameTime = 30;
let timerInterval;
let score = 0;

// Glove Auswahl und Geschwindigkeit
function toggleGloveSelection() {
    document.getElementById("playerName").style.display = "none";
    document.getElementById("Info").style.display = "none";
    document.getElementById("Startbutton").style.display = "none";
    document.getElementById("glovSe").style.display = "none";
    document.getElementById("gloveContainer").style.display = "block";
    document.getElementById("selectedGloveContainer").style.display = "none";
    document.getElementById("load").style.display = "none";
    document.getElementById("hani").style.display = "none";
    document.getElementById("selectedGlove").style.display = "none";
}

function closeSel() {
    document.getElementById("playerName").style.display = "block";
    document.getElementById("Info").style.display = "block";
    document.getElementById("Startbutton").style.display = "block";
    document.getElementById("glovSe").style.display = "block";
    document.getElementById("gloveContainer").style.display = "none";
    document.getElementById("selectedGloveContainer").style.display = "block";
    document.getElementById("hani").style.display = "block";
    document.getElementById("selectedGlove").style.display = "block";
    document.getElementById("load").style.display = "none";
}

function selectGlove(element) {
    document.querySelectorAll('.glove-selection img').forEach(img => img.classList.remove('selected'));
    element.classList.add('selected');
    document.getElementById('selectedGlove').src = element.src;
    document.getElementById('imageHS').src = element.src;
    document.getElementById('selectedGloveContainer').style.display = "block";
    gloveSpeed = parseInt(element.dataset.speed); // Geschwindigkeit setzen
}

// Spielstart und Timer
function startGame() {
    let name = document.getElementById("playerName");
    if (!name.value.trim()) {
        console.log("Enter a name");
        setTimeout(() => console.log("ok"), 3000);
        return;
    }
    audioMu.pause();
    audioGame.play();
    document.getElementById("StartScreen").style.display = "none";
    startTimer();
    setInterval(spawnBall, 2000);
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

function updateTimerDisplay() {
    document.getElementById("timer").innerText = `Time: ${gameTime}`;
}

function endGame() {
    clearInterval(timerInterval);
    audioBoo.pause();
    audioCheer.pause();
    audioMu.play();
    audioGame.pause();
}

function resetButton() {
    location.reload();
}

// Ball-Logik
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
        } else if (
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
        } else if (posY > window.innerHeight) {
            ball.remove();
            clearInterval(interval);
        }
    }, 16);
}

function updateCounterDisplay() {
    document.getElementById("counter").innerText = score.toString().padStart(4, "0");
    document.getElementById("counter2").innerText = `Count: ${score}`;
}

// Handschuhbewegung (mit variabler Geschwindigkeit)
document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("imageHS");
    const container = document.getElementById("container");
    let positionX = image.offsetLeft;
    const maxRight = container.clientWidth - image.clientWidth;
    const minLeft = 90;

    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowRight" && positionX < maxRight) {
            positionX += gloveSpeed;
        } else if (event.key === "ArrowLeft" && positionX > minLeft) {
            positionX -= gloveSpeed;
        }
        image.style.left = positionX + "px";
    });
});

function showInfo() {
    document.getElementById("infoText").style.display = "block";
    document.getElementById("playerName").style.display = "none";
    document.getElementById("Info").style.display = "none";
    document.getElementById("Startbutton").style.display = "none";
    document.getElementById("glovSe").style.display = "none";
}

function closeInfo() {
    document.getElementById("infoText").style.display = "none";
    document.getElementById("playerName").style.display = "block";
    document.getElementById("Info").style.display = "block";
    document.getElementById("Startbutton").style.display = "block";
    document.getElementById("glovSe").style.display = "block";
}

function toggleSettings() {
    document.getElementById("playerName").style.display = "none";
    document.getElementById("Info").style.display = "none";
    document.getElementById("Startbutton").style.display = "none";
    document.getElementById("glovSe").style.display = "none";
    document.getElementById("gloveContainer").style.display = "none";
    document.getElementById("selectedGloveContainer").style.display = "none";
    document.getElementById("settingsPopup").style.display = "block";
}

function closeMode() {
    document.getElementById("playerName").style.display = "block";
    document.getElementById("Info").style.display = "block";
    document.getElementById("Startbutton").style.display = "block";
    document.getElementById("glovSe").style.display = "block";
    document.getElementById("settingsPopup").style.display = "none";
}

function audioMute() {
    audioMu.muted = true;
    audioBoo.muted = true;
    audioCheer.muted = true;
    audioGame.muted = true;
}

// Theme
function setTheme(mode) {
    const root = document.documentElement;
    if (mode === 'dark') {
        localStorage.setItem('theme', 'light');
        root.style.setProperty('--rot', '#A50044');
        root.style.setProperty('--weiß', '#ffffff');
        root.style.setProperty('--dunkelblau', '#0d1b2a');
        root.style.setProperty('--schwarz-transparent', 'rgba(0, 0, 0, 0.6)');
        root.style.setProperty('--gold', '#fa0068');
        root.style.setProperty('--color-back', 'linear-gradient(to bottom, #5c0026, #000)');
        root.style.setProperty('--color-nav', 'linear-gradient(135deg, #2e0113 0%, #1a000b 50%, #000000 100%)');
        root.style.setProperty('--color-link', '#5c0026');
        root.style.setProperty('--blau', '#5c0026');
    } else {
        localStorage.setItem('theme', 'dark');
        root.style.setProperty('--color-back', 'linear-gradient(180deg, #002b5e, #000000)');
        root.style.setProperty('--color-nav', 'linear-gradient(135deg, #002b5e, #004d98, #005bbd, #4a007e)');
        root.style.setProperty('--color-link', '#ffcb05');
        root.style.setProperty('--gold', '#EDBB00');
        root.style.setProperty('--blau', '#004D98');
    }
    document.getElementById('settingsPopup').classList.remove('active');
}

window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
};

audioMu.play();
