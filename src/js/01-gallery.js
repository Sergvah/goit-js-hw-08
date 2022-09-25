// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const galleryRefs = document.querySelector('.gallery');

function galleryMark(params) {
  const markGal = params
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class=gallery__image src="${preview}" alt="${description}" />
            </a>`;
    })
    .join('');
  return markGal;
}

console.log(galleryMark(galleryItems));
galleryRefs.insertAdjacentHTML('beforeend', galleryMark(galleryItems));
console.log(galleryRefs);

let lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: '250ms',
});
