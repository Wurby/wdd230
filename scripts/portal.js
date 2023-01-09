const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
  collapsible.addEventListener("click", () => {
    collapsible
      .querySelector(".collapsible-content")
      .classList.toggle("hidden");
    collapsible.querySelector("span").classList.toggle("fa-plus");
    collapsible.querySelector("span").classList.toggle("fa-minus");
  });
});

const anchors = document.querySelectorAll("a");

// open all external links in a new tab
anchors.forEach((anchor) => {
  if (!anchor.href.endsWith("html")) {
    anchor.setAttribute("target", "_blank");
  }
});

const sunIcon = document.querySelectorAll(".color-mode");

sunIcon.forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelectorAll(".color-mode").forEach((item) => {
      item.classList.toggle("fa-sun");
      item.classList.toggle("fa-moon");
    });
    document.body.classList.toggle("dark");
    document.querySelector("main").classList.toggle("darkGrey");
  });
});

const mobileMenu = document.querySelector("#mobile-menu");

mobileMenu.addEventListener("click", () => {
  document.querySelector(".mobile-menu-hider").classList.toggle("hidden");
});

document.body.addEventListener("click", (e) => {
  if (e.target !== mobileMenu) {
    document.querySelector(".mobile-menu-hider").classList.toggle("hidden");
  }
});
