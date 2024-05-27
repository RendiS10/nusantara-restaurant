import Restaurant from '../../data/restaurant-source';
import { listRestaurantCard } from '../templates/template-restaurant';

const Home = {
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
    <h2 tabindex="0">Explore Restaurant</h2>
    <div class="card" id="data-restaurant"></div>
          `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#data-restaurant');
    const loadingIndicator = document.querySelector('#loading-indicator');
    const errorMessage = document.querySelector('#error-message');
    try {
      loadingIndicator.style.display = 'flex';
      const restaurant = await Restaurant.listRestaurant();
      loadingIndicator.style.display = 'none';
      restaurant.forEach((resto) => {
        restaurantContainer.innerHTML += listRestaurantCard(resto);
      });
    } catch (error) {
      console.error(error);
      errorMessage.textContent = `Error: ${error.message}`;
      errorMessage.style.display = 'flex';
      loadingIndicator.style.display = 'none';
      restaurantContainer.style.display = 'none';
    }
  },
};

export default Home;
