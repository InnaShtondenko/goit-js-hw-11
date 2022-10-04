// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

export default function appendImagesMarkup(data) {

  if (data.hits.length < 40) {
    loadMoreBtn.hidden = true;
  }
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
