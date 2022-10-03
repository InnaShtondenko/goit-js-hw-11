import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ImagesApiService from './fetchImagesAPI';
import appendImagesMarkup from './markup';

const refs = {
    seachForm: document.querySelector('#search-form'),
    galleryContainer: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.load-more'),
};


refs.seachForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

let searchValue = '';
let pageNumber = 1;
refs.loadMoreBtn.hidden = true;

function onSearch(e) {
  e.preventDefault();
  refs.loadMoreBtn.hidden = false;

  galleryContainer();
  searchValue = e.currentTarget.elements.searchQuery.value;

  if (!searchValue) {
    refs.loadMoreBtn.hidden = true;
    return Notify.warning(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }

  pageNumber = 1;
  ImagesApiService(searchValue, pageNumber).then(appendImagesMarkup);
}

function onLoadMore() {
  pageNumber += 1;
  ImagesApiService(searchValue, pageNumber)
    .then(appendImagesMarkup)
    .catch(() => {
      refs.loadMoreBtn.hidden = true;
      Notify.info(
        `We're sorry, but you've reached the end of search results.`
      );
    });
}


function galleryContainer() {
  galleryContainer.innerHTML = '';
}