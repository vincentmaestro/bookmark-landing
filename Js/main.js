const rows = document.querySelectorAll('.row')
rows.forEach((faq) =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('show')
        faq.classList.toggle('arroRotate')
    })
})

const navOpen = document.querySelector('.open');
const navClose = document.querySelector('.close');
const navBar = document.querySelector('.nav-right');
const navLinks = document.querySelectorAll('.nav-links a')
const nav = document.querySelector('.nav-toggler')
const navIcons = document.querySelectorAll('.mobile-nav-icons')

navOpen.addEventListener('click', function(){
    navBar.style.top = '0';
    nav.style.display = 'none';
})

navClose.addEventListener('click', function(){
    closeNav()
})

function closeNav(){
    navBar.style.top = '-100%';
    nav.style.display = 'block';
}

navLinks.forEach(function(element){
    element.addEventListener('click', function(){
        navBar.style.top = '-100%';
        nav.style.display = 'block';
    })
})

navIcons.forEach(function(element){
    element.addEventListener('click', function(){
        navBar.style.top = '-100%';
        nav.style.display = 'block';
    })
})

const simpleBookmarking = document.querySelector('.tab-buttons #simple-bookmarking')
const speedySearching = document.querySelector('.tab-buttons #speedy-searching')
const easySharing = document.querySelector('.tab-buttons #easy-sharing')
const simpleBookmarkingBody = document.querySelector('.hero-2 .simple-bookmarking')
const speedySearchingBody = document.querySelector('.hero-2 .speedy-searching')
const easySharingBody = document.querySelector('.hero-2 .easy-sharing')

simpleBookmarking.addEventListener('click', function(){
    simpleBookmarkingBody.style.display = 'flex'
    speedySearchingBody.style.display = 'none'
    easySharingBody.style.display = 'none'
    line1.style = 'border-top: 3px solid var(--SoftRed)'
    line2.style.borderTop = '3px solid #eee'
    line3.style = 'border-top: 3px solid #eee'
})

speedySearching.addEventListener('click', function(){
    simpleBookmarkingBody.style.display = 'none'
    speedySearchingBody.style.display = 'flex'
    easySharingBody.style.display = 'none'
    line1.style = 'border-top: 3px solid #eee'
    line2.style.borderTop = '3px solid var(--SoftRed)'
    line3.style = 'border-top: 3px solid #eee'
})

easySharing.addEventListener('click', function(){
    simpleBookmarkingBody.style.display = 'none'
    speedySearchingBody.style.display = 'none'
    easySharingBody.style.display = 'flex'
    line1.style = 'border-top: 3px solid #eee'
    line2.style.borderTop = '3px solid #eee'
    line3.style = 'border-top: 3px solid var(--SoftRed)'
})

const line1 = document.querySelector('.tab-btn .line')
const line2 = document.querySelector('.tab-btn .line-2')
const line3 = document.querySelector('.tab-btn .line-3')
