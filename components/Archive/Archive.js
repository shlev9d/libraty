class Archive {
	handlerClear() {
		ROOT_ARCHIVE.innerHTML = ''
	}

	render() {
		const postsStore = localStorageUtil.getPosts()

		let htmlArchive = ``

		if (postsStore.length === 0) {
			htmlArchive = `
				<div class="archive-empty">
					<h3>The archive is empty</h3>
				</div>
			`
		} else {
			CATALOG.forEach(({ id, title, url }) => {
				console.log({ id })
				if (postsStore.indexOf(id) !== -1) {
					htmlArchive += `
					<table>
					<tr>
						<td class='archive-element__name'><a href='${url}'>read</a></td>
						<td>${title}</td>
					</tr>
					</table>
				`
				}
			})
		}

		const html = `
      <div class='archive-container'>
        <img class='archive__close' src='../../image/close.png' onclick='archivePage.handlerClear()' />
          ${htmlArchive}
      </div>
`
		ROOT_ARCHIVE.innerHTML = html
	}
}

const archivePage = new Archive()
