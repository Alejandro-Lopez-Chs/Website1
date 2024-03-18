h3ader = document.querySelectorAll('h3')
btn = document.querySelector('.btn')
nav = document.querySelector('.nav')

btn.addEventListener('click', () => {
    nav.classList.toggle('active')
    btn.classList.toggle('active')
})

h3ader.forEach(h3 => {
    h3.addEventListener('mouseover', () => {
        removeActiveClasses()
        h3.classList.add('active')
    h3.addEventListener('mouseout', (removeActiveClasses))

    })
})

if (h3.active = true)
{

}
function addActiveClasses(){
    h3ader.forEach(h3 => {})
}
function removeActiveClasses(){
    h3ader.forEach(h3 => {
        h3.classList.remove('active')
    })
}
