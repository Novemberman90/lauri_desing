const menuBtn = document.querySelector('.menu__btn');
const mobilMenu = document.querySelector('.menu__list-mobile');

menuBtn.addEventListener('click', ()=>{
  menuBtn.classList.toggle('active');
  mobilMenu.classList.toggle('open');
});

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
        },
        430:{
          centeredSlides: true,
          slidesPerView: 1.7,
            spaceBetween: 20,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 20,
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
        1520: {
          slidesPerView: 4,
          },
          1460: {
            slidesPerView: 4,
    }
      },
/*       breakpoints: {
        640: {
            slidesPerView: 3,
          },
        480: {
          slidesPerView: 2,
        },
        360: {
            slidesPerView: 1,
          },
      }, */
  });

 
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