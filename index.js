// this enables tapping to reveal image captions on a touch device
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', (e) => {
    // ignore clicks that start inside links/buttons inside the overlay
    if (e.target.closest('a,button')) return;
    card.classList.toggle('is-open');
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') document.querySelectorAll('.card.is-open')
    .forEach(c => c.classList.remove('is-open'));
});
