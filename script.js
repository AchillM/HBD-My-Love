const startBtn = document.getElementById("startBtn");
const messageBox = document.getElementById("messageBox");
const nextBtn = document.getElementById("nextBtn");
const gallery = document.getElementById("gallery");
const greetingText = document.getElementById("greetingText");

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  messageBox.classList.remove("hidden");

  const now = new Date();
  const hour = now.getHours();
  let greeting = "";

  if (hour < 12) {
    greeting = "Semoga harimu seindah pagi yang cerah ini 🌞";
  } else if (hour < 18) {
    greeting = "Semoga hari ulang tahunmu penuh kebahagiaan! 🎊";
  } else {
    greeting = "Selamat malam, semoga semua impianmu tercapai 🌙✨";
  }

  greetingText.textContent = greeting;
});

nextBtn.addEventListener("click", () => {
  messageBox.classList.add("hidden");
  gallery.classList.remove("hidden");
});
