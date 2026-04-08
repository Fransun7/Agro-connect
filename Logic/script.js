document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");

  hamburger.addEventListener("click", () => {
    sideMenu.classList.remove("translate-x-full");

    sideMenu.addEventListener("click", () => {
      sideMenu.classList.add("translate-x-full");
    });
  });
});
