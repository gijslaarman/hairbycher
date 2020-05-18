fetch('https://hairbycher-insta-auth.herokuapp.com/token.json')
.then(res => res.json())
.then(tokenObj => {
  console.log(tokenObj);
  console.log(Instafeed);
  
  var feed = new Instafeed({
    tagName: "instafeed",
    clientId: tokenObj.token
  })

  feed.run()
})