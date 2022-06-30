function render() {
	const postsArchive = localStorageUtil.getPosts()

	headerPage.render(postsArchive.length)
	postsPage.render()
}

spinnerPage.render()

let CATALOG = []

fetch('./catalog.json')
	.then(res => res.json())
	.then(body => {
		CATALOG = body
      setTimeout(() => {
				spinnerPage.handlerClear()
		render()
			}, 1000)
	
	})
	.catch(error => {
    spinnerPage.handlerClear()
    errorPage.render()
  })


  // fetch('https://api.spaceflightnewsapi.net/v3/articles')
  // .then(res => res.json())
  // .then(data => {
  //   CATALOG = data
  //   spinnerPage.handlerClear()
  //   render()
  // })