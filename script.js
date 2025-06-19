const startBtn = document.getElementById("startBtn");
const messageBox = document.getElementById("messageBox");
const nextBtn = document.getElementById("nextBtn");
const gallery = document.getElementById("gallery");
const typedText = document.getElementById("typedText");
// const bgMusic = document.getElementById("bgMusic"); // Optional music

const messages = [
  "Selamat ulang tahun ya! 🎉",
  "Semoga selalu bahagia, sehat, dan sukses 🌟",
  "Terima kasih sudah menjadi bagian penting dalam hidup ini 💖",
  "Hari ini spesial karena kamu sangat berarti 🎂✨"
];

let i = 0, j = 0, currentText = '';

function typeMessage() {
  if (i < messages.length) {
    currentText = messages[i];
    if (j <= currentText.length) {
      typedText.textContent = currentText.slice(0, j++);
      setTimeout(typeMessage, 50);
    } else {
      i++;
      j = 0;
      setTimeout(typeMessage, 800); // jeda antar kalimat
    }
  }
}

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  messageBox.classList.remove("hidden");
  typeMessage();

  // bgMusic.play(); // opsional: aktifkan musik
});

nextBtn.addEventListener("click", () => {
  messageBox.classList.add("hidden");
  gallery.classList.remove("hidden");
});
