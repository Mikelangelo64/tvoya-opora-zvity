$(document).ready(function () {

    //money-form collapse
    if (document.documentElement.clientWidth < 768){
        $('.separate-section-card__project-page__help').slideUp()
        $('.separate-section-card__main__form').slideUp()

        $('.separate-section-card__open__form').click(function(e){
            //console.log($(this).next());
            $(this).slideUp(300)
            $(this).next().slideDown(300)
        })
        $('.separate-section-card__close__form').click(function(e){
            $(this).parent().slideUp(300)
            $(this).parent().prev().slideDown(300)
        })
    }

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
    activateToggleSection('.main-section-form')
    activateToggleSection('.faq')

    //faq
    const faqTitleHeight = $('.toggle-section-head__faq').height()
    //console.log(faqTitleHeight);
    document.documentElement.style.setProperty('--faq-titles', faqTitleHeight+'px')

    $('.accordion-item .accordion-item__text .accordion-item__subtitle').slideUp(0)

    $('.accordion-item').click(function(e){
        //console.log( $(this).children('.accordion-item__text').children('.accordion-item__subtitle'));
        $(this).children('.accordion-item__text').children('.accordion-item__subtitle').slideToggle(300)
        $(this).children('.accordion-item__label').toggleClass('_toggle-accordion')
        
        $('.accordion-item .accordion-item__text .accordion-item__subtitle').not($(this).children('.accordion-item__text').children('.accordion-item__subtitle')).slideUp(300)
        $('.accordion-item .accordion-item__label').not($(this).children('.accordion-item__label')).removeClass('_toggle-accordion')
    })

    //end faq


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
    let mainBannerSwiper = new Swiper('.swiper.swiper-main-slider', {
        slidesPerView: 1,
        spaceBetween: 24,
        grabCursor: true,
        // autoHeight: true,
        pagination: {
            el: '.swiper-pagination-main',
            clickable: true
        },
        // navigation: {
        //     nextEl: '.directions__btns__container .swiper-button-next',
        //     prevEl: '.directions__btns__container .swiper-button-prev',
        // },
        // breakpoints: {
        //     768:{
        //         slidesPerView: 1,
        //         centeredSlides: false,
        //         spaceBetween: 80,
        //         autoHeight: false,
        //     },
        // }
    })

    let nodetopProjectSwiper = document.querySelector('.swiper.swiper-top-projects')
    
    let topProjectSwiper = undefined

    if (document.documentElement.clientWidth < 768) {
        topProjectSwiper = new Swiper(nodetopProjectSwiper, {
            slidesPerView: 'auto',
            spaceBetween: 24,

            
            pagination: {
                el: '.swiper-pagination-top-projects',
                clickable: true
            },
        });
    } else {
        topProjectSwiper = new Swiper(nodetopProjectSwiper, {
            slidesPerView: '1',
            spaceBetween: 24,
            navigation: {
                nextEl: '.swiper-top-projects .top-projects__btns__container .swiper-button-next',
                prevEl: '.swiper-top-projects .top-projects__btns__container .swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination-top-projects',
                clickable: true
            },
        });
    }

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

    let reviewsMainSwiper = new Swiper('.swiper.swiper-reviews__main.swiper-reviews__about__white', {
        slidesPerView: 'auto',
        spaceBetween: 24,
        grabCursor: true,
        autoHeight: false,
        pagination: {
            el: '.swiper-reviews__about .swiper-pagination-reviews',
            clickable: true
        },
        navigation: {
            nextEl: '.reviews__main__container .reviews__white__btns__container .swiper-button-next',
            prevEl: '.reviews__main__container .reviews__white__btns__container .swiper-button-prev',
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

    let reviewsAboutSwiper = new Swiper('.swiper.swiper-reviews__about.swiper-reviews__about__white', {
        slidesPerView: 'auto',
        spaceBetween: 24,
        grabCursor: true,
        autoHeight: false,
        pagination: {
            el: '.swiper-reviews__about .swiper-pagination-reviews',
            clickable: true
        },
        navigation: {
            nextEl: '.reviews__white .reviews__white__btns__container .swiper-button-next',
            prevEl: '.reviews__white .reviews__white__btns__container .swiper-button-prev',
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
            nextEl: '.reviews__black.reviews__about__container .reviews__black__btns__container .swiper-button-next',
            prevEl: '.reviews__black.reviews__about__container .reviews__black__btns__container .swiper-button-prev',
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

    //swiper projects parthner page
    let nodeProjectsParthnerPageSwiper = document.querySelector('.swiper.swiper-projects.swiper-specprojects__prathner__page')
    let projectsParthnerPageSwiper = undefined
    if (document.documentElement.clientWidth < 768) {
        projectsParthnerPageSwiper = new Swiper(nodeProjectsParthnerPageSwiper, {
            slidesPerView: 'auto',
            spaceBetween: 24,
            grabCursor: true,
            autoHeight: true,
            pagination: {
                el: '.swiper-specprojects__prathner__page .swiper-pagination-projects',
                clickable: true
            },
        })
    } else if(projectsParthnerPageSwiper) {
        projectsParthnerPageSwiper.destroy(true, true);
        projectsParthnerPageSwiper = null;
    }

    //swiper projects project page
    let nodeProjectsProjectPageSwiper = document.querySelector('.swiper.swiper-projects.swiper-same-projects__project__page')
    let projectsProjectPageSwiper = undefined
    if (document.documentElement.clientWidth < 768) {
        projectsProjectPageSwiper = new Swiper(nodeProjectsProjectPageSwiper, {
            slidesPerView: 'auto',
            spaceBetween: 24,
            grabCursor: true,
            autoHeight: true,
            pagination: {
                el: '.swiper-same-projects__project__page .swiper-pagination-projects',
                clickable: true
            },
        })
    } else if(projectsProjectPageSwiper) {
        projectsProjectPageSwiper.destroy(true, true);
        projectsProjectPageSwiper = null;
    }

    //swiper projects napryamki page
    let nodeProjectsNapryamkiPageSwiper = document.querySelector('.swiper.swiper-projects.swiper-same-projects__napryamki')
    let projectsNapryamkiPageSwiper = undefined
    if (document.documentElement.clientWidth < 768) {
        projectsNapryamkiPageSwiper = new Swiper(nodeProjectsNapryamkiPageSwiper, {
            slidesPerView: 'auto',
            spaceBetween: 24,
            grabCursor: true,
            autoHeight: true,
            pagination: {
                el: '.swiper-same-projects__napryamki .swiper-pagination-projects',
                clickable: true
            },
        })
    } else if(projectsNapryamkiPageSwiper) {
        projectsNapryamkiPageSwiper.destroy(true, true);
        projectsNapryamkiPageSwiper = null;
    }
    
});