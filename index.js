
const headerParams = {
	limit: 15,
	count: 0,
	archiveCount: localStorageUtil.getPosts().length,
}

let posts = []

function render() {
	headerPage.render(headerParams)
	postsPage.render()
}

spinnerPage.render()

async function getPostCountAndRender() {
	const postCount = await Api.getPostCount()
	headerParams.count = postCount
	headerPage.render(headerParams)
}

async function getPostsAndRender() {
	spinnerPage.handlerClear()
	posts = await Api.getPosts(0, headerParams.limit)
	postsPage.render()
}

getPostCountAndRender()
getPostsAndRender()

