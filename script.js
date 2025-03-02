document.getElementById("interactiveButton").addEventListener("click", function () {
    document.getElementById("message").style.display = "block";
});

document.getElementById("themeToggle").addEventListener("click", function () {
    let body = document.body;
    body.classList.toggle("theme1");
    body.classList.toggle("theme2");
});
