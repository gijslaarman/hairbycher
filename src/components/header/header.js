const header = (function() {
  const openBtn = document.querySelector('#no-js-btn-label')
  const responsiveHeader = document.querySelector('.responsive-header-no-js')
  let open = false

  openBtn.addEventListener('click', function() {
    const headerYPos = responsiveHeader.offsetTop

    if (open) {
      open = false
    } else {
      open = true
    }

    if (open) {
      setTimeout(window.scrollTo({
        behavior: 'smooth',
        top: headerYPos
      }),100);
    }
  })
})()