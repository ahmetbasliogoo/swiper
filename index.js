var swiper = new Swiper(".mySwiper", {
    preloadImages: false,
    lazy: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    
  });

  //jquery.lazy ile yaptığım deneme çalışmadı ( custom l)
/* $(document).ready(function(){
    $('.lazy').Lazy({
        
        asyncLoader: function(element) {
            console.log(element);
            setTimeout(function() {
                console.log('flksk');
                element.load()
            }, 5000);
        },
    }
    );
    console.log($('.lazy'));


}) */