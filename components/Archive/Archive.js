class Archive {

    handlerClear(){
      ROOT_ARCHIVE.innerHTML = ''
    }

	render() {
		const postsStore = localStorageUtil.getPosts()
    let htmlCatalog = ``

		CATALOG.forEach(({ id, name }) => {
			if (postsStore.indexOf(id) !== -1) {
				htmlCatalog += `
        <tr>
          <td class='archive-element__name'>${name}</td>
        </tr>
        `
			}
		})

		const html = `
      <div class='archive-container'>
        <img class='archive__close' src='../../image/close.png' onclick='archivePage.handlerClear()' />
        <table>
          ${htmlCatalog}
        </table>
      </div>
`
		ROOT_ARCHIVE.innerHTML = html
	}
}

const archivePage = new Archive()

