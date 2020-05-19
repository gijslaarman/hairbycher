const behandelingen = (function() {
  const tabContainer = document.querySelector('.tab-container')

  function scrollToView() {
    // If not mobile don't scroll
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

  if (window.location.pathname === '/behandelingen/') {
    const hash = window.location.hash.split('#').pop()
    const thisInputThatHasToBeChecked = document.getElementById(hash)
    const inputs = document.querySelectorAll('input[name=behandelingen_tabs]')
    
    if (thisInputThatHasToBeChecked) {
      inputs.forEach(input => input.removeAttribute('checked'))
      thisInputThatHasToBeChecked.setAttribute('checked', '')
    }
  }
})()

export default behandelingen