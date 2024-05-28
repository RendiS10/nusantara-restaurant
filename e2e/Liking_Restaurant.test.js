/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const assert = require('assert');

Feature('Like Restoran');
Scenario('Showing empty favorite restaurants', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('#mainContent');
  I.seeElement('#data-restaurant');
});
Scenario('like a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('#mainContent');
  I.seeElement('#data-restaurant');
  I.seeElement('img');
  const firstRestaurant = locate('img').first();
  I.click(firstRestaurant);
  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(5);
  I.click('.swal-button--confirm');
  I.wait(5);
  I.amOnPage('/#/favorite');
  I.seeElement('#mainContent');
});

Feature('dont like restaurant');
Scenario('cancel like a restoran', async ({ I }) => {
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('#mainContent');
  I.seeElement('#data-restaurant');
  I.seeElement('img');
  const firstRestaurant = locate('img').first();
  I.click(firstRestaurant);
  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(5);
  I.click('.swal-button--confirm');
  I.wait(5);
  I.amOnPage('/#/favorite');
  I.seeElement('#mainContent');
  I.seeElement('img');
  const secondRestaurant = locate('img').first();
  I.click(secondRestaurant);
  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(5);
  I.click('.swal-button--confirm');
  I.wait(5);
  I.amOnPage('/#/favorite');
  I.seeElement('#mainContent');
});

Feature('Add Form Ulasan');
Scenario('If Form Ulasan Terisi', async ({ I }) => {
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('#mainContent');
  I.seeElement('#data-restaurant');
  I.seeElement('img');
  const firstRestaurant = locate('img').first();
  I.click(firstRestaurant);
  I.wait(5);
  I.seeElement('#ulasan-form');
  I.fillField('#review-name', 'Rendi Sutendi');
  I.wait(5);
  I.fillField('#review-text', 'Restoran Unik');
  I.wait(5);
  I.click('#submit-ulasan');
  I.wait(5);
  I.click('.swal-button--confirm');
  I.wait(5);
});
