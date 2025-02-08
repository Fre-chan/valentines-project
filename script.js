document.addEventListener("DOMContentLoaded", function () {
  const noBtn = document.getElementById("no-btn");
  const yesBtn = document.getElementById("yes-btn");
  const mainContent = document.getElementById("main-content");
  const loveLetterPage = document.getElementById("love-letter-page");
  const flipbookPage = document.getElementById("flipbook-page");
  const loveLetter = document.getElementById("love-letter");

  // "No" button runs away when hovered
  noBtn.addEventListener("mouseenter", function () {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });

  // When "Yes" button is clicked - Show love letter with fade-in effect
  yesBtn.addEventListener("click", function () {
    mainContent.style.display = "none"; // Hide main content
    loveLetterPage.classList.remove("hidden");
    setTimeout(() => {
      loveLetterPage.style.opacity = "1"; // Fade-in effect
    }, 100);
  });

  // Click Love Letter - Open envelope and reveal flipbook animation
  loveLetter.addEventListener("click", function () {
    loveLetter.classList.add("open"); // Open envelope
    setTimeout(() => {
      loveLetterPage.style.display = "none"; // Hide love letter
      flipbookPage.classList.remove("hidden"); // Show flipbook animation
    }, 1000);
  });
});
