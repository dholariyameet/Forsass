$(document).ready(function(){
    $('#slide').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#client-1').owlCarousel({
        loop:true,
        margin:45,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            425:{
                items:3
            },
            375:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('#testimonial').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
});
$(document).ready(function(){
var owl = $('.owl-carousel');
owl.owlCarousel();
owl.on('changed.owl.carousel', function(event) {
     new WOW().init();
})

wow= new WOW(
{
     boxClass:     'wow',      // default
     animateClass: 'animated', // default
     offset:       0,          // default
     mobile:       true,       // default
     live:         true        // default
}
)
wow.init();
// init Isotope
var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
});