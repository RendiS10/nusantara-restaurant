/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/my-footer.js';
import './components/my-hero.js';
import './components/my-navbar.js';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const app = new (async () => {
  const App = (await import('./views/app')).default;
  return new App({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('#drawer'),
    hero: document.querySelector('#hero'),
    main: document.querySelector('#mainContent'),
  });
})();

window.addEventListener('hashchange', () => {
  app.then((instance) => instance.renderPage());
});

window.addEventListener('load', () => {
  app.then((instance) => instance.renderPage());
  import('./utils/sw-register').then((module) => module.default());
});
