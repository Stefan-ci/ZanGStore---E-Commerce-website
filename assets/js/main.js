/*===== ONSCROLL EVENT (scrollToTop button) =====*/
const scrollToTop = document.getElementById('scrollToTop')
scrollToTop.style.display = 'none'

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId)

	if (toggle && nav){
		toggle.addEventListener('click', ()=>{
			nav.classList.toggle('show')
		})
	}
}

showMenu('nav-toggle','nav-menu')




/*===== REMOVE MENU =====*/
// Clicking on a nav item (link), expanded menu will be removed (disapear)
const navLink = document.querySelectorAll('.nav__link'),
	navMenu = document.getElementById('nav-menu')
function linkAction(){
	navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
	const scrollY = window.pageYOffset
	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50
		sectionId = current.getAttribute('id')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
		}
		else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
		}
	})
}





/*===== CHANGE COLOR HEADER =====*/
window.onscroll = ()=>{
	const nav = document.getElementById('header')

	if (this.scrollY >= 200){
		nav.classList.add('scroll-header')
		scrollToTop.style.display = 'block'
		scrollToTop.addEventListener('click', () =>{
			window.scrollTo(0, 0)
		})
	}
	else{
		nav.classList.remove('scroll-header')
	}
}
