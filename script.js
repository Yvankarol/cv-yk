document.addEventListener('DOMContentLoaded', () => {

  /* ---- Photo miniature cliquable -> photo agrandie ---- */
  const photo = document.getElementById('photo');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');

  function openLightbox() {
    lightboxImg.src = photo.src;
    lightbox.hidden = false;
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    photo.focus();
  }

  photo.addEventListener('click', openLightbox);
  photo.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openLightbox();
    }
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });

  /* ---- Formulaire de contact -> envoi par mail ---- */
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Merci de remplir tous les champs.';
      return;
    }

    const subject = encodeURIComponent(`Contact CV — message de ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

    window.location.href = `mailto:yvankarol@gmail.com?subject=${subject}&body=${body}`;
    status.textContent = 'Votre client de messagerie va s\'ouvrir pour envoyer le message.';
  });

});
