// Menu Show Y hidden
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

// remove menu mobile
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n =>n.addEventListener('click', linkAction))

// COLOR CHANGE
function changeHue(newHue) {
    document.documentElement.style.setProperty('--hue-color', newHue);
  }

// arrow function
const skillsContent = document.getElementsByClassName('skills_content'),
        skillsHeader = document.querySelectorAll('.skills_header')
  
function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(let i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close';
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open';
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills);
})

// ==============Qualification =============

const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('quali_active')
        })
        target.classList.add('quali_active')

        tabs.forEach(tab =>{
            tab.classList.remove('quali_active')
        })
        tab.classList.add('quali_active')
    })
})