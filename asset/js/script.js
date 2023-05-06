let drag = document.getElementById('drag')
let posX = 0
let posY = 0
let mouseX = 0
let mouseY = 0
drag.addEventListener('mousedown' , mouseDown , false)
window.addEventListener('mouseup' , mouseUp , false)

function mouseDown (e){
    e.preventDefault()
    posX =  e.clientX - drag.offsetLeft
    posY =  e.clientY - drag.offsetTop
    window.addEventListener('mousemove' , mouseElement , false)
}
function mouseUp (){
    window.removeEventListener('mousemove' , mouseElement , false)
}
function mouseElement (e){
    mouseX = e.clientX - posX
    mouseY = e.clientY - posY
    drag.style.left= mouseX + "px"
    drag.style.top= mouseY + "px"
}
