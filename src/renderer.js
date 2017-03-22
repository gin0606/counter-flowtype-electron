import mountApp from './mountApp';

window.addEventListener('load', () => {
  const el = document.querySelector('.main');
  mountApp(el);
});
