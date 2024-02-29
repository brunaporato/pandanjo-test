export function scrollRating() {
  const seeRatingLink = document.getElementById('see-rating')

  seeRatingLink.addEventListener('click', function (event) {
    event.preventDefault()

    const pageBottom = document.body.scrollHeight

    window.scrollTo({
      top: pageBottom,
      behavior: 'smooth'
    })
  })
}