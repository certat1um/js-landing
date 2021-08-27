window.addEventListener('DOMContentLoaded', () => {

   const tabContent = document.querySelectorAll('.tabcontent'),
         tabList = document.querySelector('.tabheader__items'),
         tabs = document.querySelectorAll('.tabheader__item');

   function hideTabsContent() {
      tabs.forEach((item) => {
         item.classList.remove('tabheader__item_active');
      });

      tabContent.forEach((item) => {
         item.classList.add('hide');
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
         // console.dir(target)
         tabs.forEach((item, i) => {
            if (item == target) {
               hideTabsContent();
               addTabContent(i);
            }
         })
      }
   })

   
});