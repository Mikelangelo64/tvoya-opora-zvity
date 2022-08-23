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
    activateToggleSection('.toggle-section__profile')

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
    //faq-section start
    if (document.documentElement.clientWidth < 768){
        $('.toggle-section-head__faq').slideUp()

        $('.faq__choosen__toggle').click(function(e){
            $(this).toggleClass('_open-faq-heads')
            $('.toggle-section-head__faq').slideToggle(300)
        })

        if($('.faq__choosen__toggle')){

            $('.toggle-section-head__item').click(function(e){
                $('.faq-section .faq__choosen__toggle').removeClass('_open-faq-heads')
                $('.toggle-section-head__faq').slideUp(300)

                $('.faq-section .faq__choosen__toggle p').html($(this).html());
            })
        }
    }
    //faq-section end


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
    

    //login
    let isPasswordVisible = false
    $('.login-form__password__label').click(function(e){
        $(this).toggleClass('_show-password')
        isPasswordVisible = !isPasswordVisible

        if(isPasswordVisible){
            $(this).prev().attr('type', 'text')
        } else {
            $(this).prev().attr('type', 'password')
        }
    })

    let isPasswordVisiblePrivate = false
    $('.login-form__password__label__private').click(function(e){
        
        isPasswordVisiblePrivate = !isPasswordVisiblePrivate

        if(isPasswordVisiblePrivate){
            $('.private-info-parameters__password input').attr('type', 'text')
            $('.login-form__password__label__private').addClass('_show-password')
        } else {
            $('.private-info-parameters__password input').attr('type', 'password')
            $('.login-form__password__label__private').removeClass('_show-password')
        }
    })

    // const logInputs = Array.from(document.querySelectorAll('.login-form input'))
    // const btnSubmit = document.querySelector('.login-form button[type=submit]')

    // if(logInputs && btnSubmit) {
    //     logInputs.forEach(item => {
    //         item.addEventListener('change', verifyValidInput)
    //     })

    //     function verifyValidInput(e){
    //         console.log(e.target.value);
    //         if(e.target.value.trim()){
    //             btnSubmit.classList.remove('button-disable')
                
    //         }else{

    //             btnSubmit.classList.add('button-disable')
    //         }
    //     }
    // }

    //end login

    //profile-general show values mob
    if (document.documentElement.clientWidth < 768){

        toggleProjectValues('.general-info', '.values__mob.separate-section-values__projects')
        toggleProjectValues('.general-info', '.values__mob.separate-section-values__history')
        toggleProjectValues('.profile-projects ','.separate-section-values__projects')
        toggleProjectValues('.profile-projects ','.separate-section-values__money')

        function toggleProjectValues(parent, section){
            $(`${parent} .separate-section-values${section} .separate-section-values__list`).slideUp()

            $(`${parent} .separate-section-values${section} .separate-section-values__total`).click(function(e){
                $(`${parent} .separate-section-values${section} .separate-section-values__list`).slideToggle(300)
                $(this).children('.separate-section-values__label__open').toggleClass('_opened-values')
            })
        }
    }

    //card profile-private
    $('.private-info__front .private-info__edit').click(function(e){
        e.preventDefault()

        $('.private-info__card ').addClass('_turn-card')
    })
    $('.private-info__back .private-info__edit').click(function(e){
        e.preventDefault()

        $('.private-info__card ').removeClass('_turn-card')
    })

    if (document.documentElement.clientWidth > 767){

        const labelPass = document.querySelectorAll('.private-info-parameters__password .private-info-parameters__title')
        
        if(labelPass.length > 0){
            labelPass[0].innerHTML = 'Пароль'
        }
    }

    //profile-projects
    $(".profile-projects-table__field.profile-projects-table__detail").slideUp()

    $('.profile-projects-table__field__mob').click(function(e){
        $(this).toggleClass('_active-field')
        $(this).next().slideToggle(300)

        $('.profile-projects-table__field__mob').not( $(this)).removeClass('_active-field')
        $('.profile-projects-table__field.profile-projects-table__detail').not( $(this).next()).slideUp(300)
    })

    $('.profile-projects-table__detail .profile-projects-table__more__close').click(function(e){
        //console.log(1);
        $(this).parent('.profile-projects-detail').parent('.profile-projects-table__detail').slideUp(300)
        $(this).parent('.profile-projects-detail').parent('.profile-projects-table__detail').prev().removeClass('_active-field')


    })

    $('.profile-projects-table__field.profile-projects-table__more .profile-projects-table__more__close').fadeOut(0)
    $('.profile-projects-table__field.profile-projects-table__more').click(function(e){
        $(this).next().next().slideToggle(300)
        $(this).children('.profile-projects-table__more__close').fadeToggle(0)
        $(this).children('.profile-projects-table__more__open').fadeToggle(0)

        $(".profile-projects-table__field.profile-projects-table__detail").not($(this).next().next()).slideUp()
        $('.profile-projects-table__more__close').not($(this).children('.profile-projects-table__more__close')).fadeOut(0)
        $('.profile-projects-table__more__open').not($(this).children('.profile-projects-table__more__open')).fadeIn(0)

    })

    //profile my projects mob

    if (document.documentElement.clientWidth < 768){
        $(".profile-my-project .separate-section-bottom .separate-section-bottom__performer").slideUp()
        $(".profile-my-project .separate-section-bottom .separate-section-bottom-money").slideUp()
        $(".profile-my-project .separate-section-bottom .separate-section-bottom__more__close").slideUp()
        $(".profile-my-project .separate-section-header .separate-section-header__text__block").slideUp()

        $('.profile-my-project .separate-section-header .separate-section-header__two__columns').click(function(e){
            $(this).toggleClass('_active-field')
            $(this).parent().next().children(".profile-my-project .separate-section-bottom .separate-section-bottom__performer").slideToggle(300)
            $(this).parent().next().children(".profile-my-project .separate-section-bottom .separate-section-bottom-money").slideToggle(300)
            $(this).parent().next().children(".profile-my-project .separate-section-bottom .separate-section-bottom__more__close").slideToggle(300)
            $(this).next().slideToggle(300)

            $('.profile-my-project .separate-section-header .separate-section-header__two__columns').not( $(this)).removeClass('_active-field')
            $('.profile-my-project .separate-section-bottom .separate-section-bottom__performer').not( $(this).parent().next().children(".profile-my-project .separate-section-bottom .separate-section-bottom__performer")).slideUp(300)
            $('.profile-my-project .separate-section-bottom .separate-section-bottom-money').not( $(this).parent().next().children(".profile-my-project .separate-section-bottom .separate-section-bottom-money")).slideUp(300)
            $('.profile-my-project .separate-section-bottom .separate-section-bottom__more__close').not( $(this).parent().next().children(".profile-my-project .separate-section-bottom .separate-section-bottom__more__close")).slideUp(300)
            $('.profile-my-project .separate-section-header .separate-section-header__text__block').not( $(this).next()).slideUp(300)
        })


        $('.profile-my-project .separate-section-bottom .separate-section-bottom__more__close').click(function(e){
            //console.log(1);
            $(this).parent().prev().children('.separate-section-header__two__columns').removeClass('_active-field')
            $(this).slideUp(300)

            $(this).prev().slideUp(300)
            $(this).prev().prev().prev().slideUp(300)

            $(this).parent().prev().children('.separate-section-header__text__block').slideUp(300)
    
    
        })
    }


    //create project

    //toogle create
    if (document.documentElement.clientWidth < 768){
        $('.create-project-steps').fadeOut(0)
        $('.create-project-form').slideUp(0)

        $('.create-project__title.title__mob').click(function(e){
            $(this).children('.create-project__label__open').toggleClass('_opened-values')
            $('.create-project-steps').fadeToggle(300)
            $('.create-project-form').slideToggle(300)
        })
    }

    //steps toggle
    $('.create-project-form__item').not($('.create-project-form__item._active-step')).fadeOut(0)

    $('.create-project-form__btn__next').click(function(e){
        const goStep = $(this).attr('data-step')
        //const stepLabel = $(`.create-project-steps__item`).attr()

        if(goStep){
            $('.create-project-form__item').fadeOut(300)
            $(`.create-project-form__item${goStep}`).fadeIn(300)
            $(`.create-project-form__item${goStep}`).addClass('_active-step')

            $('.create-project-steps__item').removeClass('_active-step')
            $(`.create-project-steps__item${goStep}`).addClass('_active-step')

        }
    })
    $('.create-project-steps__item').click(function(e){
        const goStep = $(this).attr('data-step')
        //const stepLabel = $(`.create-project-steps__item`).attr()

        if(goStep){
            $('.create-project-form__item').fadeOut(300)
            $(`.create-project-form__item${goStep}`).fadeIn(300)
            $(`.create-project-form__item${goStep}`).addClass('_active-step')

            $('.create-project-steps__item').removeClass('_active-step')
            $(`.create-project-steps__item${goStep}`).addClass('_active-step')

        }
    })

    //input file show img
    const sectionFile = document.querySelector('.create-project-form__file._add-parthner-0')
    const sectionFileDocument = document.querySelector('.create-project-form__file._add-document-0')
    const sectionFilePhoto = document.querySelector('.create-project-form__file.create-project-form__file__photo')
    
    //console.log(sectionFile);
    
    if(sectionFile){
        makePreviewImg(sectionFile)
    }
    if(sectionFileDocument){
        makePreviewImg(sectionFileDocument)
    }
    if(sectionFilePhoto){
        makePreviewImg(sectionFilePhoto)
    }

    function makePreviewImg(sectionFile){
        
        let section = sectionFile.classList[1]
       // console.log(section);

        const imgInp = document.querySelector(`.${section} input`)
        const blah = document.querySelector(`.${section} img`)
        
        

        imgInp.onchange = evt => {

            if(section.includes('document')){
                    //sectionFile.classList.remove('_image-default')
                blah.src = './img/profile/label-document.svg'
                return
            }

            sectionFile.classList.remove('_image-default')
            const [file] = imgInp.files
            if (file) {

                blah.src = URL.createObjectURL(file)
            }
        }
    }

    //add more btn
    let counter = 1
    $('.create-project-form__added__more').click(addedInput)

    function addedInput(e){
        const filesList = $(e.currentTarget).parent().attr('data-list')
        const containerClass = $(e.currentTarget).parent()[0].classList[1]
        const counter = $(e.currentTarget).parent().children().length

        //console.log( $(e.currentTarget).parent()[0].classList[1]);

        let labelText

        if(filesList === 'parthner'){
            labelText = 'Ім’я партнера'
        }else{ 
            labelText = 'Назва документу'
        }

        $(
            `
            <div class="create-project-form__added__item">
                <div class="create-project-form__file _add-${filesList}-${counter} _image-default">
                    <input type="file" name="${filesList}-${counter}" id="${filesList}-${counter}">
                    <label for="${filesList}-${counter}">
                        <div>
                            <img ${
                                filesList === 'parthner' && `src="./img/profile/label-logo-parthner.svg"`
                            } ${
                                filesList === 'document' && `src="./img/profile/label-add-grey-2.svg"`
                            } alt=""/>
                            
                            
                        </div>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12.6973" cy="12.0439" r="12" fill="#EE2742"/>
                            <path d="M16.1084 11.1621V12.7686H9.28613V11.1621H16.1084ZM13.5654 8.4209V15.667H11.8359V8.4209H13.5654Z" fill="white"/>
                        </svg>
                    </label>
                </div>
                <div class="create-project-form__input__container">
                
                    <p class="create-project-form__label">
                        ${
                            labelText
                        }
                        
                    </p>
                    <input 
                        type="text" 
                        name="project-${filesList} project-${filesList}-${counter}" 
                        ${
                            filesList === 'parthner' && "placeholder='Ім’я партнера'"
                        }
                        ${
                            filesList === 'document' && "placeholder='Назва документу'"
                        }
                        >
                </div>
            </div>
            `
        ).insertBefore(`.${containerClass} .${e.currentTarget.classList[0]}`)

        //console.log($(`._add-${filesList}-${counter}`)[0])
        //if(filesList !== 'document')
        makePreviewImg($(`._add-${filesList}-${counter}`)[0])
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
    
    //swiper news
    let newsBannerSwiper = new Swiper('.swiper.swiper-last-news', {
        slidesPerView: 1,
        spaceBetween: 24,
        grabCursor: true,
        // autoHeight: true,
        pagination: {
            el: '.swiper-pagination-last-news',
            clickable: true
        },
        navigation: {
            nextEl: '.last-news__btns__container .swiper-button-next',
            prevEl: '.last-news__btns__container .swiper-button-prev',
        },
        // breakpoints: {
        //     768:{
        //         slidesPerView: 1,
        //         centeredSlides: false,
        //         spaceBetween: 80,
        //         autoHeight: false,
        //     },
        // }
    })
});