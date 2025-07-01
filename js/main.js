// main.js

// DOM Ready Check
document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript Loaded");

  // Handle "Enter Here" button navigation
  const enterButton = document.querySelector(".enter-btn");
  if (enterButton) {
    enterButton.addEventListener("click", () => {
      window.location.href = "dashboard.html";
    });
  }

  // Future interactivity hooks go below
  // Example:
  // initMapInteractions();
  // initNavbarDropdowns();
});
