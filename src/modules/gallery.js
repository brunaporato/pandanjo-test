export function gallery() {
  const thumbnails = document.querySelectorAll('#gallery img')

  const principalImage = document.querySelector('#principal-image img');

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
          thumbnails.forEach(item => item.classList.remove('image-selected'));
          this.classList.add('image-selected');
          principalImage.src = this.src;
          principalImage.alt = this.alt;
      });
  });
}