panels = document.querySelectorAll('.panel')

betn = document.querySelector('.betn')
nav = document.querySelector('.nav')

betn.addEventListener('click', () => {
    nav.classList.toggle('active')
    betn.classList.toggle('active')
})

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')

    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}