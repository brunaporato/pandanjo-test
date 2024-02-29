export function zoomImage() {
  let principalImage = document.querySelector('#principal-image img');
  
  principalImage.addEventListener('mousemove', function(event) {
    const x = event.offsetX / this.offsetWidth
    const y = event.offsetY / this.offsetHeight

    this.style.transformOrigin = `${x * 100}% ${y * 100}%`
    this.style.transform = 'scale(2.5)'
  })

  principalImage.addEventListener('mouseleave', function() {
    this.style.transformOrigin = 'center'
    this.style.transform = 'scale(1)'
  })
}