
const hamburguerButton = document.querySelector('[data-hamburguer]')
const hamburguerMenu = document.querySelector('[data-menu]')

toggleMenu = () =>{hamburguerMenu.classList.toggle('active-menu')}
hamburguerButton.addEventListener('click',toggleMenu)
