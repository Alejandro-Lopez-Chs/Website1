toggle =  document.getElementById('toggle')
open = document.getElementById('open')
modal = document.getElementById('modal')
close = document.getElementById('close')

//toggle nav
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

// Show modal
open.addEventListener('click', () => {
    modal.classList.add('show-modal')
})

// Hide modal
close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})

// Hide modal on outside click
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show-modal')
    }
})