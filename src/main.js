import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
          gallery.innerHTML =
            '<p>Sorry, there are no images matching your search query. Please try again!</p>';
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
  return `<div class="card">
<a href="${hit.largeImageURL}" data-lightbox="image">
    <img src="${hit.webformatURL}" alt="${hit.tags}">
</a>
<div class="details">
    <p><strong>Likes:</strong> ${hit.likes}</p>
    <p><strong>Views:</strong> ${hit.views}</p>
    <p><strong>Comments:</strong> ${hit.comments}</p>
    <p><strong>Downloads:</strong> ${hit.downloads}</p>
</div>
</div>`;
}
