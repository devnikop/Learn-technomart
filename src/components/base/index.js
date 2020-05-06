(() => {
  // map

  try {
    const mapLinkElement = document.querySelector(".info__link-map");
    const modalMapElement = document.querySelector(".modal--map");
    const modalMapCloseElement = modalMapElement.querySelector(".modal__close");

    mapLinkElement.addEventListener("click", evt => {
      evt.preventDefault();
      modalMapElement.classList.add("modal--show");
    });

    modalMapCloseElement.addEventListener("click", evt => {
      evt.preventDefault();
      modalMapElement.classList.remove("modal--show");
    });

    document.addEventListener("keydown", evt => {
      if (evt.key === "Escape") {
        modalMapElement.classList.remove("modal--show");
      }
    });
  } catch (error) {}
})();

(() => {
  // write-us

  try {
    const writeUsLinkElement = document.querySelector(".info__link--write-us");
    const modalWriteUsElement = document.querySelector(".modal--write-us");
    const modalWriteUsCloseElement = modalWriteUsElement.querySelector(
      ".modal__close"
    );

    writeUsLinkElement.addEventListener("click", evt => {
      evt.preventDefault();
      modalWriteUsElement.classList.add("modal--show");
    });

    modalWriteUsCloseElement.addEventListener("click", evt => {
      evt.preventDefault();
      modalWriteUsElement.classList.remove("modal--show");
    });

    document.addEventListener("keydown", evt => {
      if (evt.key === "Escape") {
        modalWriteUsElement.classList.remove("modal--show");
      }
    });
  } catch (error) {}
})();

(() => {
  // cart

  const cartBuyElements = document.querySelectorAll(".card__button--buy");
  const modalCartlement = document.querySelector(".modal--cart");
  if (!modalCartlement) {
    return null;
  }
  const modalCartCloseElement = modalCartlement.querySelector(".modal__close");
  const cartCheckoutElement = modalCartlement.querySelector(
    ".modal__button--checkout"
  );
  const cartContinueElement = modalCartlement.querySelector(
    ".modal__button--continue"
  );

  cartBuyElements.forEach(node => {
    node.addEventListener("click", evt => {
      evt.preventDefault();
      modalCartlement.classList.add("modal--show");
    });
  });

  modalCartCloseElement.addEventListener("click", evt => {
    evt.preventDefault();
    modalCartlement.classList.remove("modal--show");
  });

  document.addEventListener("keydown", evt => {
    if (evt.key === "Escape") {
      modalCartlement.classList.remove("modal--show");
    }
  });

  cartCheckoutElement.addEventListener("click", evt => {
    evt.preventDefault();
    modalCartlement.classList.remove("modal--show");
  });

  cartContinueElement.addEventListener("click", evt => {
    evt.preventDefault();
    modalCartlement.classList.remove("modal--show");
  });
})();
