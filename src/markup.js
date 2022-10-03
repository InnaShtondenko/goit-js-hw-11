// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector('.gallery');

export default function appendImagesMarkup(data) {
  const markup = data.hits
    .map(
      ({
        webformatURL, 
        largeImageURL, 
        tags, 
        likes, 
        views,
        comments,
        downloads
      }) => {
         return `
         <div class="photo-card">
         <a class="gallery-link" href="${largeImageURL}">
         <img class="photo-card-item-img" src="${webformatURL}" alt="${tags}"  width = "320" height = "270" loading="lazy"/>
         </a>
         <div class="info">
           <p class="info-item">
             <b class="info-item-title">Likes</b>${likes}
           </p>
           <p class="info-item">
             <b class="info-item-title">Views</b>${views}
           </p>
           <p class="info-item">
             <b class="info-item-title">Comments</b>${comments}
           </p>
           <p class="info-item">
             <b class="info-item-title">Downloads</b>${downloads}
           </p>
         </div>
       </div>
       `
    }).join("");
      
        galleryContainer.insertAdjacentHTML('beforeend', markup);
        lightbox.refresh();
        }   

let lightbox = new SimpleLightbox('.gallery a', {});
