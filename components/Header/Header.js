class Header {
	onChangeLimit(val) {
		headerParams.limit = Number(val)
    this.render(headerParams)
    getPostsAndRender()
	}

	//функция чтобы закрывать корзину
	hendlerOpenArchive() {
		archivePage.render()
	}

	render({ archiveCount, limit, count}) {
		//count передается из индекс при рендере
		// let ccc = this.myFunction()

		let html = `
    <div class='header-container'>
    <div class="header-countInput">
    <input type="text" class="header-countInput__input" value="${limit}" onchange="headerPage.onChangeLimit(this.value)" />
    <div class="header-countInput__count" >${limit}/${count}</div>
    </div>

      <div class='header-counter' onclick='headerPage.hendlerOpenArchive()'>
        <img class='header-icon' src='../../image/icon-archive.png'/>  
        <div>${archiveCount}</div>
      </div>
    </div>
    `

		ROOT_HEADER.innerHTML = html
    return limit
	}
}

const headerPage = new Header()
