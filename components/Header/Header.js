class Header {
	onChangeLimit(val) {
		Params.limit = Number(val)
    this.render(Params)
    allPosts = []
	}

	//функция чтобы закрывать корзину
	hendlerOpenArchive() {
		archivePage.render()
	}

	render({ archiveCount, limit, count, page}) {
		//count передается из индекс при рендере
		// let ccc = this.myFunction()

		let html = `
    <div class='header-container'>
    <div class="header-countInput">
    <input type="text" class="header-countInput__input" value="${limit}" onchange="headerPage.onChangeLimit(this.value)" />
    <div class="header-countInput__count" >${limit*page}/${count}</div>
    </div>

      <a class='header-counter' href="/library.html">
        <img class='header-icon' src='../../image/icon-archive.png'/>  
        <div>${archiveCount}</div>
      </a>
    </div>
    `

		ROOT_HEADER.innerHTML = html
    return limit
	}
}

const headerPage = new Header()
