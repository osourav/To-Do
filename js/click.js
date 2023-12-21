const nav_btn = document.querySelectorAll(".nav-btn:not(.up)");

nav_btn.forEach(btn => {
   btn.addEventListener("click", () => {
      nav_btn.forEach(btn => btn.classList.remove("active"));
      btn.classList.add("active");
   })
});