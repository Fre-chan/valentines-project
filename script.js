document.addEventListener("DOMContentLoaded", function () {
  const noBtn = document.getElementById("no-btn");
  const yesBtn = document.getElementById("yes-btn");
  const mainContent = document.getElementById("main-content");
  const yayPage = document.getElementById("yay-page");
  const nextBtn = document.getElementById("next-btn");
  let loveSong = document.getElementById("loveSong");

  // Function to play song from chorus (1:04 mark)
  function playSong() {
    loveSong.currentTime = 64; // Start from chorus
    loveSong.play();
  }

  // Detect when the flipbook page becomes visible
  let flipbookPage = document.querySelector(".gallery"); // Change this if flipbook container has a different class

  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        playSong(); // Play the song when flipbook becomes visible
      } else {
        loveSong.pause(); // Pause when flipbook is out of view
      }
    });
  }, { threshold: 0.5 }); // Detect when at least 50% of flipbook is visible

  observer.observe(flipbookPage); // Attach observer to flipbook

  // No button runs away when hovered
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
    });
  }

  // "Next (→)" button click → Go to Love Letter Page
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      window.location.href = "love-letter.html";
    });
  }
});
