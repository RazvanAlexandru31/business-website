const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')
const navlist = document.querySelector('.navlist')
const line1 = document.querySelector('.line-1')
const line2 = document.querySelector('.line-2')
const line3 = document.querySelector('.line-3')

menu.addEventListener('click', () => {
    navbar.classList.toggle('change')
    navlist.classList.toggle('change')
    line1.classList.toggle('change')
    line2.classList.toggle('change')
    line3.classList.toggle('change')
})