let openMenuButton = document.querySelector('.openMenuButton')
let links = document.querySelector('.links')
let buttons = document.querySelector('.navbar .container .buttons')
let lines = document.querySelectorAll('.navbar .openMenuButton div')

openMenuButton.onclick = () => {
  links.classList.toggle('hide-menu')
  buttons.classList.toggle('hide-menu')
  openMenuButton.classList.toggle('hideMenuButton')
}
