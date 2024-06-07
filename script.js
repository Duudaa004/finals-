const slides = document.querySelectorAll(".slides img")
let slideIndex = 0;
let intervalId = null;

initializeSlider();

function initializeSlider() {
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        // intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
}

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    // clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) =>  observer.observe(el));

// second slider


function showSecond() {
    document.getElementById("secondAdviser").style.display = "grid"
    document.getElementById("adviser").style.display = "none"
    document.getElementById("thirdAdviser").style.display = "none"
}

function showFirst() {
    document.getElementById("adviser").style.display = "grid"
    document.getElementById("secondAdviser").style.display = "none"
    document.getElementById("thirdAdviser").style.display = "none"
}

function showThird() {
    document.getElementById("thirdAdviser").style.display = "grid"
    document.getElementById("adviser").style.display = "none"
    document.getElementById("secondAdviser").style.display = "none"
}

function showAll() {
    document.getElementById("firstHidden").style.opacity = 1
    document.getElementById("secondHidden").style.opacity = 1
    document.getElementById("thirdHidden").style.opacity = 1
    document.getElementById("forthHidden").style.opacity = 1
    document.getElementById("fifthHidden").style.opacity = 1
    document.getElementById("sixthHidden").style.opacity = 1
}

function showWork() {
    document.getElementById("firstHidden").style.opacity = 1
    document.getElementById("secondHidden").style.opacity = 0
    document.getElementById("thirdHidden").style.opacity = 0
    document.getElementById("forthHidden").style.opacity = 0
    document.getElementById("fifthHidden").style.opacity = 0
    document.getElementById("sixthHidden").style.opacity = 0
}

function showMockup() {
    document.getElementById("firstHidden").style.opacity = 0
    document.getElementById("secondHidden").style.opacity = 1
    document.getElementById("thirdHidden").style.opacity = 0
    document.getElementById("forthHidden").style.opacity = 0
    document.getElementById("fifthHidden").style.opacity = 0
    document.getElementById("sixthHidden").style.opacity = 0
}

function showPsd() {
    document.getElementById("firstHidden").style.opacity = 0
    document.getElementById("secondHidden").style.opacity = 0
    document.getElementById("thirdHidden").style.opacity = 1
    document.getElementById("forthHidden").style.opacity = 0
    document.getElementById("fifthHidden").style.opacity = 0
    document.getElementById("sixthHidden").style.opacity = 0
}

function showLogo() {
    document.getElementById("firstHidden").style.opacity = 0
    document.getElementById("secondHidden").style.opacity = 0
    document.getElementById("thirdHidden").style.opacity = 0
    document.getElementById("forthHidden").style.opacity = 1
    document.getElementById("fifthHidden").style.opacity = 0
    document.getElementById("sixthHidden").style.opacity = 0
}

function showPresentation() {
    document.getElementById("firstHidden").style.opacity = 0
    document.getElementById("secondHidden").style.opacity = 0
    document.getElementById("thirdHidden").style.opacity = 0
    document.getElementById("forthHidden").style.opacity = 0
    document.getElementById("fifthHidden").style.opacity = 1
    document.getElementById("sixthHidden").style.opacity = 0
}

function showIcons() {
    document.getElementById("firstHidden").style.opacity = 0
    document.getElementById("secondHidden").style.opacity = 0
    document.getElementById("thirdHidden").style.opacity = 0
    document.getElementById("forthHidden").style.opacity = 0
    document.getElementById("fifthHidden").style.opacity = 0
    document.getElementById("sixthHidden").style.opacity = 1
}