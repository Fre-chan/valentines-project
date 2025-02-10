document.addEventListener("DOMContentLoaded", function () {
  const noBtn = document.getElementById("no-btn");
  const yesBtn = document.getElementById("yes-btn");
  const mainContent = document.getElementById("main-content");
  const yayPage = document.getElementById("yay-page");
  const nextBtn = document.getElementById("next-btn");
  const loveSong = document.getElementById("loveSong");

  // Function to play song from chorus (1:04 mark)
  function playSong() {
    loveSong.currentTime = 64; // Start from chorus
    loveSong.play();
  }

  // "No" button runs away when hovered
  if (noBtn) {
    noBtn.addEventListener("mouseenter", function () {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 50);
      noBtn.style.position = "absolute";
      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
    });
  }

  // "Yes" button click → Show Yay Page
  if (yesBtn) {
    yesBtn.addEventListener("click", function () {
      mainContent.style.display = "none"; // Hide main content
      yayPage.style.display = "block"; // Show yay page
      setTimeout(() => {
        yayPage.style.opacity = "1"; // Fade-in effect
      }, 100);
      playSong(); // Play the song when "Yes" is clicked
    });
  }

  // "Next (→)" button click → Go to Love Letter Page
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      window.location.href = "love-letter.html";
    });
  }
});
