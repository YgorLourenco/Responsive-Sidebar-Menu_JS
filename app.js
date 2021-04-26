const hamburgerBtn = document.querySelector('.toggle-btn')
const mainHeader = document.querySelector('.main-header')
const overlay = document.querySelector('.overlay')

// Ao clicar vai adicionar as regras CSS em cada uma das classes armazenadas
hamburgerBtn.addEventListener('click', function(){
    hamburgerBtn.classList.toggle('open')
    overlay.classList.toggle('open')
    mainHeader.classList.toggle('open')
})