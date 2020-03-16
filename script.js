var btn_signIN = document.querySelector('#sign-in')
var btn_signUP = document.querySelector('#sign-up')

var body = document.querySelector('body')

btn_signIN.addEventListener('click',()=>{
    body.className = 'sign-in-js'
})

btn_signUP.addEventListener('click',()=>{
    body.className = 'sign-up-js'
})