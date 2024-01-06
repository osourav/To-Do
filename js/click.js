const taskSecs = document.querySelectorAll("#tasks .sec");
const home_category = document.querySelectorAll(".category");

const nav_btn = document.querySelectorAll(".nav-btn:not(.up)");
let startX, movedX;
let activeCategory = 0;
let isHolding = false;
const minMove = 60;

nav_btn.forEach((btn, i) => {
   btn.addEventListener("click", () => toggle(nav_btn, i));
});

moveSlide(activeCategory, 1);

home_category.forEach((btn, i) => {
   btn.addEventListener("click", () => {
      const tempCategory = activeCategory;
      moveSlide(i, tempCategory);
   })
});
 

tasks.addEventListener("mousedown", holdingStart);
window.addEventListener("mousemove", dragging);
window.addEventListener("mouseup", holdingEnd);

tasks.addEventListener("touchstart", holdingStart);
window.addEventListener("touchmove", dragging);
window.addEventListener("touchend", holdingEnd);

function holdingStart(E) {
   let e = E;
   if (e.type == "touchstart") e = e.touches[0];
   isHolding = true;
   startX = e.clientX;
   tasks.classList.add("active");
}

function dragging(E) {
   if (!isHolding) return;
   let e = E;
   if (e.type == "touchmove") e = e.touches[0];
   movedX = e.clientX - startX;

   // console.log(movedX);

   if (movedX > 0) {
      setCategoryPosition(movedX, true);
   } else if (movedX < 0) {
      setCategoryPosition(movedX, false);
   }
}

function holdingEnd() {
   if (!isHolding) return;
   isHolding = false;
   
   if (movedX >= minMove) {
      setCategoryPosition(0, true, true);
   } else if (movedX <= -minMove) {
      setCategoryPosition(0, false, true);
   } else if (movedX > 0) {
      setCategoryPosition(0, true);
   } else if (movedX < 0) {
      setCategoryPosition(0, false);
   }
   tasks.classList.remove("active");
}