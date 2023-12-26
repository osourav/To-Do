const nav_btn = document.querySelectorAll(".nav-btn:not(.up)");
nav_btn.forEach(btn => {
   btn.addEventListener("click", () => {
      nav_btn.forEach(btn => btn.classList.remove("active"));
      btn.classList.add("active");
   })
});

const home_category = document.querySelectorAll(".category");
home_category.forEach(btn => {
   btn.addEventListener("click", () => {
      home_category.forEach(btn => btn.classList.remove("active"));
      btn.classList.add("active");
   })
});