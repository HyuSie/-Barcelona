/* script.js */
document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("interactiveButton");
  if (button) {
    button.addEventListener("click", function() {
      const message = document.getElementById("message");
      // Переключаем отображение сообщения при клике
      if (message.style.display === "none" || message.style.display === "") {
        message.style.display = "block";
      } else {
        message.style.display = "none";
      }
    });
  }
});
