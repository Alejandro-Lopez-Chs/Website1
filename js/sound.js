sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong',]

betn = document.querySelector('.betn')
nav = document.querySelector('.nav')

betn.addEventListener('click', () => {
    nav.classList.toggle('active')
    betn.classList.toggle('active')
})

sounds.forEach(sound => {
    btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText=sound
    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
})


function stopSongs() {
    sounds.forEach(sound => {
        song =document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}