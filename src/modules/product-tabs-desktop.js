export function handleProductTabs() {
  const detailsButton = document.getElementById('details-button')
  const featuresButton = document.getElementById('features-button')

  const detailsContainer = document.getElementById('details-open')
  const featuresContainer = document.getElementById('features-open')

  detailsButton.addEventListener('click', function() {
    detailsButton.classList.add('active')
    featuresButton.classList.remove('active')

    featuresContainer.classList.add('hide')
    detailsContainer.classList.remove('hide')
  })

  featuresButton.addEventListener('click', function() {
    featuresButton.classList.add('active')
    detailsButton.classList.remove('active')

    detailsContainer.classList.add('hide')
    featuresContainer.classList.remove('hide')
  })
}