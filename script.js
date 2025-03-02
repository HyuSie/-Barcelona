document.addEventListener("DOMContentLoaded", function () {
    let themeButton = document.getElementById("themeToggle");
    let body = document.body;

    // Проверяем, какая тема была сохранена в локальном хранилище
    if (localStorage.getItem("theme") === "theme2") {
        body.classList.remove("theme1");
        body.classList.add("theme2");
    }

    themeButton.addEventListener("click", function () {
        body.classList.toggle("theme1");
        body.classList.toggle("theme2");

        // Сохраняем выбор пользователя в локальное хранилище
        if (body.classList.contains("theme2")) {
            localStorage.setItem("theme", "theme2");
        } else {
            localStorage.setItem("theme", "theme1");
        }
    });
});
