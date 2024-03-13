const INCREASE_NUMBER_ANIMATION_SPEED = 100;

function increaseNumberAnimationStep(i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + "+";
    } else {
      element.innerText = i;
    }
    i += 100;
    setTimeout(function () {
      increaseNumberAnimationStep(i, element, endNumber);
    }, INCREASE_NUMBER_ANIMATION_SPEED);
  }
}

function initIncreaseNumberAnimation() {
  let element = document.querySelector(".features__clients-count");
  increaseNumberAnimationStep(0, element, 5000);
}

document
  .querySelector("#budget")
  .addEventListener("change", function handleSelectchange(event) {
    if (event.target.value === "other") {
      let formContainer = document.createElement("div");
      formContainer.classList.add("form__group", "form__other-input");
      let input = document.createElement("input");
      input.placeholder = "Введите ваш вариант";
      input.type = "text";
      formContainer.appendChild(input);
      document
        .querySelector(".form__form")
        .insertBefore(formContainer, document.querySelector(".form__submit"));
    }
    let otherInput = document.querySelector(".form__other-input");
    if (event.target.value !== "other" && Boolean(otherInput)) {
      document.querySelector(".form__form").removeChild(otherInput);
    }
  });

let animationInited = false;

function updateScroll(event) {
  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("header__scrolled");
  } else {
    document.querySelector("header").classList.remove("header__scrolled");
  }
  let countElementPosition = document.querySelector(
    ".features__clients-count"
  ).offsetTop;
  let windowBottomPosition = window.scrollY + window.innerHeight;
  if (windowBottomPosition >= countElementPosition && !animationInited) {
    initIncreaseNumberAnimation();
    animationInited = true;
  }
}

window.addEventListener("scroll", updateScroll);

function addSmoothScroll(link) {
  link.addEventListener("click", onLinkClick);
}

function onLinkClick(event) {
  event.preventDefault();
  document.querySelector(event.target.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
}

document.querySelectorAll("a[href^='#']").forEach((el) => {
  addSmoothScroll(el);
});

addSmoothScroll(document.querySelector(".more-button"));
