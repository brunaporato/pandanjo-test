export function selectVariants() {
  const colorButtons = document.querySelectorAll('#color-options button');
  const sizeButtons = document.querySelectorAll('#size-options button');

  colorButtons.forEach(button => {
    button.addEventListener('click', function() {
      colorButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

  sizeButtons.forEach(button => {
    button.addEventListener('click', function() {
      sizeButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });
}