function render() {
	const postsArchive = localStorageUtil.getPosts()

	headerPage.render(postsArchive.length)
	postsPage.render()
}

spinnerPage.render()
let CATALOG = []

fetch(`${BASE_API}/articles/`)
.then(res => res.json())
.then(data => {
	CATALOG = data
	console.log(CATALOG);
	spinnerPage.handlerClear()
	render()
})