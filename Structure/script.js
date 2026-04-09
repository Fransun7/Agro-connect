document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");
  const closeBtn = document.getElementById("close-button");

  hamburger.addEventListener("click", () => {
    sideMenu.classList.remove("translate-x-full");

    closeBtn.addEventListener("click", () => {
      sideMenu.classList.add("translate-x-full");
    });
  });
});
