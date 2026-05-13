document.addEventListener("DOMContentLoaded", function () {

    /* =========================
   1. Gallery Branding 클릭 슬라이드
========================= */

const projectTexts = document.querySelectorAll(".gallery-project .project-text");
const projectBullets = document.querySelectorAll(".gallery-project .project-bullet li");
const galleryImages = document.querySelectorAll(".gallery-project .gallery-img");

if (
    projectTexts.length > 0 &&
    projectBullets.length > 0 &&
    galleryImages.length > 0
) {

    function showProject(index) {

        projectTexts.forEach(text => {
            text.classList.remove("active");
        });

        projectBullets.forEach(bullet => {
            bullet.classList.remove("active");
        });

        galleryImages.forEach(img => {
            img.classList.remove("active");
        });

        projectTexts[index].classList.add("active");
        projectBullets[index].classList.add("active");
        galleryImages[index].classList.add("active");
    }

    projectBullets.forEach((bullet, index) => {

        bullet.addEventListener("click", function () {

            showProject(index);

        });

    });

    showProject(0);

}


    /* =========================
       2. Gallery Space 클릭 슬라이드
    ========================= */
    const spaceSlides = document.querySelectorAll(".space-slide");
    const spaceBullets = document.querySelectorAll(".space-bullet li");

    if (spaceSlides.length > 0 && spaceBullets.length > 0) {
        function showSpace(index) {
            spaceSlides.forEach(slide => slide.classList.remove("active"));
            spaceBullets.forEach(bullet => bullet.classList.remove("active"));

            spaceSlides[index].classList.add("active");
            spaceBullets[index].classList.add("active");
        }

        spaceBullets.forEach((bullet, index) => {
            bullet.addEventListener("click", function () {
                showSpace(index);
            });
        });

        showSpace(0);
    }


    /* =========================
   3. Museum 클릭 슬라이드
========================= */

const museumTexts = document.querySelectorAll(".museum-text");
const museumBullets = document.querySelectorAll(".museum-bullet li");
const museumImages = document.querySelectorAll(".museum-image .museum-img");

if (
    museumTexts.length > 0 &&
    museumBullets.length > 0 &&
    museumImages.length > 0
) {
    function showMuseum(index) {
        museumTexts.forEach(text => {
            text.classList.remove("active");
        });

        museumBullets.forEach(bullet => {
            bullet.classList.remove("active");
        });

        museumImages.forEach(img => {
            img.classList.remove("active");
        });

        museumTexts[index].classList.add("active");
        museumBullets[index].classList.add("active");
        museumImages[index].classList.add("active");
    }

    museumBullets.forEach((bullet, index) => {
        bullet.addEventListener("click", function () {
            showMuseum(index);
        });
    });

    showMuseum(0);
}


    /* =========================
       4. Panel 클릭 슬라이드
    ========================= */
    const panelWrap = document.querySelector(".panel-slide-wrap");
    const panelBullets = document.querySelectorAll(".panel-bullet li");

    if (panelWrap && panelBullets.length > 0) {
        function showPanel(index) {
            panelWrap.style.transform = `translateX(-${index * 50}%)`;

            panelBullets.forEach(bullet => bullet.classList.remove("active"));
            panelBullets[index].classList.add("active");
        }

        panelBullets.forEach((bullet, index) => {
            bullet.addEventListener("click", function () {
                showPanel(index);
            });
        });

        showPanel(0);
    }

    /* =========================
       5. Exhibition 설명 슬라이드
    ========================= */

    const exhibitionSlides = document.querySelectorAll(".exhibition-slide");
    const exhibitionBullets = document.querySelectorAll(".exhibition-bullet li");

    if (exhibitionSlides.length > 0 && exhibitionBullets.length > 0) {

        function showExhibition(index){

            exhibitionSlides.forEach(slide => {
                slide.classList.remove("active");
            });

            exhibitionBullets.forEach(bullet => {
                bullet.classList.remove("active");
            });

            exhibitionSlides[index].classList.add("active");
            exhibitionBullets[index].classList.add("active");
        }

        exhibitionBullets.forEach((bullet, index) => {

            bullet.addEventListener("click", function(){
                showExhibition(index);
            });

        });

        showExhibition(0);
    }
        /* =========================
       6. Exhibition 이미지 슬라이드
    ========================= */
    const exhibitionPhotos = document.querySelectorAll(".exhibition-photo");
    const exhibitionPrev = document.querySelector(".exhibition-prev");
    const exhibitionNext = document.querySelector(".exhibition-next");

    let exhibitionPhotoIndex = 0;

    if (exhibitionPhotos.length > 0 && exhibitionPrev && exhibitionNext) {
        function showExhibitionPhoto(index) {
            exhibitionPhotos.forEach(photo => photo.classList.remove("active"));
            exhibitionPhotos[index].classList.add("active");
        }

        exhibitionPrev.addEventListener("click", function () {
            exhibitionPhotoIndex--;

            if (exhibitionPhotoIndex < 0) {
                exhibitionPhotoIndex = exhibitionPhotos.length - 1;
            }

            showExhibitionPhoto(exhibitionPhotoIndex);
        });

        exhibitionNext.addEventListener("click", function () {
            exhibitionPhotoIndex++;

            if (exhibitionPhotoIndex >= exhibitionPhotos.length) {
                exhibitionPhotoIndex = 0;
            }

            showExhibitionPhoto(exhibitionPhotoIndex);
        });

        showExhibitionPhoto(0);
    }
});