import Glide from '@glidejs/glide'

const glide = (function() {
  const glideArray = document.querySelectorAll('.slider [data-name]')

  var options = {
    perView: 2,
    peek: {
      before: 20,
      after: 50
    },
    breakpoints: {
      600: {
        perView: 1
      }
    }
  }

  // This is super hardcoded, any changes will break this :(
  // On change of the tabs tell glide to switch.
  const tabs = document.querySelectorAll('[name=behandelingen_tabs]')
  tabs.forEach(tab => {
    tab.addEventListener('change', function() {
      loadglide()
    })
  })
  
  function loadglide() { 
    glideArray.forEach(glider => {
      const name = glider.getAttribute('data-name')
      new Glide(`.glide-${name}`, options).mount()
    })
  }

  loadglide()
})()

export default glide