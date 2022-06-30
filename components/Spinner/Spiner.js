class Spiner{

  handlerClear(){
    ROOT_SPINNER.innerHTML = ''
  }

  render(){
    const html = `
    <div class='spinner-container'>
      <img class='spinner__img' src='/image/spinner.svg' />
    </div>
    `

    ROOT_SPINNER.innerHTML = html
  }
}

const spinnerPage = new Spiner()