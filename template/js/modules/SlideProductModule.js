export default function SlideProductModule() {
    function slideThumbs() {

        if (document.querySelector('.slide-thumbs')) {
            const swiper = document.querySelector('.slide-thumbs');
            const sliderContainer = swiper.querySelector('.swiper-container');
            const SliderPagination = swiper.querySelector('.swiper-pagination-');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const thumbsmall = new Swiper('.thumbs-small', {
                    speed: 1000,
                    loop: true,
                    spaceBetween: 45,
                    slidesPerView: 'auto',
                    freeMode: true,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,

                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {
                        320: {
                            spaceBetween: 20,

                        },

                        1200: {
                            spaceBetween: 45,
                        },
                    }
                });

                const thumbbig = new Swiper('.thumbs-big', {
                    speed: 1000,
                    loop: true,
                    autoHeight: true,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    thumbs: {
                        swiper: thumbsmall,
                    },
                });
                //  click slide
                // if ($('.pro-color.cl-w').length) {
                //     $('.pro-color.cl-w').on('click', function () {
                //         thumbbig.slideTo(1);
                //     });
                // }
            }
            catch (err) {
                console.log(err)
            }
        }

    }

    $('.slide-thumbs').length && slideThumbs();

}