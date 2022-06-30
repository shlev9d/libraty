class Header {
 
  hendlerOpenArchive(){
    archivePage.render()
  }

  render(count){ 
    
    let html = `
    <div class='header-container'>
      <div class='header-counter' onclick='headerPage.hendlerOpenArchive()'>
        <img class='header-icon' src='../../image/icon-archive.png'/> ${count}
      </div>
    </div>
    `

    ROOT_HEADER.innerHTML = html 
  }
}

const headerPage = new Header()
