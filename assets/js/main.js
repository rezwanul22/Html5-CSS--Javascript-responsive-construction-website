/*=============== SHOW MENU ===============*/
 
const navmenu = document.getElementById('nav-menu'),
      navtoggle = document.getElementById('nav-toggle'),
      navclose = document.getElementById('nav-close')


/*menu show */

if(navtoggle){
    navtoggle.addEventListener('click', ()=> {
        navmenu.classList.add('show-menu')

    })
}

/* menu hidden */
if(navclose){
    navclose.addEventListener('click', ()=> {
        navmenu.classList.remove('show-menu')

    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById ('nav-menu')
     navMenu.classList.remove('show-menu')
}

navLink.forEach (n=> n.addEventListener ('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/

const bgHeader = () => {
    const header = document.getElementById('header');
    
    if (window.scrollY >= 50) {
      header.classList.add('bg-header');
    } else {
      header.classList.remove('bg-header');
    }
  };
  
  window.addEventListener('scroll', bgHeader);
  bgHeader();


/*=============== SWIPER SERVICES ===============*/ 
const swiperServices = new Swiper('.services__swiper', {
   
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesperView: 'auto',
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
  
    if (window.scrollY >= 350) {
      scrollUp.classList.add('show-scroll');
    } else {
      scrollUp.classList.remove('show-scroll');
    }
  };
  
  window.addEventListener('scroll', scrollUp);
  scrollUp();



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current => {
        constsectionHeight = current.offsetHeight,
        sectionTop = currentoffsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('nav__menu a[herf*=' +sectionId + ']')
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')

        }
        else{
            sectionsClass.classList.remove('action-link')
        }

    })
}
 window.addEventListener('scroll',scrollAction)

/*=============== SCROLL REVEAL ANIMATION ===============*/

