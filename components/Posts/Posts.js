class Posts {
	constructor() {
		this.classNameActive = 'posts-element__btn_active'
		this.labelAdd = 'add to archive'
		this.labelDelete = 'delete from archive'
	}

	handleSetLocationStorage(element, id) {
		const { pushPosts, posts } = localStorageUtil.putPosts(id)

		if (pushPosts) {
			element.classList.add(this.classNameActive)
			element.innerHTML = this.labelDelete
		} else {
			element.classList.remove(this.classNameActive)
			element.innerHTML = this.labelAdd
		}

		headerPage.render(posts.length)
	}

	render() {
		const postsStore = localStorageUtil.getPosts()
		let htmlArticles = ''

		CATALOG.forEach(({ id, newsSite, imageUrl,title,url }) => {
				let activeClass = ''
				let activeText = ''

				if (postsStore.indexOf(id) === -1) {
					activeText = this.labelAdd
				} else {
					activeClass = ' ' + this.classNameActive
					activeText = this.labelDelete
				}

			htmlArticles += `
				<li class='posts-element'>
					<span class='posts-element__name'>${newsSite}</span>
					<img class='posts-element__img' src='${imageUrl}' />
						<span class='posts-element__price' >${title}</span>
						<a href="${url}">перейти</a>
						<button class='posts-element__btn${activeClass}' onclick='postsPage.handleSetLocationStorage(this, "${id}")'>
						${activeText}
						</button>
				</li>
			`
		})

		const html = `
    <ul class='posts-container' >
    ${htmlArticles}
    </ul>
    `

		ROOT_POSTS.innerHTML = html
	}
}

const postsPage = new Posts()

