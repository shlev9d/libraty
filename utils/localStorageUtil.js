class LocalStorageUtil {
	constructor() {
		this.keyName = 'posts'
	}

	getPosts() {
		const postsLocalStorage = localStorage.getItem(this.keyName)
		if (postsLocalStorage !== null) {
			return JSON.parse(postsLocalStorage)
		}
		return []
	}

	putPosts(id) {
		let posts = this.getPosts()
		let pushPosts = false

		const index = posts.indexOf(id)
		if (index === -1) {
			posts.push(id)
			pushPosts = true
		} else {
			posts.splice(index, 1)
		}

		localStorage.setItem(this.keyName, JSON.stringify(posts))

		return {
			pushPosts,
			posts
		}
	}
}

const localStorageUtil = new LocalStorageUtil()