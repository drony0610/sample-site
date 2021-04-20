

const contactBtn = document.querySelector('.contactHeaderBtn')
const contactContainer = document.querySelector('.contactContainer')
const leftNavUl = document.querySelector('.leftNavItemsContainer')
const leftNavItem = document.querySelector('.leftNavItem')
// let leftNavRadio = document.querySelector('.leftItem')

contactContainer.addEventListener('mouseover',(e)=>{
    contactBtn.classList.add("contactBtn--anim")
    
    
})
contactContainer.addEventListener('mouseout',(e)=>{
    contactBtn.classList.remove("contactBtn--anim")
    
})

let pageYOffset = window.pageYOffset
window.onscroll = function(){
    let currentPos = window.pageYOffset
    if(pageYOffset > currentPos){
        document.querySelector(".menu").style.top = "0";
    }else{
        document.querySelector(".menu").style.top = "-80px";
    }

    pageYOffset = currentPos
}


   
 

// structure page script
const structureBtn = document.querySelectorAll(".structureBtn")
const structureElement = document.querySelectorAll(".structureTitle")
const structureDesc = document.querySelectorAll(".structureDesc")
const strText = document.querySelectorAll(".strText")
structureElement.forEach((e,j)=>{
    e.addEventListener('click',(event)=>{
        let element = structureBtn
        structureDesc.forEach((e,k)=>{
            e.classList.remove('show')
            if(structureBtn[k].classList.contains("structureBtn-rotated")){
                structureBtn[k].classList.remove("structureBtn-rotated")
            }
            
        })
        if(element[j].classList.contains("structureBtn-rotated")){
            element[j].classList.remove("structureBtn-rotated")

        }else{
            element[j].classList.add("structureBtn-rotated")
        }
        
        if(element[j].classList.contains("structureBtn-rotated")){
                structureDesc[j].classList.add("show")
        }else{
            structureDesc[j].classList.remove("show")
        }
    })
    
})




//advantages page script

const advantagesNav = document.querySelectorAll('.advantagesItem')
const advantagesTextContainer = document.querySelector('.advantagesText')
let advantagesBgToggler = document.querySelector('.animation')
advantagesBgToggler.style.width = advantagesNav[0].offsetWidth + "px"
const advantagesTextContent = document.querySelectorAll('.advantagesItemText')
const advantagesDescriprionText = []
advantagesTextContent.forEach((e)=>{
    let obj = {
        text:e.innerHTML
    }
   advantagesDescriprionText.push(obj)
})
let currentChoosenAdv 
const leftCorner = document.querySelector('.animationLeft')
const rightCorner = document.querySelector('.animationRight')
advantagesTextContainer.innerHTML = advantagesDescriprionText[0].text
advantagesNav[0].classList.add('selectedText')

advantagesNav.forEach((e,j)=>{
    e.addEventListener('click',(event)=>{
        currentChoosenAdv  = j
        advantagesBgToggler.style.width = event.target.offsetWidth + "px"
        advantagesBgToggler.style.left = event.target.offsetLeft + "px"
        advantagesNav.forEach((e)=>{if(e.classList.contains('selectedText')){e.classList.remove('selectedText')}})
        event.target.classList.add('selectedText')
        advantagesTextContainer.innerHTML = advantagesDescriprionText[j].text
    })
})

window.addEventListener('resize',()=>{
  
        if(window.innerWidth > 950){
            if(currentChoosenAdv == undefined){
                currentChoosenAdv = 0
            }
            advantagesBgToggler.style.width = advantagesNav[currentChoosenAdv].offsetWidth + "px"
            advantagesBgToggler.style.left = advantagesNav[currentChoosenAdv].offsetLeft + "px"
        }
})



//faq page script
const faqBtn = document.querySelectorAll(".faqBtn")
const faqDesc = document.querySelectorAll(".faqItem-text")
const faqItem = document.querySelectorAll('.faqItem-title')
faqItem .forEach((e,j)=>{
    e.addEventListener('click',(event)=>{
        
       
        let element = faqBtn
       
        if(element[j].classList.contains("faqBtn-rotated")){
            element[j].classList.remove("faqBtn-rotated")

        }else{
            element[j].classList.add("faqBtn-rotated")
        }
        
        if(element[j].classList.contains("faqBtn-rotated")){
            
                faqDesc[j].classList.add("showFaq")
           
            
        }else{
                faqDesc[j].classList.remove("showFaq")
           
        }
    })
    
})

//open contact form

const headerBtn = document.querySelector('.headerBtn')
const formBtn = document.querySelector('.contactContainer')
const formBody = document.querySelector('.contactForm')
const formBackBtn = document.querySelector('.contactFormBack')
const siteBody = document.querySelector('.body')
const arr = [headerBtn,formBtn]
arr.forEach((e)=>{
    e.addEventListener('click',(event)=>{
        console.log('a')
        formBody.classList.add('openForm')
        formBody.classList.remove('closeForm')
        siteBody.style.overflowY = "hidden"
    })
})
formBackBtn.addEventListener('click',()=>{
    formBody.classList.remove('openForm')
    formBody.classList.add('closeForm')
    siteBody.style.overflowY = "scroll"
})


//Bg

