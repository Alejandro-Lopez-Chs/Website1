loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')

betn = document.querySelector('.betn')
nav = document.querySelector('.nav')

betn.addEventListener('click', () => {
    nav.classList.toggle('active')
    betn.classList.toggle('active')
})

load = 0

int = setInterval(blurring, 35)


function blurring() {
    load = load + 1

    if (load > 99){
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = 1 - load/100

    bg.style.filter = `blur(${30 - (load/100)*30}px)`
}