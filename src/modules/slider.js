export function setupSlider() {
  const sliderContainer = document.getElementById('slider-container')
  const prevButton = document.querySelector('.slider-button.desktop img[src="./assets/icons/arrow-left-large.svg"]')
  const nextButton = document.querySelector('.slider-button.desktop img[src="./assets/icons/arrow-right-large.svg"]')
  const scrollAmount = 300

  prevButton.addEventListener('click', () => {
    sliderContainer.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    })

    //loop
    if (sliderContainer.scrollLeft === 0) {
      sliderContainer.scrollBy({
        left: sliderContainer.scrollWidth,
        behavior: 'smooth'
      })
    }
  })

  nextButton.addEventListener('click', () => {
    sliderContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    })
    
    //loop
    if (Math.floor(sliderContainer.scrollLeft + sliderContainer.clientWidth) === sliderContainer.scrollWidth) {
      sliderContainer.scrollBy({
        left: -sliderContainer.scrollWidth,
        behavior: 'smooth'
      })
    }
  })
}
