//navigation
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

//slider carousel
const SLIDES = document.querySelectorAll(".slider__slide");
const ARROWL = document
  .querySelector("#arrowL")
  .addEventListener("click", e => plusSlides(-1));
const ARROWR = document
  .querySelector("#arrowR")
  .addEventListener("click", e => plusSlides(1));

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  if (n > SLIDES.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = SLIDES.length;
  }

  for (let index = 0; index < SLIDES.length; index++) {
    const element = SLIDES[index];
    element.style.display = "none";
  }

  SLIDES[slideIndex - 1].style.display = "block";
}

//phone turn on/off
const PHONE_CONTAINERS = document.querySelectorAll(".slider__phone-container");
PHONE_CONTAINERS.forEach(element =>
  element.addEventListener("click", e => {
    const PICTURE = e.currentTarget.querySelector(".slider__picture");
    if (PICTURE.style.display === "none") {
      PICTURE.style.display = "block";
    } else {
      PICTURE.style.display = "none";
    }
  })
);

//tag activation
const PORTFOLIO_TAGS = document.querySelector(".portfolio__tag-container");
const PORTFOLIO_IMGS = document.querySelector("#portfolioImgs");
PORTFOLIO_TAGS.addEventListener("click", e => {
  PORTFOLIO_TAGS.querySelectorAll(".portfolio__tag").forEach(item =>
    item.classList.remove("portfolio__tag--active")
  );
  e.target.classList.add("portfolio__tag--active");
  PORTFOLIO_IMGS.appendChild(PORTFOLIO_IMGS.firstElementChild);
});

PORTFOLIO_IMGS.addEventListener("click", event => {
  PORTFOLIO_IMGS.querySelectorAll(".portfolio__img").forEach(item =>
    item.classList.remove("portfolio__img--active")
  );
  event.target.classList.add("portfolio__img--active");
});

//form
const MESSAGE = document.querySelector("#message");
const MESSAGE_SUBJECT = document.querySelector("#message-subject");
const MESSAGE_DESCRIBE = document.querySelector("#message-describe");
const SUBJECT = document.querySelector("#subject");
const DESCRIBE = document.querySelector("#describe");
const SUBMIT = document
  .querySelector("#submit")
  .addEventListener("click", e => {
    e.preventDefault();
    SUBJECT.value
      ? (MESSAGE_SUBJECT.innerText = `Тема: ${SUBJECT.value}`)
      : (MESSAGE_SUBJECT.innerText = "Без темы");
    DESCRIBE.value
      ? (MESSAGE_DESCRIBE.innerText = `Описание: ${DESCRIBE.value}`)
      : (MESSAGE_DESCRIBE.innerText = "Без описания");
    MESSAGE.classList.remove("message-block--hidden");
  });

const CLOSE = document
  .querySelector("#message-close")
  .addEventListener("click", e => {
    MESSAGE_SUBJECT.innerText = "";
    MESSAGE_DESCRIBE.innerText = "";
    MESSAGE.classList.add("message-block--hidden");
  });
