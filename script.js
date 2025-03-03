document.addEventListener("DOMContentLoaded", function() {
  /* Переключение тем с сохранением в localStorage */
  const themeButton = document.getElementById("themeToggle");
  const availableThemes = ["theme1", "theme2", "theme3"];
  if (themeButton) {
    themeButton.addEventListener("click", function() {
      let currentTheme = document.body.classList.item(0);
      let currentIndex = availableThemes.indexOf(currentTheme);
      let nextIndex = (currentIndex + 1) % availableThemes.length;
      document.body.className = availableThemes[nextIndex];
      localStorage.setItem("theme", availableThemes[nextIndex]);
    });
  }
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && availableThemes.includes(savedTheme)) {
    document.body.className = savedTheme;
  }
  
  /* Интерактивная кнопка на index.html */
  const button = document.getElementById("interactiveButton");
  if (button) {
    button.addEventListener("click", function() {
      const message = document.getElementById("message");
      message.style.display = (message.style.display === "none" || message.style.display === "") ? "block" : "none";
    });
  }
  
  /* Переключение дополнительной информации на странице "О клубе" */
  const toggleAchievements = document.getElementById("toggleAchievements");
  if (toggleAchievements) {
    toggleAchievements.addEventListener("click", function() {
      const extra = document.getElementById("extraAchievements");
      extra.style.display = (extra.style.display === "none" || extra.style.display === "") ? "block" : "none";
    });
  }
  
  /* Загрузка дополнительных новостей на странице "Новости" */
  const loadMoreNews = document.getElementById("loadMoreNews");
  if (loadMoreNews) {
    loadMoreNews.addEventListener("click", function() {
      const moreNews = document.getElementById("moreNews");
      moreNews.style.display = (moreNews.style.display === "none" || moreNews.style.display === "") ? "block" : "none";
    });
  }
  
  /* Фильтрация новостей (поиск) */
  const newsSearch = document.getElementById("newsSearch");
  if (newsSearch) {
    newsSearch.addEventListener("keyup", function() {
      let filter = newsSearch.value.toLowerCase();
      let articles = document.querySelectorAll("article");
      articles.forEach(article => {
        let text = article.textContent.toLowerCase();
        article.style.display = text.includes(filter) ? "" : "none";
      });
    });
  }
  
  /* Кнопка "Наверх" */
  const scrollBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
  scrollBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  /* Модальное окно для связи */
  const contactOpen = document.getElementById("contactOpen");
  const contactModal = document.getElementById("contactModal");
  const modalClose = document.getElementById("modalClose");
  if (contactOpen) {
    contactOpen.addEventListener("click", function() {
      contactModal.style.display = "block";
    });
  }
  if (modalClose) {
    modalClose.addEventListener("click", function() {
      contactModal.style.display = "none";
    });
  }
  window.addEventListener("click", function(event) {
    if (event.target == contactModal) {
      contactModal.style.display = "none";
    }
  });
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
alert("Спасибо за ваше сообщение!");
      contactModal.style.display = "none";
      contactForm.reset();
    });
  }
  
  /* Карусель изображений */
  let slideIndex = 0;
  const slides = document.querySelectorAll(".carousel-slide");
  const nextSlideBtn = document.getElementById("nextSlide");
  const prevSlideBtn = document.getElementById("prevSlide");
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }
  if (nextSlideBtn) {
    nextSlideBtn.addEventListener("click", function() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    });
  }
  if (prevSlideBtn) {
    prevSlideBtn.addEventListener("click", function() {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlide(slideIndex);
    });
  }
  if (slides.length > 0) {
    setInterval(function() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }, 5000);
  }
  
  /* Часы (обновление каждую секунду) */
  function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    const clockElem = document.getElementById("clock");
    if (clockElem) {
      clockElem.textContent = hours + ":" + minutes + ":" + seconds;
    }
  }
  setInterval(updateClock, 1000);
  updateClock();
  
  /* Отсчёт до ближайшего матча */
  function updateCountdown() {
    const matchDate = new Date('2025-06-01T18:00:00'); // Задайте дату и время матча
    const now = new Date();
    const diff = matchDate - now;
    const countdownElem = document.getElementById("matchCountdown");
    if (!countdownElem) return;
    if (diff < 0) {
      countdownElem.textContent = "Матч уже начался!";
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    countdownElem.textContent = days + " д. " + hours + " ч. " + minutes + " м. " + seconds + " с.";
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();
});
