const greeting = document.getElementById("greeting");

const now = new Date();
const jam = now.getHours();

let ucapan = "";

if (jam < 12) {
  ucapan = "Semoga harimu secerah pagi ini!";
} else if (jam < 18) {
  ucapan = "Semoga ulang tahunmu penuh kebahagiaan!";
} else {
  ucapan = "Selamat malam, semoga impianmu terwujud!";
}

greeting.textContent = ucapan;
