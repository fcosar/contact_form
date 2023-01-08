const nameLabel=document.getElementById("nameLabel")
const nameInput=document.getElementById("name")

const surnameLabel=document.getElementById("surnameLabel")
const surname=document.getElementById("surname")

const emailLabel=document.getElementById("emailLabel")
const email=document.getElementById("email")

const messageLabel=document.getElementById("messageLabel")
const message=document.getElementById("message")

const contactForm=document.getElementById("contactForm")
const emailError=document.getElementById("emailError")
const messageError=document.getElementById("messageError")

nameInput.addEventListener('focusin',()=>{
    nameLabel.style.color='#000'
})
nameInput.addEventListener('focusout',()=>{
    nameLabel.style.color='#777'
})
surname.addEventListener('focusin',()=>{
    surnameLabel.style.color='#000'
})
surname.addEventListener('focusout',()=>{
    surnameLabel.style.color='#777'
})
email.addEventListener('focusin',()=>{
    emailLabel.style.color='#000'
})
email.addEventListener('focusout',()=>{
    emailLabel.style.color='#777'
    emailError.innerText=""
})
message.addEventListener('focusin',()=>{
    messageLabel.style.color='#000'
})
message.addEventListener('focusout',()=>{
    messageLabel.style.color='#777'
    messageError.innerText=""
})

contactForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    if(email.value === ""){
        emailError.innerText="* Email alanı boş olamaz"
        email.focus()
        return
    }
})

contactForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    if(message.value === ""){
        messageError.innerText="* Email alanı boş olamaz"
        message.focus()
        return
    }
    const newFORM={
        name:nameInput.value,
        surname:surname.value,
        email:email.value,
        message:message.value,
        date:new Date()
    }
    fetch("http://localhost:3004/add-form",{
        method:'post',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
    
        body:JSON.stringify(newFORM)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })
})

