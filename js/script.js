$(document).ready(function () {

    //filters collapse menu

    if (document.documentElement.clientWidth < 768){
        $('.projects-directions-filter').slideUp()

        $('.projects-directions__title').click(function(e){
            $('.projects-directions-filter').slideToggle(200)
            $(this).toggleClass('_active-directions')
        })
    }

    $('.projects-directions-filter__item').click(function(e){
        $(this).addClass('_active-diresctions-item')
        $('.projects-directions-filter__item').not($(this)).removeClass('_active-diresctions-item')
        
        if (document.documentElement.clientWidth < 768){
            $('.projects-directions-filter').slideUp()
            $('.projects-directions__title').removeClass('_active-directions')
        }

    })

    //project-filter
    $('.project-filter__item').click(function(e){
        $(this).toggleClass('_active-filter')
        $('.project-filter__item').not($(this)).removeClass('_active-filter')
    })

    //toggle sections
    activateToggleSection('.about-project')
    activateToggleSection('.parthner-page')
    activateToggleSection('.parthner-page-help')

    function activateToggleSection(section){
        $(`${section} .toggle-section-content__item`).not($(`${section} .toggle-section-content__item._active-page`)).fadeOut(200)

        $(`${section} .toggle-section-head__item`).click(function(event){
            //console.log(1, this);
            //const menuLink = event.target;
            const goto = $(this).attr('data-toggle-page');
        // console.log(2, $(goto));
        if(goto && $(goto)){
                $(this).addClass("_active-page");
                $(`${section} ${goto}`).addClass("_active-page");

                $(`${section} .toggle-section-head__item`).not($(this)).removeClass("_active-page");
                $(`${section} .toggle-section-content__item`).not($(goto)).removeClass("_active-page");
                $(`${section} .toggle-section-content__item`).not($(goto)).fadeOut(0)
            
                $(goto).fadeIn(400);
            }

            event.preventDefault();
        })
    }
    

    //swipers
    let directionsSwiper = new Swiper('.swiper.swiper-directions', {
        slidesPerView: 'auto',
        spaceBetween: 24,
        grabCursor: true,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination-directions',
            clickable: true
        },
        navigation: {
            nextEl: '.directions__btns__container .swiper-button-next',
            prevEl: '.directions__btns__container .swiper-button-prev',
        },
        breakpoints: {
            768:{
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 80,
                autoHeight: false,
            },
        }
    })

    let reviewsAboutSwiper = new Swiper('.swiper.swiper-reviews__about', {
        slidesPerView: 'auto',
        spaceBetween: 24,
        grabCursor: true,
        autoHeight: false,
        pagination: {
            el: '.swiper-reviews__about .swiper-pagination-reviews',
            clickable: true
        },
        navigation: {
            nextEl: '.reviews__about__container .reviews__btns__container .swiper-button-next',
            prevEl: '.reviews__about__container .reviews__btns__container .swiper-button-prev',
        },
        breakpoints: {
            768:{
                slidesPerView: 2,
                autoHeight: false,
                centeredSlides: false,
                spaceBetween: 80,
                autoHeight: false,
            },
        }
    })

    let reviewsAboutBlackSwiper = new Swiper('.swiper.swiper-reviews__about.swiper-reviews__about__black', {
        slidesPerView: 'auto',
        spaceBetween: 24,
        grabCursor: true,
        autoHeight: false,
        pagination: {
            el: '.reviews__black .swiper-reviews__about .swiper-pagination-reviews',
            clickable: true
        },
        navigation: {
            nextEl: '.reviews__black .reviews__about__container .reviews__btns__container .swiper-button-next',
            prevEl: 'reviews__black .reviews__about__container .reviews__btns__container .swiper-button-prev',
        },
        breakpoints: {
            768:{
                slidesPerView: 2,
                autoHeight: false,
                centeredSlides: false,
                spaceBetween: 80,
                autoHeight: false,
            },
        }
    })

    let nodeProjectsParthnerPageSwiper = document.querySelector('.swiper.swiper-projects.swiper-specprojects__prathner__page')
    let projectsParthnerPageSwiper = undefined
    if (document.documentElement.clientWidth < 768) {
        projectsParthnerPageSwiper = new Swiper(nodeProjectsParthnerPageSwiper, {
            slidesPerView: 'auto',
            spaceBetween: 24,
            grabCursor: true,
            autoHeight: true,
            pagination: {
                el: '.swiper-pagination-specprojects',
                clickable: true
            },
        })
    } else if(projectsParthnerPageSwiper) {
        projectsParthnerPageSwiper.destroy(true, true);
        projectsParthnerPageSwiper = null;
    }

    
});