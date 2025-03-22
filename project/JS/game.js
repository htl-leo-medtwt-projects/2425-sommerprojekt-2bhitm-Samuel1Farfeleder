
function toggleGloveSelection() {
    const gloveContainer = document.getElementById('gloveContainer');
    gloveContainer.style.display = gloveContainer.style.display === 'none' ? 'block' : 'none';
}
function selectGlove(element) {
    document.querySelectorAll('.glove-selection img').forEach(img => img.classList.remove('selected'));
    element.classList.add('selected');
}
function startGame() {
    document.getElementById("StartScreen").style.display = "none";

    const name = document.getElementById('playerName').value;
    if (!name) {
        alert('Bitte gib deinen Namen ein!');
        return;
    }
    alert(`Spiel beginnt, ${name}!`);
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