//navigation
// const NAVIGATION = document.querySelector("#navigation");
// NAVIGATION.addEventListener("click", event => {
//   if (event.target.nodeName !== "A") {
//     return;
//   }

//   NAVIGATION.querySelectorAll("A").forEach(item =>
//     item.classList.remove("nav__point--active")
//   );
//   event.target.classList.add("nav__point--active");
// });

const NAVIGATION_ITEMS = document.querySelectorAll(".nav__point");
const HOME_BLOCK_HEIGHT = document.querySelector(".header-container")
  .offsetHeight;

document.addEventListener("scroll", e => {
  const currentPosition = window.scrollY;

  NAVIGATION_ITEMS.forEach(item => {
    const block = document.querySelector(item.getAttribute("href"));
    if (
      currentPosition + HOME_BLOCK_HEIGHT >= block.offsetTop &&
      currentPosition < block.offsetTop + block.offsetHeight
    ) {
      NAVIGATION_ITEMS.forEach(item =>
        item.classList.remove("nav__point--active")
      );
      item.classList.add("nav__point--active");
    }

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // you're at the bottom of the page
      NAVIGATION_ITEMS.forEach(item =>
        item.classList.remove("nav__point--active")
      );

      document
        .querySelector(".nav__point[href='#contact']")
        .classList.add("nav__point--active");
    }
  });
});

//mobile navigation
const MOBILE_NAVIGATION_WINDOW = document.querySelector("#mobile-nav");
const BURGER_MENU_BUTTON_OPEN = document.querySelector("#burger-button-open");
const BURGER_MENU_BUTTON_CLOSE = document.querySelector("#burger-button-close");
const NAVIGATION_ITEMS_MOBILE = document.querySelectorAll(".mobile-nav__link");

BURGER_MENU_BUTTON_OPEN.addEventListener("click", e =>
  MOBILE_NAVIGATION_WINDOW.classList.add("mobile-nav--open")
);

BURGER_MENU_BUTTON_CLOSE.addEventListener("click", e =>
  MOBILE_NAVIGATION_WINDOW.classList.remove("mobile-nav--open")
);

NAVIGATION_ITEMS_MOBILE.forEach(item =>
  item.addEventListener("click", e =>
    MOBILE_NAVIGATION_WINDOW.classList.remove("mobile-nav--open")
  )
);

document.addEventListener("scroll", e => {
  const currentPosition = window.scrollY;

  NAVIGATION_ITEMS_MOBILE.forEach(item => {
    const block = document.querySelector(item.getAttribute("href"));
    if (
      currentPosition + HOME_BLOCK_HEIGHT >= block.offsetTop &&
      currentPosition < block.offsetTop + block.offsetHeight
    ) {
      NAVIGATION_ITEMS_MOBILE.forEach(item =>
        item.classList.remove("mobile-nav__link--active")
      );
      item.classList.add("mobile-nav__link--active");
    }
  });
});

//slider carousel
let currentItem = 0;
let isEnabled = true;

const SLIDES = document.querySelectorAll(".slider__slide");

const ARROWL = document
  .querySelector("#arrowL")
  .addEventListener("click", e => {
    if (isEnabled) {
      previousItem(currentItem);
    }
  });

const ARROWR = document
  .querySelector("#arrowR")
  .addEventListener("click", e => {
    if (isEnabled) {
      nextItem(currentItem);
    }
  });

function nextItem(n) {
  hideItem("to-left");
  changeCurrentItem(n + 1);
  showItem("from-right");
}

function previousItem(n) {
  hideItem("to-right");
  changeCurrentItem(n - 1);
  showItem("from-left");
}

function changeCurrentItem(n) {
  currentItem = (n + SLIDES.length) % SLIDES.length;
}

function hideItem(direction) {
  isEnabled = false;
  SLIDES[currentItem].classList.add(direction);
  SLIDES[currentItem].addEventListener("animationend", function() {
    this.classList.remove("slider__active", direction);
  });
}

function showItem(direction) {
  SLIDES[currentItem].classList.add("slider__next", direction);
  SLIDES[currentItem].addEventListener("animationend", function() {
    this.classList.remove("slider__next", direction);
    this.classList.add("slider__active");
    isEnabled = true;
  });
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
const FORM = document.querySelector(".feedback__form");
const MESSAGE = document.querySelector("#message");
const MESSAGE_SUBJECT = document.querySelector("#message-subject");
const MESSAGE_DESCRIBE = document.querySelector("#message-describe");
const SUBJECT = document.querySelector("#subject");
const DESCRIBE = document.querySelector("#describe");
const SUBMIT = document
  .querySelector("#submit")
  .addEventListener("click", e => {
    if (!FORM.checkValidity()) {
      return;
    }

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
    FORM.reset();
    MESSAGE.classList.add("message-block--hidden");
  });
