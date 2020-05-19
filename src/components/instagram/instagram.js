import Nanogram from "nanogram.js";

const instagram = (function() {
  const instagramParser = new Nanogram();
  const container = document.querySelector('.live-instagram-feed .photos')
  
  if (container) {
    instagramParser.getMediaByUsername("hairbycher").then((media) => {
      const timeline = media.profile.edge_owner_to_timeline_media.edges;
      
      const amount = container.childElementCount
      
      for (let i = 0; i < amount; i++) {
        const photo = timeline[i].node
    
        const photoEl = document.createElement('div')
        photoEl.classList.add('photo')
        const img = document.createElement('img')
        img.src = photo.thumbnail_resources[2].src
        img.alt = photo.accessibility_caption
        
        const a = document.createElement('a')
        a.href = 'https://www.instagram.com/p/' + photo.shortcode
    
        photoEl.appendChild(img)
        photoEl.appendChild(a)
        container.replaceChild(photoEl, container.childNodes[i])
      }
    });
  }
})()

export default instagram