export default function LightGalleryModule() {
    if ($('#lightgallery').length) {

        lightGallery(document.getElementById('lightgallery'), {
            thumbnail: false,
            download: false,

            plugins: [lgThumbnail, lgVideo, lgAutoplay, lgFullscreen, lgShare],
        });



    }

    if ($('#inline-gallery').length) {

        const lgContainer = document.getElementById('inline-gallery');
        const inlineGallery = lightGallery(lgContainer, {
            container: lgContainer,
            dynamic: true,
            hash: false,
            closable: false,
            showMaximizeIcon: true,
            appendSubHtmlTo: '.lg-item',
            slideDelay: 400,
            download: false,
            plugins: [lgVideo, lgAutoplay, lgShare],
            dynamicEl: [
                {
                    src: 'img/img-boxlibrary-1.png',
                    subHtml: `<div class="lightGallery-captions">
                <h4>Caption 1</h4>
                <p>Description of the slide 1</p>
            </div>`,
                },
                {
                    src: 'img/img-boxlibrary-2.png',
                    subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
                },
                {
                    src: 'https://youtu.be/sK17eMaPo0Y',
                    subHtml: `<div class="lightGallery-captions">
                <h4>Caption 3</h4>
                <p>Description of the slide 3</p>
            </div>`,
                },

            ],
        });

        // Since we are using dynamic mode, we need to programmatically open lightGallery
        inlineGallery.openGallery();
    }

    
}