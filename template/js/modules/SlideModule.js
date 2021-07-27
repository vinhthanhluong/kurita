export default function SlideModule(){
    function slideOne() {
      
        if (document.querySelector('.slide-one')) {
            const swiper = document.querySelector('.slide-one');
            const sliderContainer = swiper.querySelector('.swiper-container');
            const SliderPagination = swiper.querySelector('.swiper-pagination-orange');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    loop: true,
                    slidesPerView: 1,
                    // autoplay: {
                    //     delay: 4000,
                    // },
                    
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                  
                })
            }
            catch (err) {
                console.log(err)
            }

        }
    }

    $('.slide-one').length && slideOne();


    function slideThree() {
      
        if (document.querySelector('.slide-three')) {
            const swiper = document.querySelector('.slide-three');
            const sliderContainer = swiper.querySelector('.swiper-container');
            const SliderPagination = swiper.querySelector('.swiper-pagination-orange');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    loop: true,
                    spaceBetween: 30,
                    slidesPerView: 3,
                    // autoplay: {
                    //     delay: 4000,
                    // },
                    
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                  
                })
            }
            catch (err) {
                console.log(err)
            }

        }
    }

    $('.slide-three').length && slideThree();

    if (document.querySelector('#slideasd')) {
        const swiper = document.querySelector('#slideasd');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                    loop: true,
                    spaceBetween: 20,
                    // autoplay: {
                    //     delay: 4000,
                    // },
                    // pagination: {
                    //     el: '.swiper-pagination',
                    //     clickable: true,
                    // },

                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // },

                    breakpoints: {
                        // 320: {
                        //     spaceBetween: 50
                        // },
                        // 480: {
                        //     spaceBetween: 30
                        // },
                        // 576: {
                        //     spaceBetween: 0,

                        // }
                    }
                    // observeParents:true,
                    // observeSlideChildren: true,
                    // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}