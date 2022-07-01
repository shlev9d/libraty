class Posts {
	constructor() {
//переменные для добавления активных классов и тырыпыры
		this.classNameActive = 'posts-element__btn_active'
		this.labelAdd = 'add to archive'
		this.labelDelete = 'delete from archive'
	}

	 //функция для сохранения в локал и добавления актив класса
	handleSetLocationStorage(element, id) {
		const { pushPosts, posts } = localStorageUtil.putPosts(id)

		if (pushPosts) {
			element.classList.add(this.classNameActive)
			element.innerHTML = this.labelDelete
		} else {
			element.classList.remove(this.classNameActive)
			element.innerHTML = this.labelAdd
		}

		headerParams.archiveCount = posts.length; 
		headerPage.render(headerParams)
	}

	render() {
		const postsStore = localStorageUtil.getPosts()
		let htmlArticles = ''
	

		posts.forEach(({ id, newsSite, imageUrl, title, url, publishedAt }) => {
			let activeClass = ''
			let activeText = ''
			const date = publishedAt.slice(0,-5).replace('T', ' ')


			if (postsStore.indexOf(id) === -1) {
				activeText = this.labelAdd
			} else {
				activeClass = ' ' + this.classNameActive
				activeText = this.labelDelete
			}

			htmlArticles += `
				<li class="posts-element">
				<div class="posts-element__header">
					<span class="posts-element__name">${newsSite}</span>
					<span class="posts-element__data">${date}</span>
				</div>
					<img class="posts-element__img" src="${imageUrl}" />
						<span class="posts-element__title" >${title}</span>
						<div class="posts-element__buttons">
						<a class="posts-element__btn posts-element__a" href="${url}" target="_blank">перейти</a>
						<button class="posts-element__btn${activeClass}" onclick="postsPage.handleSetLocationStorage(this, ${id})">
						${activeText}
						</button>
						</div>
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

