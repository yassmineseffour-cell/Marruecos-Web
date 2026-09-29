//FADE
const fadeEL = document.querySelector('.fade');

let hasScrolled = false;
window.addEventListener('scroll' , () => {
    if(!hasScrolled) {
        fadeEL.style.opacity = '0.5';
        hasScrolled = true;
    }
   
});

const filtersEL = document.querySelector('.filters');
const projectEL1 = document.querySelector('.project:nth-child(1)');
const projectEL2 = document.querySelector('.project:nth-child(2)');
const projectEL3 = document.querySelector('.project:nth-child(3)');
const projectEL4 = document.querySelector('.project:nth-child(4)');
const projectEL5 = document.querySelector('.project:nth-child(5)');
const projectEL6 = document.querySelector('.project:nth-child(6)');
const htmlEL = document.querySelector('html');

filtersEL.addEventListener('click', e =>{
   fadeEL.style.opacity = '0';

   document.querySelector('.filter-btn--active').classList.remove('filter-btn--active');
   e.target.classList.add('filter-btn--active');

   htmlEL.style.setProperty(' --default-opacity', '0.4');
   htmlEL.style.setProperty(' --hover-opacity', '0.3');

   const filterText = e.target.textContent; 

   if(filterText === 'All') {
    projectEL1.style.opacity ='1';
    projectEL1.style.transform ='scale(1)';

    projectEL2.style.opacity ='1';
    projectEL2.style.transform ='scale(1)';

    projectEL3.style.opacity ='1';
    projectEL3.style.transform ='scale(1)';

    projectEL4.style.opacity ='1';
    projectEL4.style.transform ='scale(1)';

    projectEL5.style.opacity ='1';
    projectEL5.style.transform ='scale(1)';

    projectEL6.style.opacity ='1';
    projectEL6.style.transform ='scale(1)';

   } else if(filterText === 'Front end'){
      projectEL1.style.opacity ='0';
      projectEL1.style.transform ='scale(0)';

      projectEL2.style.opacity ='0';
      projectEL2.style.transform ='scale(0)';

      projectEL5.style.opacity ='0';
      projectEL5.style.transform ='scale(0)';

      projectEL6.style.opacity ='0';
      projectEL6.style.transform ='scale(0)';


      projectEL3.style.transform ='translateX(-650px)';
      projectEL3.style.opacity ='1';
      projectEL4.style.transform ='translate( 325px, -502px)';
      projectEL4.style.opacity ='1';


   } else if(filterText === 'Back end'){
    projectEL1.style.opacity ='0';
    projectEL1.style.transform ='scale(0)';

    projectEL2.style.opacity ='0';
    projectEL2.style.transform ='scale(0)';

    projectEL3.style.opacity ='0';
    projectEL3.style.transform ='scale(0)';

    projectEL4.style.opacity ='0';
    projectEL4.style.transform ='scale(0)';


    projectEL5.style.transform ='translate(-325px, -359px)';
    projectEL5.style.opacity ='1';
    projectEL6.style.transform ='translate( -325px, -502px)';
    projectEL6.style.opacity ='1';

   }else if(filterText === 'Full stack'){
    projectEL3.style.opacity ='0';
    projectEL3.style.transform ='scale(0)';

    projectEL4.style.opacity ='0';
    projectEL4.style.transform ='scale(0)';

    projectEL5.style.opacity ='0';
    projectEL5.style.transform ='scale(0)';

    projectEL6.style.opacity ='0';
    projectEL6.style.transform ='scale(0)';

    projectEL1.style.opacity ='1';
    projectEL1.style.transform ='scale(1)';

    projectEL2.style.opacity ='1';
    projectEL2.style.transform ='scale(1)';


   }

});