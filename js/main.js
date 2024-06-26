const menuBtn = document.querySelector('.menu__btn');
const mobilMenu = document.querySelector('.menu__list-mobile');

if(menuBtn) {
  menuBtn.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('_lock');
    document.body.classList.toggle('_lock');
    menuBtn.classList.toggle('active');
    mobilMenu.classList.toggle('open');
  });
}

const closeMenu = ()=>{
  document.documentElement.classList.remove('_lock');
  document.body.classList.remove('_lock');
  menuBtn.classList.remove('active');
  mobilMenu.classList.remove('open');
};

document.body.addEventListener('click', (e)=>{
  if (
    e.target.closest('.menu__btn') == null &&
    e.target.closest('.menu__list-mobile') != mobilMenu
  ) 
  {closeMenu()}
});

mobilMenu.addEventListener('click', ()=> {
  if(mobilMenu.classList.contains('open')) {
    closeMenu()
  } else {
    document.documentElement.classList.remove('_lock');
    document.body.classList.remove('_lock');
    menuBtn.classList.remove('active');
    mobilMenu.classList.remove('open');
  }
});

/* sliders */
let swiper = new Swiper(".works__slider", {
    slidesPerView: 5,
    spaceBetween: 20,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiperNext",
        prevEl: ".swiperPrev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          centeredSlides: true,
        },
        430:{
          slidesPerView: 1.5,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 5,
        }
      },
  });


  let swiper2 = new Swiper(".rewiev__slider", {
    slidesPerView: 4,
    spaceBetween: 20,

    pagination: {
      el: ".rewiev__swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiperNext",
        prevEl: ".swiperPrev",
      },
            breakpoints: {
        0: {
          slidesPerView: 1.3,
          centeredSlides: true,
        },
        430:{
          slidesPerView: 1.3,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 4,
        }
      },
  });

 /* form */
  const inputs = document.querySelectorAll( '.form__load-file' );
  inputs.forEach.call( inputs, function( input )
  {
    let label	 = document.querySelector('.form__file-name'), 
      labelVal = label.innerHTML;
  
    input.addEventListener( 'change', function( e )
    {
      let fileName = '';
      if( this.files && this.files.length > 1 ) {
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      } else {
        fileName = e.target.value.split( '\\' ).pop();
       /*  fileName = this.files[0].name; */
      }
  
      if( fileName ) {
        label.innerHTML = fileName;
        /* label.value = fileName; */
      }else {
        label.innerHTML = labelVal;
        /* label.value = fileName; */
      }
        
    });
  });


  const langCHange = document.querySelector('.language__menu ');
  const ua = document.querySelector('.ua');
  const ru = document.querySelector('.ru');

ua.addEventListener('change', changeURLLanguage);
function changeURLLanguage(e) { 
  e.preEventDefult();
  location.href = window.location.pathname + "#" + ua;
  /* location.reload() */
}