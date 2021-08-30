window.addEventListener('DOMContentLoaded', () => {

   // Tabs
   const tabContent = document.querySelectorAll('.tabcontent'),
         tabList = document.querySelector('.tabheader__items'),
         tabs = document.querySelectorAll('.tabheader__item');

   function hideTabsContent() {
      tabs.forEach((item) => {
         item.classList.remove('tabheader__item_active');
      });

      tabContent.forEach((item) => {
         item.classList.add('hide');
         item.classList.remove('show');
      });
   }

   function addTabContent(i = 0) {
      tabs[i].classList.add('tabheader__item_active');
      tabContent[i].classList.remove('hide');
      tabContent[i].classList.add('show');
   }
   
   hideTabsContent()
   addTabContent()

   tabList.addEventListener('click', (event) => {
      const target = event.target;
      
      if (target && target.classList.contains('tabheader__item')) {
         tabs.forEach((item, i) => {
            if (item == target) {
               hideTabsContent();
               addTabContent(i);
            }
         })
      }
   })


   // Modal
   const modalTrigger = document.querySelectorAll('[data-modal]'),
         modal = document.querySelector('.modal'),
         modalClose = document.querySelector('[data-close]');
   // Modal timer
   const modalTimerId = setTimeout(showModal, 5000);
   
   // show function
   function showModal() {
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
      clearTimeout(modalTimerId);
   }

   // show by click
   modalTrigger.forEach((item) => {
      item.addEventListener('click', showModal);
   });

   // show by scroll
   function showModalByScroll() {
      if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
         showModal();
         window.removeEventListener('scroll', showModalByScroll);
      }
   }

   window.addEventListener('scroll', showModalByScroll);


   // hide function
   function closeModal() {
      modal.classList.remove('show');
      document.body.style.overflow = '';
   }

   // hide by click
   modalClose.addEventListener('click', closeModal);

   // hide by clicking outside modal-content window
   modal.addEventListener('click', (e) => {
      if(e.target === modal) {
         closeModal();
      }
   });

   // hide by clicking Escape keyword
   document.addEventListener('keydown', (e) => {
      if(e.code === 'Escape') {
         closeModal();
      }
   });


});