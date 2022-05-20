
// fonction pour gérer les fleches actives ou inactives

const btnRight = document.getElementById('suiv');
const btnLeft = document.getElementById('prec');
const slider = document.querySelector('.slider')
let articles = document.querySelectorAll('.article');
const sliderContainer = document.querySelector('.container')
let sliderWidth = sliderContainer.offsetWidth;
let nbrReview = 14; //nbre d'avis
let p = 0;// pour index de position (p)
let nbr;

function setNumbers() {
    sliderWidth = sliderContainer.offsetWidth;
    let boxNbre;
    if (sliderWidth > 990) { boxNbre = 4; }
    if (sliderWidth <= 990) { boxNbre = 3; }
    if (sliderWidth <= 768) { boxNbre = 2; }
    if (sliderWidth <= 576) { boxNbre = 1; }
    nbr = Math.ceil(nbrReview / boxNbre);
    console.log(nbr)
    var sliderWidthBox = sliderWidth / boxNbre - 14
    articles.forEach(article => article.style.width = sliderWidthBox + "px");
    slider.style.transform = "translateX( 0)";
}
setNumbers()

checkActiveArrow();
btnRight.addEventListener('click', () => {

    if (p > -(nbr - 1)) {
        p--;
        slider.style.transform = "translateX(" + p * sliderWidth + "px)";
        checkActiveArrow();
        console.log(p + " " + nbr)
    }
})
btnLeft.addEventListener('click', () => {

    if (p < 0) {
        p++;
        slider.style.transform = "translateX(" + p * sliderWidth + "px)";
        checkActiveArrow();
        console.log(p)
    }
})

function checkActiveArrow() {
    if (p < 0 && nbr > -p - 1) {
        btnLeft.classList.remove("inactive-arrow");
        btnRight.classList.remove("inactive-arrow");
    }
    if (p == 0) {
        btnLeft.classList.add("inactive-arrow");

    }
    if (p == -(nbr - 1)) {
        btnRight.classList.add("inactive-arrow");

    }
    let info = sliderContainer.offsetWidth;
    console.log(info)



}

window.addEventListener('resize', setNumbers);
