const gameData = {
  nextGame: {
    dateTime: "2025-05-11T16:15:00",
    homeTeam: {
      name: "FC Barcelona",
      logo: "https://freepngimg.com/thumb/team/141703-logo-fc-barcelona-free-hq-image-thumb.png"
    },
    awayTeam: {
      name: "Real Madrid",
      logo: "https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png"
    }
  }
};
const bilder = [
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/04c3b761-ccbd-498f-b988-b67ed1693906/01-Ter_Stegen-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/c058dc89-fa0b-4aa9-99de-a129ece52320/13-Inaki_Pena-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/14/a62932d1-106c-4762-84bf-89fa9a633c71/25-Szczesny-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/951e72f0-59ae-4685-be81-f2afced7e6d6/02-Cubarsi-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/e3784cf8-9f03-45e2-ab44-007f2adadf32/03-Balde-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/5352ecab-dc7a-4d20-a047-67af419dd96b/04-Araujo-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/3129af5f-0ec1-4474-988c-1415092eb74f/05-Martinez-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/0969d283-c3f8-471a-8638-9a37124ea1a0/15-Christensen-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/9f7d8d15-0244-4def-a931-8eb563a598a1/23-Kounde-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/60ec100e-ca62-492c-a3c7-7e73956b035b/24-Eric_Garcia-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/545795b7-4c63-4347-94ab-5f2a49b1eddd/06-Gavi-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/d9fb4b17-1260-48a5-841d-ffd2a60e57e4/17-Casado-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/61d91e06-7435-4823-93e3-2ef7e91b3c8b/08-Pedri-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/0b7225dc-8ec1-4957-bb92-3ebd72f00dd7/14-Pablo_Torre-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/bc22e993-3083-4ef5-aa77-217951756cca/16-Fermin-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/6df53816-c907-4ecc-bd0a-c2e8e5a281c2/20-Olmo-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/1f6c10a5-07cd-47b3-929b-e29ccabe18d7/21-De_Jong-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/1edefda1-8229-4232-ace9-2f35bf4d3000/07-Ferran_Torres-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/894e4e5e-b6d0-434e-8610-890e0971a7b2/09-Lewandowski-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/266dc5af-16b0-4290-99c5-03d73a48df11/11-Raphinha-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/64d7a058-2043-4a39-a5b6-2b7525541fd5/18-Pau_Victor-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/64d7a058-2043-4a39-a5b6-2b7525541fd5/18-Pau_Victor-M.png?width=670&height=790" },
  { bild: "https://www.fcbarcelona.com/photo-resources/2024/10/13/d942d5c0-5ada-423c-baf1-4d2ba5ebe3bb/19-Lamine-M.png?width=670&height=790" }
];


let themeToggle = document.getElementById('themeToggle');


function applyTheme(mode) {
  if (mode === 'dark') {
    document.body.classList.add('dark');
    themeToggle.checked = true;
  } else {
    document.body.classList.remove('dark');
    themeToggle.checked = false;
  }
  localStorage.setItem('theme', mode);
}

themeToggle.addEventListener('change', () => {
  const mode = themeToggle.checked ? 'dark' : 'light';
  applyTheme(mode);
});


window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
});

const game = gameData.nextGame;
const targetDate = new Date(game.dateTime);

document.getElementById('homeLogo').src = game.homeTeam.logo;
document.getElementById('awayLogo').src = game.awayTeam.logo;

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById('countdown').textContent = "STARTED";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
function getRandomUniqueImages(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const selectedImages = getRandomUniqueImages(bilder, 4);

const leftContainer = document.getElementById('randomPlayersLeft');
const rightContainer = document.getElementById('randomPlayersRight');

selectedImages.forEach((player, index) => {
  const img = document.createElement('img');
  img.src = player.bild;
  img.alt = player.name;
  if (index < 2) {
    leftContainer.appendChild(img);
  } else {
    rightContainer.appendChild(img);
  }
});


function loadLikedPlayers() {
  let likedPlayers = JSON.parse(localStorage.getItem('likedPlayer')) || [];
  const likedPlayersContainer = document.getElementById('liked-players');
  console.log(likedPlayers);
  

  let brick = '';

  for (let i = 0; i <4; i++) {
    const player = likedPlayers[i];
    if(player){
    brick += `<div class="player-card">
                  <img src="${player.bild}" alt="${player.name}">
                  <p>${player.name}</p>
                  <p>${player.position}</p>
                  <hr>
                  <p>Spiele:    ${player.spiele}</p>

                </div>`;
  }
  likedPlayersContainer.innerHTML = brick;
}
}

loadLikedPlayers();