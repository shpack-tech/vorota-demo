// while(document.readyState === 'loading'){
//     if (document.readyState === 'loading'){
//         console.log(document.readyState);
        
//     }
    
// }

$(document).ready(function(){
  


    function secureBackgroundSize() {
        $('.videoBackground, .videoBackground iframe, .video-content:before, .video-content').css(
            {
                'height': `${screen.width / 1.777777}`
            }
        )
        console.log( $('.videoBackground').height());

        $('.promo_link').css(
            {
                'height': `${screen.width / 3.2}`
            }
        )
        if(screen.width <= 768){
      
        }
        // $('.phone_mockup_image img').css(
        //     {
        //         'height': 
        //     }
        // )
        // $('.form_consultation').css(
        //     {
        //         'height': `${screen.width / 2.33}`
        //     }
        // )
    };
    secureBackgroundSize()
    // secureBackgroundSize()
    

    $(window).resize(secureBackgroundSize);


    // Гаражные ворота

    function showLinksGates(){
        $(this).find('.grid_element_title').css({'top':'-12px'});

        $(this).find('.btn').stop(true).slideDown('fast');
    }
    function hideLinksGates(){
        $(this).find('.btn').stop(true).slideUp('fast');
    }


    function showLinksHeader(){
        $(this).find('.dropper').stop(true).slideDown('fast');
        // $(this).find('.dropper').stop();
    }
    function hideLinksHeader(){
        $(this).find('.dropper').stop(true).slideUp('fast');
        // $(this).find('.dropper').stop();
       
    }
 
    $('.grid_element').on('mouseenter', showLinksGates);
    $('.grid_element').on('mouseleave', hideLinksGates);
    $('.drops').on('mouseenter', showLinksHeader);
    $('.drops').on('mouseleave', hideLinksHeader);
       


    $('.project_slide').each(function(){
        var swiper = new Swiper( $(this)[0], {
            direction: 'horizontal',
            loop: true,
            spaceBetween: 0,
            navigation: {
                nextEl: '.slider_next',
                prevEl: '.slider_prev',
              },
              pagination: {
                el: '.project_pagination',
                clickable: true,
              }
    
        }); 
    })
    // for(let i = 0; i < $('.project_single').length; i++){
    //     const  = new Swiper('.pj_slider1', {
    //         direction: 'horizontal',
    //         loop: true,
    //         spaceBetween: 0,
    //         navigation: {
    //             nextEl: '.project_next1',
    //             prevEl: '.project_prev1',
    //           }
    
    //     });
    // }
    // слайды в проектах
    // const swiper1 = new Swiper('.pj_slider1', {
    //     direction: 'horizontal',
    //     loop: true,
    //     spaceBetween: 0,
    //     navigation: {
    //         nextEl: '.project_next1',
    //         prevEl: '.project_prev1',
    //       }

    // });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

        $('.videoBackground').html(
            '<img src="images/mobile_promo.jpg" style="width: 100%">'
        )
        
        $('.grid_element').each(function(){
            $(this).find('.grid_element_title').css({'top':'-12px'});
            $(this).find('.btn').slideDown('fast');
        })
        $('.grid_element').off('mouseenter', showLinksGates);
        $('.grid_element').off('mouseleave', hideLinksGates);

        $('.head_content').css({'display':"none"});
        $('.head_content_mobile').css({'display':"flex"});
        
    } 


    



    $('.head_content_mobile img').on('touch click', function(){
        $('.secret_menu').animate({width:'toggle'},350);
        $('.secret_overlay').fadeIn('fast');
        $('body').css({'overflow':'hidden'})
    })
    $('.closer').on('touch click', function(){
        $('.secret_menu').animate({width:'toggle'},350);
        $('.secret_overlay').fadeOut('fast');
        $('body').css({'overflow':'auto'})
        

    })

});