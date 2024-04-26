window.addEventListener("scroll", function() {
    const disappearingHeader = document.querySelector(".banner");
    const stayer = document.querySelector(".up-navbar");
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      disappearingHeader.style.opacity = 0;
      stayer.style.top = 0;
    } else {
      disappearingHeader.style.opacity = 1;
      stayer.style.top = "80px";
    }
  });