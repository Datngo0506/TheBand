const buyBtns = document.querySelectorAll('.js-buy')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
const modalPay = document.querySelector('.js-modal-pay')
const thank = document.querySelector('.js-thank')

function showBuyTickets(){
  modal.classList.add('open')
}

function showThank(){
  thank.classList.add('open')
}

function hideBuyTickets(){
  modal.classList.remove('open')
}

for(const buyBtn of buyBtns){
  buyBtn.addEventListener('click', showBuyTickets )
}

modalPay.addEventListener('click', showBuyTickets);


modalClose.addEventListener('click', hideBuyTickets);

modal.addEventListener('click', hideBuyTickets);

modalContainer.addEventListener('click', function(event) {
                                event.stopPropagation();
                                } );

var header = document.getElementById('head-tt')
var mobileMenu = document.getElementById('menu-kick')
var headerHeight = header.clientHeight;
var menuItems = document.querySelectorAll('.nav li a[href*="#"]');


mobileMenu.onclick = function(){
  var isClose = header.clientHeight === headerHeight;
  if(isClose){
    header.style.height = 'auto';
  }
  else{
    header.style.height = null;
  }
}

for(var i=0; i< menuItems.length; i++)
  {
    var menuItem =menuItems[i];
    
    menuItem.onclick = function(){
      var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
      
      if(isParentMenu)
        {
          event.preventDefault();
          
        }
      else
        {
          header.style.height=null;
        }
    }
  }