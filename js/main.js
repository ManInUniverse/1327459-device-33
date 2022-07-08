const modal = document.querySelector('.modal-container');
const modalButtonOpen = document.querySelector('.advantages-link');
const modalButtonClose = modal.querySelector('.modal-close-button');

modalButtonOpen.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.remove('modal-container-close');
  document.addEventListener('keydown', function(evt) {
    if (evt.code === 'Escape') {
      modal.classList.add('modal-container-close');
    };
  });
});

modalButtonClose.addEventListener('click', function() {
  modal.classList.add('modal-container-close');
});
