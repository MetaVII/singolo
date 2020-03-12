const NAVIGATION = document.querySelector("#navigation");
NAVIGATION.addEventListener("click", event => {
  if (event.target.nodeName !== "A") {
    return;
  }

  NAVIGATION.querySelectorAll("A").forEach(item =>
    item.classList.remove("nav__point--active")
  );
  event.target.classList.add("nav__point--active");
});
