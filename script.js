document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("no-btn");
  
    noBtn.addEventListener("mouseenter", function () {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 50);
  
      noBtn.style.position = "absolute";
      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
    });
  });

  document.getElementById("love-letter").addEventListener("click", function () {
    this.classList.toggle("open");
  });
  