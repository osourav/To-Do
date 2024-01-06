function toggle(eles, i, className = "active") {
   eles.forEach(btn => btn.classList.remove(className));
   eles[i].classList.add(className);
}

function moveSlide(aCategory, bCategory) {
   if (aCategory === 0 && bCategory >= 1) {
      taskSecs[0].style.left = "0%";
      taskSecs[2].style.left = "100%";
   } else if (aCategory === 1 && bCategory == 0) {
      taskSecs[0].style.left = "-100%";
      taskSecs[2].style.left = "100%";
   } else if (aCategory === 1 && bCategory == 2) {
      taskSecs[2].style.left = "100%";
      taskSecs[0].style.left = "-100%";
   } else if (aCategory === 2 && bCategory <= 1){
      taskSecs[2].style.left = "0%";
      taskSecs[0].style.left = "-100%";
   }
   activeCategory = aCategory;
   toggle(home_category, activeCategory);
}

function setCategoryPosition(position, isPositive, complete = false) {
   const cssLeft = position + "px";

   switch (activeCategory) {
      case 0:
         if (complete && !isPositive) {
            moveSlide(1, 0);
         } else if (isPositive) {
            taskSecs[0].style.left = "0%";
         } else {
            taskSecs[0].style.left = cssLeft;
         }
         break;
      case 1:
         if (complete && isPositive) {
            moveSlide(0, 1);
         } else if (complete) {
            moveSlide(2, 1);
         } else if (isPositive) {
            taskSecs[0].style.left = `calc(-100% + ${cssLeft})`;
         } else {
            taskSecs[2].style.left = `calc(100% + ${cssLeft})`;
         }
         break;
      case 2:
         if (complete && isPositive) {
            moveSlide(1, 2);
         } else if (isPositive) {
            taskSecs[2].style.left = cssLeft;
         } else {
            taskSecs[2].style.left = "0%";
         }
         break;
   }
}