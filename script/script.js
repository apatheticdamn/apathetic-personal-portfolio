document.addEventListener('DOMContentLoaded', function () {
  const hamMenu = document.querySelector('.hamburgur-menu');
  const offScreenMenu = document.querySelector('.offscreen-menu');

  hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
  });
});
