
const Params = {
	limit: 15,
	count: 0,
	archiveCount: localStorageUtil.getPosts().length,
	start: 0,
	page: 1,
}

let posts = []
let allPosts = []
	
	async function getPostCountAndRender() {
		const postCount = await Api.getPostCount()
		Params.count = postCount
		headerPage.render(Params)
	}
	
	async function getPostsAndRender() { 
		posts = await Api.getPosts(Params.start, Params.limit)
		allPosts = allPosts.concat(posts)
		postsPage.render()
		headerPage.render(Params)
	}
	
	getPostCountAndRender()
	getPostsAndRender()
	
	