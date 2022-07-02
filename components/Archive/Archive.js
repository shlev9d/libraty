const sortAB = (a,b) => {
	return a.title.localeCompare(b.title)
	}

const sortBA = (a,b) => {
	return -sortAB(a,b)
}

const sortDateUp = (a,b) =>{
	return a.publishedAt.localeCompare(b.publishedAt)
}

const sortDateDown = (a,b) =>{
	return -sortDateUp(a,b)
}

const sortTypeToSortMetod = {
	"ab": sortAB,
	"ba": sortBA,
	"dUp": sortDateUp,
	"dDown": sortDateDown
}

class Archive {
	constructor() {
		this.classNameActive = 'archive-element__btn_active'
		this.labelAdd = 'add to archive'
		this.labelDelete = 'delete from archive'
		this.posts = []
		this.sortType = null

	}

	async fetchLibraryPosts() {
		const postIds = localStorageUtil.getPosts()
		const requests = postIds.map(id => Api.getPostsById(id))
		this.posts = await Promise.all(requests)
	}

	handleSetLocationStorage(element, id) {
		const pushPosts = localStorageUtil.putPosts(id)
console.log(pushPosts);
		if (pushPosts) {
			element.classList.add(this.classNameActive)
			element.innerHTML = this.labelDelete
		} else {
			element.classList.remove(this.classNameActive)
			element.innerHTML = this.labelAdd
		}

		Params.archiveCount = posts.length
		headerPage.render(Params)
		fetchAndRenderPosts()
	}

sort(type){
	this.sortType = type
	const sortMethod = sortTypeToSortMetod[type]
	if(sortMethod){
	this.posts = this.posts.sort(sortMethod)
	}
	this.render()
	
}


	render() {
		const postIds = localStorageUtil.getPosts()
		let htmlArchive = ''

		this.posts.map(({ id, newsSite, imageUrl, title, url, publishedAt }) => {
			let activeClass = ''
			let activeText = ''
			const date = publishedAt.slice(0, -5).replace('T', ' ')

			if (postIds.indexOf(id) === -1) {
				activeText = this.labelAdd
			} else {
				activeClass = ' ' + this.classNameActive
				activeText = this.labelDelete
			}

			htmlArchive += `
				<li class="archive-element">
					<div class="archive-element__header">
					<span class="archive-element__name">${newsSite}</span>
					<span class="archive-element__data">${date}</span>
					</div>
					<img class="archive-element__img" src="${imageUrl}" />
					<div class="archive-element__rigth">
					<span class="archive-element__title" >${title}</span>
						<div class="archive-element__buttons">
						<a class="archive-element__btn archive-element__a" href="${url}" target="_blank">перейти</a>
						<button class="archive-element__btn${activeClass}" onclick="archivePage.handleSetLocationStorage(this, ${id})">
						${activeText}
						</button>
						</div>
					</div>
						
				</li>
			`
		})

		const html = `
		
		<ul class='archive-container' >
		<div>
		<a class="archive-header__a archive-element__btn archive-element__a " href="./../../index.html">Back to posts</a>
		<button data-type='ab' class="archive-element__btn archive-element__a" onclick="archivePage.sort('ab')" >A-B</button>
		<button data-type='ba' class="archive-element__btn archive-element__a" onclick="archivePage.sort('ba')">B-A</button>
		<button data-type='dUp' class="archive-element__btn archive-element__a" onclick="archivePage.sort('dUp')">Date⇡</button>
		<button data-type='dDown' class="archive-element__btn archive-element__a" onclick="archivePage.sort('dDown')">Date⇣</button>
		</div>
    ${htmlArchive}

    </ul>
    `

		ROOT_ARCHIVE.innerHTML = html

		const element = ROOT_ARCHIVE.querySelector(`[data-type = '${this.sortType}']`)
		if(element){
			element.classList.add(this.classNameActive)
		}
	}
}
const archivePage = new Archive()
archivePage.render()
