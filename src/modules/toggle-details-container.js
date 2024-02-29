export function handleToggleDetails() {
  const titles = document.querySelectorAll('.product-info-title')

  titles.forEach(title => {
      title.addEventListener('click', () => {
          const detailsContainer = title.nextElementSibling
          
          if (detailsContainer && detailsContainer.classList.contains('hide')) {
              detailsContainer.classList.remove('hide')
          } else {
              detailsContainer.classList.add('hide')
          }
          
          titles.forEach(otherTitle => {
              if (otherTitle !== title) {
                  const otherDetailsContainer = otherTitle.nextElementSibling
                  otherDetailsContainer.classList.add('hide')
              }
          })
      })
  })
}