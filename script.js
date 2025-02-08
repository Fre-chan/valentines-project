document.addEventListener("DOMContentLoaded", function () {
  const noBtn = document.getElementById("no-btn");
  const yesBtn = document.getElementById("yes-btn");
  const mainContent = document.getElementById("main-content");
  const yayPage = document.getElementById("yay-page");
  const flipbookPage = document.getElementById("flipbook-page");
  const loveLetter = document.querySelector(".love-letter-container");

  // No button runs away when hovered
  noBtn.addEventListener("mouseenter", function () {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });

  // When "Yes" button is clicked - Show Yay Page
  yesBtn.addEventListener("click", function () {
    mainContent.style.display = "none"; // Hide main content
    yayPage.classList.remove("hidden");
    setTimeout(() => {
      yayPage.style.opacity = "1"; // Fade-in effect
    }, 100);
  });

  // Clicking Love Letter Opens Flipbook
  loveLetter.addEventListener("click", function () {
    yayPage.style.display = "none"; // Hide love letter
    flipbookPage.classList.remove("hidden"); // Show flipbook animation
  });
});
