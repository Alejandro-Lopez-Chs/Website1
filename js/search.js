btn = document.querySelector('.btn')
search = document.querySelector('.search')

betn = document.querySelector('.betn')
nav = document.querySelector('.nav')

betn.addEventListener('click', () => {
    nav.classList.toggle('active')
    betn.classList.toggle('active')
})

btn.addEventListener('click', () => {
    search.classList.toggle('active')
})