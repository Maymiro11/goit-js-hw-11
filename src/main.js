import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from '../src/img/izitoast-icon.svg';
import closeIcon from '../src/img/izitoast-close.svg';

const lightbox = new SimpleLightbox('.gallery a', { scrollZoom: false });

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onFormSubmit);

function fetchImg(query) {
  const BASE_URL = 'https://pixabay.com/api/?';
  const PARAMS = new URLSearchParams({
    key: '42172991-e7a3268a8ccb87dfba8d5efbc',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = BASE_URL + PARAMS;

  return fetch(url).then(response => response.json());
}
function onFormSubmit(e) {
  e.preventDefault();

  const query = document.querySelector('input[type="text"]').value.trim();

  if (query !== '') {
    loader.style.display = 'inline-block';

    fetchImg(query)
      .then(data => {
        if (data.hits.length === 0) {

          iziToast.show({
            messageAlign: 'center',
            message: 'Sorry, there are no images matching <br> your search query. Please try again!',
            messageColor: '#FFFFFF',
            messageSize: '16px',
            position: 'center',
            backgroundColor: '#EF4040',
            progressBarColor: '#B51B1B',
            iconUrl: errorIcon,
            displayMode: 'replace',
            close: false,
            closeOnEscape: true,
            pauseOnHover: false,
            buttons: [
              [
                `<button type="button" style="background-color: transparent;"><img src=${closeIcon}></button>`,
                function (instance, toast) {
                  instance.hide({ transitionOut: 'fadeOut' }, toast);
                },
              ],
            ],
        });

          form.reset();
        } else {
          gallery.innerHTML = imagesTemplate(data.hits);

          lightbox.refresh();
        }
      })
      .catch(error => console.error('Error fetching data:', error))
      .finally(() => {
        loader.style.display = 'none';
      });
  }
}
function imagesTemplate(hits) {
  return hits.map(imgTemplate).join('');
}

function imgTemplate(hit) {
  return `<li class="gallery-card">
<a href="${hit.largeImageURL}" data-lightbox="image">
    <img class="gallery-image"
    src="${hit.webformatURL}" alt="${hit.tags}">
</a>
<div class="details">
    <p><strong>Likes:</strong> ${hit.likes}</p>
    <p><strong>Views:</strong> ${hit.views}</p>
    <p><strong>Comments:</strong> ${hit.comments}</p>
    <p><strong>Downloads:</strong> ${hit.downloads}</p>
</div>
</li>`;
}
