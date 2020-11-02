window.onload = function () {
    var loader = {
      init: function(){
          this.loading();
      },
      loading:function(){
          const loader = document.querySelector('.loader');
          function load(){
              loader.classList.add('hide');
          }
          setTimeout(load,2500);
      }
}
loader.init();

var menu = {
    init:function(){
        this.scrollMenu();
        this.submenu();
        this.dropdown();
        this.searchButton();
        this.userButton();
        this.cartButton();
        this.menuButton();
    },
    scrollMenu:function(){
        var scroll = document.querySelector('.header');
        console.log(scroll);
        window.onscroll = function(){scrollFunction()};
        function scrollFunction(){
            if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
                scroll.classList.add("showMenu");
            }else{
                scroll.classList.remove("showMenu");
            }
        }
    },
    submenu:function(){
        var button = document.querySelector(".header__wrapper-bars");
        var subMenu = document.querySelector(".menuMobile__wrapper");
        button.addEventListener("click", () =>{
            subMenu.classList.toggle("open_submenu");
        });
    },
    dropdown:function(){
        $('.menuMobile__wrapper .menuMobile__wrapper-items>.menuMobile__item').click(function(){ 
            if ($(this).hasClass('open_submenu')) {
                $(this).children('.menuMobile__submenu').slideUp(500);
                $(this).removeClass('open_submenu');
            }else{
                $('.menuMobile__submenu ').slideUp();
                $(this).children('.menuMobile__submenu').slideDown(500);
                $('.menuMobile__wrapper-items>.menuMobile__item').removeClass('open_submenu');
                $(this).addClass('open_submenu');
            }
        });
    },
    searchButton:function(){
        var button = document.querySelector(".wrapper-icon__search .fa-search");
        var search = document.querySelector(".search");
        var cart = document.querySelector(".cart");
        var login = document.querySelector(".login");
        button.addEventListener("click", () =>{
            search.classList.add("open");
            login.classList.remove("open");
            cart.classList.remove("open");
        })
        var cancle = document.querySelector(".search .fa-times");
        cancle.addEventListener("click", ()=>{
            search.classList.remove("open");
        })
    },
    userButton:function(){
        var button = document.querySelector(".wrapper-icon__user .fa-user");
        var login = document.querySelector(".login");
        var cart = document.querySelector(".cart");
        button.addEventListener("click", () =>{
            login.classList.toggle("open");
            cart.classList.remove("open");
        })
        
    },
    cartButton:function(){
        var button = document.querySelector(".wrapper-icon__cart .fa-cart-plus");
        var cart = document.querySelector(".cart");
        var login = document.querySelector(".login");
        button.addEventListener("click", () =>{
            cart.classList.toggle("open");
            login.classList.remove("open");
        })
    },
    menuButton:function(){
        var button = document.querySelector(".wrapper-icon__bars .fa-bars");
        var contact = document.querySelector(".header__top");
        var cart = document.querySelector(".cart");
        var login = document.querySelector(".login");
        button.addEventListener("click", () =>{
            contact.classList.toggle("open");
            cart.classList.remove("open");
            login.classList.remove("open");
        })
    }
}
menu.init();

var banner = {
    init:function(){
        this.owlCarousel();
    },
    owlCarousel:function(){
        $(document).ready(function() {
            $("#news-slider").owlCarousel({
                loop: false,
                margin: 30,
                autoplay: true,
                autoplayTimeout : 3000,
                autoplayHoverPause: true,
                responsive:{
			        0:{
			            items:1
                    },
                    600:{
                        items:2
                    },
			        768:{
			            items:3
			        },
			        992:{
			        	items:4
			        },
			        1200:{
			            items:4
			        }
			    }
            });
        });
    }
}
banner.init();

var partner = {
    init:function(){
        this.owlCarousel();
    },
    owlCarousel:function(){
        $(document).ready(function() {
            $("#owl-partner").owlCarousel({
                loop: false,
                margin: 30,
                autoplay: true,
                autoplayTimeout : 5000,
                autoplayHoverPause: true,
                responsive:{
			        0:{
			            items:2
			        },
			        768:{
			            items:3
			        },
			        992:{
			        	items:4
			        },
			        1200:{
			            items:5
			        }
			    }
            });
        });
    }
}
partner.init();

var product = {
    init:function(){
        this.isotopeFilter();
        this.active_filter();
    },
    isotopeFilter:function(){
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });
        
        $('.filter-button-group li').on("click",function(){
            var value = $(this).attr('data-filter');
            $grid.isotope({
                filter: value
            });
        });
    },
    active_filter:function(){
        $(document).on("click",".product__type li",function(){
            if (!$(this).hasClass("active_filter")) {
              $("li.active_filter").removeClass("active_filter");
              $(this).addClass("active_filter");
            }
        });
    },
}
product.init();

var instagram = {
    init:function(){
        this.owlCarousel();
    },
    owlCarousel:function(){
            $(document).ready(function() {
                $("#owl-instagram").owlCarousel({
                    loop: false,
                    margin: 20,
                    autoplay: true,
                    autoplayTimeout : 5000,
                    autoplayHoverPause: true,
                    responsive:{
                    0:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    992:{
                        items:4
                    },
                    1200:{
                        items:5
                    }
                }
            });
        });
    }
}
instagram.init();
}