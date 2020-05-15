const behandelingen = (function() {
  const tabContainer = document.querySelector('.tab-container')

  function scrollToView() {
    if (window.outerWidth > 600) {
      return
    }
    tabContainer.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  if (tabContainer) {
    const tabs = document.querySelectorAll('.tab')
    tabs.forEach(tab => tab.addEventListener('click', scrollToView))
  }
})()

export default behandelingen