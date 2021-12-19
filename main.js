var burger = document.querySelector('.burger');
var container = document.querySelector('.container');
var screens = document.querySelectorAll('.screen');


burger.addEventListener('click', () => {
    container.classList.toggle('active')
}) 


function replaceBg(id) {
    var bg = document.getElementById(id) 
    screens.forEach( screen => {
        screen.style.display = 'none'
    })
    bg.style.display = 'block'
}

function changeBg() {
    var links = document.querySelectorAll('.link')
    links.forEach ((link, index) => {
        link.addEventListener('mouseenter', e => {
            e.preventDefault()
            replaceBg(e.target.dataset.link)

        })
        link.addEventListener('click', e => {
            e.preventDefault()
            container.classList.toggle('active')
        })
    })

screens.forEach(screen => {
    screen.style.display = 'none'
    screens[0].style.display = 'block'
})
}
changeBg()