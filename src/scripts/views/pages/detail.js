import swal from 'sweetalert';
import Restaurant from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { listRestaurantDetail } from '../templates/template-restaurant';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div id="loading-indicator" class="loading-indicator">
        <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
     <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
       <animateTransform attributeType="xml"
         attributeName="transform"
         type="rotate"
         from="0 25 25"
         to="360 25 25"
         dur="0.6s"
         repeatCount="indefinite"/>
       </path>
     </svg>
        </div>
    <div id="error-message" class="error-message">Error saat melakukan loading data.</div>
        <div id="data-restaurant" class="detail"></div>
        <div id="likeButtonContainer"></div>
        <h3 class="ulasan-form">Tambah Ulasan ?</h3>
        <form id="ulasan-form" class="ulasan-form">
          <div class="form-element">
            <input type="text" id="review-name" autocomplete="off"  placeholder = "Masukan Nama Anda"/>
          </div>
          <div class="form-element">
            <textarea
              id="review-text"
              rows="6"
              placeholder = "Masukan Ulasan Anda"
              ></textarea>
          </div>
          <div class="form-element">
            <button id="submit-ulasan" type="submit">Kirim Review Anda</button>
          </div>
          </form>
        `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#data-restaurant');
    const reviewFormContainer = document.querySelector('#ulasan-form');
    const loadingIndicator = document.querySelector('#loading-indicator');
    const errorMessage = document.querySelector('#error-message');
    let restaurant;

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      restaurant = await Restaurant.detailRestaurant(url.id);
      restaurantContainer.innerHTML = listRestaurantDetail(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          name: restaurant.name,
          city: restaurant.city,
        },
      });
      loadingIndicator.style.display = 'none';
      restaurantContainer.style.display = 'block';
    } catch (error) {
      console.error(error);
      loadingIndicator.style.display = 'none';
      errorMessage.textContent = `Terjadi Error saat Loading Data: ${error.message}`;
      errorMessage.style.display = 'flex';
      reviewFormContainer.style.display = 'none';
    }

    const reviewForm = document.querySelector('#ulasan-form');
    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const reviewName = document.querySelector('#review-name');
      const reviewText = document.querySelector('#review-text');

      if (!reviewName.value || !reviewText.value) {
        swal({
          icon: 'error',
          text: 'Mohon untuk mengisi review Anda',
        });
        return;
      }

      const review = {
        id: restaurant.id,
        name: reviewName.value,
        review: reviewText.value,
      };

      const newReview = `
      <div class="detail-customer">
        <p>Nama: ${review.name}</p>
        <p>Review: ${review.review}</p>
        <p>Tanggal Review: ${new Date().toISOString().split('T')[0]}</p>
      </div>
      `;
      const reviewContainer = document.querySelector('#detail-review');
      reviewContainer.innerHTML += newReview;
      swal({
        icon: 'success',
        text: 'Kirim Review Berhasil',
      });
      reviewName.value = '';
      reviewText.value = '';
    });
  },
};

export default Detail;
