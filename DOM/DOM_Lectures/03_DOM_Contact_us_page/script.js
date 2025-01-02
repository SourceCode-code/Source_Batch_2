// logical script

document.addEventListener("DOMContentLoaded",()=>{
    const contactForm=document.getElementById('contactform')
    const message = document.getElementById('message')

contactForm.addEventListener("submit",(event)=>{
    event.preventDefault() // prevents the page form reloading 
    message.classList.remove("hidden")
    contactForm.reset()
})

const resetBUtton = document.getElementById("resetbtn");
resetBUtton.addEventListener("click",()=>{
    message.classList.add("hidden")
})















})