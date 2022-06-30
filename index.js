function render() {
	const postsArchive = localStorageUtil.getPosts()

	headerPage.render(postsArchive.length)
	postsPage.render()
}

spinnerPage.render()
let CATALOG = []

fetch('https://api.spaceflightnewsapi.net/v3/articles/')
.then(res => res.json())
.then(data => {
	CATALOG = data
	console.log(CATALOG);
	spinnerPage.handlerClear()
	render()
})

// fetch('https://api.spaceflightnewsapi.net/v3/articles')
// 	.then(res => res.json())
// 	.then(body => {
// 		CATALOG = body
//     console.log(CATALOG);
// 		spinnerPage.handlerClear()
// 		render()
// 	})
// 	.catch(error => {
// 		spinnerPage.handlerClear()
// 		errorPage.render()
// 	})