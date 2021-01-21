import galleryArr from "./gallery-items.js";

const refs = {
  ulGallery: document.querySelector(".js-gallery"),
  divLightbox: document.querySelector(".js-lightbox"),
  imgLightbox: document.querySelector(".lightbox__image"),
  btnCloseModal: document.querySelector("[data-action=close-lightbox]"),
};

galleryArr.forEach(({ preview, original, description }, arrIndex) => {
  const template = `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        data-index="${arrIndex}"
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

  console.log(imgGalleryRef);
}

refs.ulGallery.addEventListener("click", showBigImg);

const callModal = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  refs.divLightbox.classList.add("is-open");
};

refs.ulGallery.addEventListener("click", callModal);

const closeModal = () => {
  refs.divLightbox.classList.remove("is-open");
};

refs.btnCloseModal.addEventListener("click", closeModal);

// =================================================

const imgGalleryRef = document.querySelector(".gallery__image");
// console.log(imgGalleryRef);

const scrolLeftRight = (event) => {
  if (event.keyCode == "37") {
    console.log("LEFT");
    
  }
  if (event.keyCode == "39") {
    console.log("RIGHT");
  }
};

refs.ulGallery.addEventListener("keydown", scrolLeftRight);

