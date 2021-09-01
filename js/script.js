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
   // const modalTimerId = setTimeout(showModal, 5000);
   
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


   // Cards using Class constructor
   class CardItem {
      constructor(img_scr, img_alt, title, descr, price, parentSelector) {
         this.img_scr = img_scr;
         this.img_alt = img_alt;
         this.title = title;
         this.descr = descr;

         this.price = price;
         this.transfer = 27;
         this.changeToUAH();

         this.parent = document.querySelector(parentSelector);
      }

      // from US to UAH
      changeToUAH() {
         this.price = this.price * this.transfer;
      }

      // add a ready card to the page
      render() {
         const element = document.createElement('div');
         element.classList.add('menu__item');
         element.innerHTML = `
            <img src=${this.img_scr} alt=${this.img_alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                  <div class="menu__item-cost">Цена:</div>
                  <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
         `;
         this.parent.append(element);
         console.log(element)
      }
   }

   // cards info
   new CardItem(
      'img/tabs/vegy.jpg',
      'fitness',
      'Меню "Фитнес"',
      'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      '3',
      '.menu .container'
   ).render();

   new CardItem(
      'img/tabs/elite.jpg',
      'premium',
      'Меню "Премиум"',
      'В меню "Премиум" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
      '10',
      '.menu .container'
   ).render();

   new CardItem(
      'img/tabs/post.jpg',
      'chef',
      'Меню "Шеф"',
      'Меню "Шеф" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
      '14',
      '.menu .container'
   ).render();
});