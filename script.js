document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("interactiveButton");
  const themeButton = document.getElementById("themeToggle");

  if (button) {
    button.addEventListener("click", function() {
      const message = document.getElementById("message");
      message.style.display = (message.style.display === "none" || message.style.display === "") ? "block" : "none";
    });
  }

  if (themeButton) {
    themeButton.addEventListener("click", function() {
      document.body.classList.toggle("theme1");
      document.body.classList.toggle("theme2");
    });
  }
});
