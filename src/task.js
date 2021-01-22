import galleryArr from "./gallery-items.js";

const refs = {
  ulGallery: document.querySelector(".js-gallery"),
  divLightbox: document.querySelector(".js-lightbox"),
  imgLightbox: document.querySelector(".lightbox__image"),
  btnCloseModal: document.querySelector("[data-action=close-lightbox]"),
};

let indexCurentImg = 0;

galleryArr.forEach(({ preview, original, description }, galleryIndex) => {
  const template = `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        data-index="${galleryIndex}"
        alt="${description}"
      />
    </a>
  </li>`;
  refs.ulGallery.insertAdjacentHTML("afterbegin", template);
});

const showBigImg = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const bigImgURL = event.target.dataset.source;

  setBigImgSrc(bigImgURL);
};

function setBigImgSrc(url) {
  refs.imgLightbox.src = url;
}

refs.ulGallery.addEventListener("click", showBigImg);

const callModal = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  refs.divLightbox.classList.add("is-open");

  indexCurentImg = event.target.dataset.index;
};

refs.ulGallery.addEventListener("click", callModal);

const closeModal = () => {
  refs.imgLightbox.removeAttribute("src");
  refs.divLightbox.classList.remove("is-open");
};

refs.btnCloseModal.addEventListener("click", closeModal);

const scrolLeftRight = (event) => {
  if (event.code === "ArrowLeft" && indexCurentImg > 0) {
    indexCurentImg = Number(indexCurentImg) - 1;
    refs.imgLightbox.src = galleryArr[indexCurentImg].original;
  }

  if (event.code === "ArrowRight" && indexCurentImg < galleryArr.length - 1) {
    indexCurentImg = Number(indexCurentImg) + 1;
    refs.imgLightbox.src = galleryArr[indexCurentImg].original;
  }
};

refs.ulGallery.addEventListener("keydown", scrolLeftRight);
